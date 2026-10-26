import Profile from "../components/Profile";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  return (
    <div className="">
      <header className=" h-auto flex flex-col md:flex-row gap-3 items-center">
        <ProfileCard />
        <Profile/>
      </header>
    </div>
  );
};

export default Home;
