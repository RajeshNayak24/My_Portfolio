import type { NavbarProps } from './Navbar.types';

const Navbar = ({ logoText, items }: NavbarProps) => {
  return (
    <nav>
      <div>{logoText}</div>

      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
