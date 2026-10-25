import profileImage from "../assets/image.png";
import VtslImage from "./vtslImage";

const ProfileCard = () => {
  return (
    <main className="h-full w-full flex-3 justify-center items-center flex flex-col gap-3">
      <figure className="aspect-square rounded-full w-full overflow-hidden">
        <VtslImage imageSrc={profileImage} />
      </figure>
      <section className="space-x-3">
        <button className="border p-1 rounded-md cursor-pointer">Activity</button>
        <button className="border p-1 rounded-md cursor-pointer">Resume</button>
      </section>
    </main>
  );
};

export default ProfileCard;
