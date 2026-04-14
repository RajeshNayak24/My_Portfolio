import type { NavbarProps } from "./Navbar.types";

const Navbar = ({ items }: NavbarProps) => {
  return (
    <nav className="w-full text-white ">
        <div className="flex  flex-col justify-between items-center px-8 py-4 lg:flex-row">
          <div className="flex  items-center gap-2 font-bold text-xl">
            <img className="w-10 h-10 rounded-full" src="src/assets/code.png" alt="profile" />
            <span>R<span className="text-[#FF77C9]">A</span>JESH</span>
          </div>

          <ul className="flex gap-8 font-medium">
            {items.map((item) => (
              <li key={item.label}>
                <a className="hover:text-[#FF77C9]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
