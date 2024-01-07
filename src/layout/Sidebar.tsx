import { HeartIcon, HomeIcon, NewspaperIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
const navLinks = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Health",
    link: "/health",
    icon: <HeartIcon />,
  },
  {
    title: "My Benefits",
    link: "/mybenefits",
    icon: <NewspaperIcon />,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-24 items-center flex flex-col gap-3 bg-sky-500 rounded-e shadow p-3 sticky z-10 top-24">
      {navLinks.map((item, index) => {
        return (
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              isActive ? "active sideBarLink" : "sideBarLink"
            }
            key={index}
          >
            {item.icon}
            <div className="text-xs mt-1">{item.title}</div>
          </NavLink>
        );
      })}
    </aside>
  );
};
export default Sidebar;
