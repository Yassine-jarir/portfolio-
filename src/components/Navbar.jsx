import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [Active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img src={logo} className="w-9 h-9 object-contain" />
          <p className="text-white text-[14px] font-medium cursor-pointer  ">
            YASSINE JARIR
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row  gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`
                ${Active === link.title ? `text-white ` : `text-secondary`}
                hover:text-white text-[16px] font-medium cursor-pointer
                `}
                onClick={() => setActive(`${link.title}`)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex "
          } p-10 bg-red-950 absolute top-20 right-0 mx-4 my-2 
          min-width-120px z-10 rounded-xl
          sm:hidden 
          `}
        >
          <ul className="list-none flex flex-col gap-10 ">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`
                ${Active === link.title ? `text-white ` : `text-secondary`}
                font-poppins font-medium cursor-pointer text-[15px]
                `}
                  onClick={() => setToggle(!toggle)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
