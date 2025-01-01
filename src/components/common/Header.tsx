import { ROUTES } from "@src/constants/route";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-center shadow">
      <nav>
        <ul className="flex flex-row items-center justify-center gap-10">
          {ROUTES.map((route) => (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-500" : "text-black"
                }
                to={route.to}
              >
                {route.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
