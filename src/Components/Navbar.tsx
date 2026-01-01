import {
  RiHomeLine,
  RiCodeFill,
  RiLink,
  RiUserLine,
  RiMailLine,
} from "@remixicon/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-navBarBackground border border-navbarBorderColor w-2/3 fixed h-[5vh] mt-5 rounded-full flex justify-end">
      <ul className="flex justify-evenly items-center h-full w-1/3 font-poppins text-lg text-fadeBlack bg-black rounded-full p-1">
        {/* Home */}
        <NavLink to="/" end className={({ isActive }) => isActive 
        ? "bg-amber-300" 
        : "bg-amber-950"}>
          {({ isActive }) => (
            <>
              <RiHomeLine />
              {isActive && <span>home</span>}
            </>
          )}
        </NavLink>

        <NavLink to="/asdf" end className={({ isActive }) => isActive ? "bg-amber-300" : "bg-amber-950"}>
          <RiCodeFill />
        </NavLink>

        <NavLink to="/asdf" end className={({ isActive }) => isActive ? "bg-amber-300" : "bg-amber-950"}>
          <RiLink />
        </NavLink>

        <NavLink to="/asdfa" end className={({ isActive }) => isActive ? "bg-amber-300" : "bg-amber-950"}>
          <RiUserLine />
        </NavLink>

        <NavLink to="/contact" end className={({ isActive }) => isActive ? "bg-amber-300" : "bg-amber-950"}>
          <RiMailLine />
        </NavLink>

      </ul>
    </div>
  );
};

export default Navbar;
