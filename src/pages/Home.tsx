import Profile from "../components/Profile";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  return (
    <div className="">
      <header className=" h-100 flex flex-col md:flex-row gap-3">
        <ProfileCard />
        <Profile/>
      </header>
    </div>
  );
};

export default Home;
