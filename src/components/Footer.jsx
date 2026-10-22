const Footer = () => (
  <footer className="border-t border-[#211c48] px-6 py-8 sm:px-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-[#8c89a6] sm:flex-row">
      <span>&copy; 2026 Mira Cho</span>
      <div className="flex gap-6">
        <a href="mailto:mira@example.com" className="transition-colors hover:text-[#00e5c7]">
          Email
        </a>
        <a href="#" className="transition-colors hover:text-[#00e5c7]">
          GitHub
        </a>
        <a href="#" className="transition-colors hover:text-[#00e5c7]">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
