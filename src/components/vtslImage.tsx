import { useEffect, useRef } from "react";
import effectConfig from "../config/vtslImageConfig";

interface VtslImageProps {
  imageSrc: string;
}

const readAsDataUrl = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to read the profile image."));
      }
    };
    reader.onerror = () => {
      reject(reader.error ?? new Error("Failed to read the profile image."));
    };
    reader.readAsDataURL(blob);
  });

const VtslImage = ({ imageSrc }: VtslImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let cancelled = false;
    let cleanupEffect: (() => void) | undefined;
    let moduleUrl: string | undefined;

    const initializeEffect = async () => {
      try {
        const imageResponse = await fetch(imageSrc);

        if (!imageResponse.ok) {
          throw new Error("Failed to load the profile image.");
        }

        const imageData = await readAsDataUrl(await imageResponse.blob());

        if (cancelled) return;

        const response = await fetch(
          "https://assets.uxpilot.ai/effects/09-dither-ascii-maker/0.4.0/45bfa808ad9db82ea57dbc6a30a0dc5a20ca7824b886181e00138b3356c8798c/index.js",
          {
            mode: "cors",
            credentials: "omit",
            redirect: "error",
            integrity:
              "sha256-Rb+oCK2duC6lfbxqMKDcWiDKeCS4hhgeABOLM1bIeYw=",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to load the visual effect.");
        }

        const bytes = await response.arrayBuffer();

        if (cancelled) return;

        moduleUrl = URL.createObjectURL(
          new Blob([bytes], { type: "text/javascript" }),
        );

        const { mount } = await import(/* @vite-ignore */ moduleUrl);

        if (cancelled) return;

        const result = await mount(container, {
          ...effectConfig,
          assets: [{ slot: "source", use: "image", data: imageData }],
        });

        if (typeof result === "function") {
          cleanupEffect = result;
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to initialize the effect:", error);
        }
      }
    };

    void initializeEffect();

    return () => {
      cancelled = true;
      cleanupEffect?.();

      if (moduleUrl) {
        URL.revokeObjectURL(moduleUrl);
      }

      container.replaceChildren();
    };
  }, [imageSrc]);

  return (
    <div
      ref={containerRef}
      className="h-full w-full overflow-hidden"
      aria-label="Dither ASCII visual effect"
    />
  );
};

export default VtslImage;
