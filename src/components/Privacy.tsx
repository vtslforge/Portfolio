import { useState } from "react";

const Privacy = () => {
  const [showPrivacyNote, setShowPrivacyNote] = useState(false);

  return (
    <footer className="mt-10 border-t border-amber-50/10 py-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs md:text-sm text-(--color-primary-text)">
          © {new Date().getFullYear()} Vatsalya Singh. All rights reserved.
        </p>

        <div>
          <button
            type="button"
            onClick={() => setShowPrivacyNote(true)}
            className="text-xs md:text-sm text-(--color-primary-text) cursor-pointer underline-offset-2 hover:underline"
          >
            Privacy
          </button>

          {showPrivacyNote && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="w-full max-w-sm border border-white/10 bg-[#151617] p-5 shadow-xl">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">
                    Privacy Notice
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowPrivacyNote(false)}
                    className="text-xs text-amber-200 hover:text-white"
                  >
                    Close
                  </button>
                </div>
                <p className="text-sm leading-5 text-(--color-primary-text)">
                  This portfolio is a personal website created to showcase my
                  work, projects, and professional interests.
                  <br />
                  <br />
                  I use Umami Analytics to understand website traffic and
                  improve the experience. Some features may rely on third-party
                  services such as GitHub, Google Fonts, and external visual
                  effects, which may process basic technical information.
                  <br />
                  <br />I do not sell personal information or use it for
                  advertising. Contact details are provided solely for
                  professional communication and project-related discussions.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Privacy;
