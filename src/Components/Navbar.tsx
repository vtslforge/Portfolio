import { RiDownloadFill } from "@remixicon/react";

// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-navBarBackground border border-navbarBorderColor w-2/3 top-0 fixed h-12 mt-5 ml-3 rounded-full flex justify-end font-poppins ">
      {/* <div className="w-1/5 justify-center flex items-center font-medium text-lg" ><p>Vatsalya Singh</p></div> */}
      <div className="w-4/5 flex justify-center space-x-10 items-center text-fadeBlack " >
      {/* <NavLink end to={"/"} className="hover:text-black" >Home</NavLink>
      <NavLink end to={"/"} className="hover:text-black" >Projects</NavLink>
      <NavLink end to={"/"} className="hover:text-black" >Blog</NavLink>
      <NavLink end to={"/"} className="hover:text-black" >About me</NavLink>
      <NavLink end to={"/"} className="hover:text-black" >Contact me</NavLink> */}
      </div>
      <div className="w-1/5 flex justify-center items-center" ><p className="cursor-pointer p-1 pl-4 pr-4 rounded-full text-fadeBlack hover:text-black flex items-center gap-2">Resume <RiDownloadFill className="size-4" /></p></div>

    </div>
  );
};

export default Navbar;
