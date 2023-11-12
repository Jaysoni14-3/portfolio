const Header = () => {
  const navlinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="flex justify-between shadow-md py-6 px-12">
      <div className="logo ">
        <h3 className="text-white text-2xl">Jay</h3>
      </div>
      <nav className="hidden md:flex gap-8">
        {navlinks.map((link, index) => (
          <li className="list-none text-neutral-100 text-lg" key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </nav>
    </header>
  );
};

export default Header;
