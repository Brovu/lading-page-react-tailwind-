import { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import useDarkMode from "../../useDarkMode";
function Navbar(props) {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-32 font-extrabold text-white mr-2">Nerd Card</div>
        {isDarkMode ? (
          <BsFillSunFill
            size={"27px"}
            color={"#e9c46a"}
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={"27px"}
            color={"#e9c46a"}
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto font-extrabold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"27px"}
            color={"#ccc"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"27px"}
            color={"#ccc"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className="md-size-menu">Features</li>
            <li className="md-size-menu">Menu</li>
            <li className="md-size-menu">Our Story</li>
            <li className="md-size-menu">Contact</li>
          </>
        )}
        {openMenu && (
          <ul className="absolute right-8 bg-white text-center p-8 text-black text-20">
            <li>Features</li>
            <li>Menu</li>
            <li>Our Story</li>
            <li>Contact</li>
          </ul>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
