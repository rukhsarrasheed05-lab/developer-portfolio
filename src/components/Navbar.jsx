import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 transition-colors duration-300 sm:px-10 ${
        scrolled ? "bg-[#030014]/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a
        href="#hero"
        className="flex items-center gap-3 font-display text-sm font-semibold tracking-wide"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-400/40 text-xs text-violet-200">
          MC
        </span>
        <span className="hidden sm:inline">Rukhsar Rasheed</span>
      </a>

      <ul className="hidden gap-10 font-mono text-xs uppercase tracking-widest text-[#8c89a6] sm:flex">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`transition-colors hover:text-[#00e5c7] ${
                active === link.id ? "text-[#00e5c7]" : ""
              }`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <button
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
      >
        <span
          className={`block h-px w-5 bg-[#f1efff] transition-transform ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-5 bg-[#f1efff] transition-opacity ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-px w-5 bg-[#f1efff] transition-transform ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <ul className="absolute left-0 right-0 top-full flex flex-col gap-1 border-t border-[#211c48] bg-[#030014]/95 p-6 font-mono text-sm uppercase tracking-widest text-[#8c89a6] backdrop-blur-md sm:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.id);
                  setOpen(false);
                }}
                className="block py-3"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
