import { navLinks } from "../data";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <a href="#home" className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-pink font-display text-sm font-semibold text-pink">
          SM
        </a>

        <nav className="flex gap-4 text-xs font-medium uppercase tracking-wide sm:gap-9 sm:text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-pink">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
