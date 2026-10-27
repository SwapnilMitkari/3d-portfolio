import { profile } from "../data";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>
          © {new Date().getFullYear()} <span className="font-medium text-ink">{profile.name}</span>. All rights reserved.
        </p>
        <a href="#home" className="font-semibold text-pink hover:underline">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
