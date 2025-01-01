import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-center shadow">
      <nav>
        <ul className="flex flex-row items-center justify-center gap-10">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gra-500"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gra-500"
              }
              to="/first"
            >
              First
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gra-500"
              }
              to="/second"
            >
              Second
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
