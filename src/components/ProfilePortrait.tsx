import profileImage from "../assets/image.png";
import AsciiDitherImage from "./AsciiDitherImage";

const ProfilePortrait = () => {
  return (
    <main className="flex h-full w-full flex-3 flex-col items-center justify-evenly gap-3">
      <figure className="w-[70%] sm:w-[60%] max-w-80 md:w-[90%] md:max-w-60 lg:w-[90%] lg:max-w-100 shrink-0 overflow-hidden rounded-full">
        <AsciiDitherImage imageSrc={profileImage} />
      </figure>

      <section className="flex gap-3">
        <button className="w-fit border border-amber-50/10 p-1 px-2 text-sm text-(--color-primary-text)">
          Activity
        </button>
        <button className="w-fit border border-amber-50/10 p-1 px-2 text-sm text-(--color-primary-text)">
          Coding
        </button>
      </section>
    </main>
  );
};

export default ProfilePortrait;