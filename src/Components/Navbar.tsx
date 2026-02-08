
import { useEffect, useState } from "react";
import { RiCloseLine, RiMenu4Fill } from "@remixicon/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#project" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#020015]/90 backdrop-blur-xl border-b border-white/10 w-full z-50 top-0 fixed h-14 flex justify-between items-center font-poppins px-4 md:px-10">
      <a href="#home" className="font-poppins font-semibold text-lg md:text-xl">
        Vatsalya Singh
      </a>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden p-2 rounded-xl border border-white/10 hover:border-[#00F5FF]/60 transition"
      >
        {open ? <RiCloseLine /> : <RiMenu4Fill />}
      </button>
      <section className="hidden md:flex h-full">
        <ul className="flex h-full justify-center items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition"
            >
              {link.label}
            </a>
          ))}
        </ul>
      </section>
      <section
        className={`absolute right-4 top-16 md:hidden w-[85vw] max-w-xs rounded-3xl border border-[#00F5FF]/30 bg-[#0b072a]/95 p-6 transition-all ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-5 text-white">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer text-sm uppercase tracking-[0.25em] opacity-80 hover:opacity-100 transition"
            >
              {link.label}
            </a>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;

