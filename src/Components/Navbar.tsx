
// import { NavLink } from "react-router-dom";
import { useState , useEffect } from "react";
import { RiMenu4Fill } from "@remixicon/react";

const Navbar = () => {
  const [open , setOpen] = useState(false);
  useEffect(() => {
  const onResize = () => window.innerWidth >= 768 && setOpen(false);
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);
  return (
    <div className="bg-[#020015] w-full z-50 top-0 fixed h-12 flex justify-between items-center font-poppins pl-3 pr-3">
        <p className="font-poppins font-medium text-xl">Vatsalya singh</p>
        <RiMenu4Fill onClick={()=>setOpen(!open)} className="relative md:hidden"/>
          <section    className={`absolute top-12 right-3 bg-[#0e0822] border border-[#00F5FF] text-black w-50 h-80 rounded-3xl flex justify-center items-center transition-all duration-2s ease-in-out ${open? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <ul className="flex flex-col justify-between h-full p-3 items-center text-white"> 
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">About me</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">contact</li>
            </ul>
          </section>
          <section className="hidden md:flex h-full">
            <ul className="flex h-full justify-center items-center gap-15">
              <li className="cursor-pointer opacity-70 hover:opacity-100">Home</li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">Projects</li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">About me</li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">Blog</li>
              <li className="cursor-pointer opacity-70 hover:opacity-100">contact</li>
            </ul>
          </section>
    </div>
  );
};

export default Navbar;

