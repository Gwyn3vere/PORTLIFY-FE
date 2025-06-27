import { useState, useRef, useEffect } from "react";
// Libraries
import classNames from "classnames/bind";
// CSS - Components - React icons - Images - Hooks
import styles from "./Header.module.css";
import { Hamburgur, Navbar } from "./navbar";
import { UserMenu } from "./Menu/user_menu";
import { GuestMenu } from "./Menu/guest_menu";
import { vectorImages } from "../../../assets/images";
import { useTheme } from "../../hooks/useTheme";

const cx = classNames.bind(styles);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // Fake login
  const [isLogin, setIsLogin] = useState(false);
  const { theme } = useTheme();

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={cx("header")}>
      <div className={cx("header-container", "flex", "justify-between", "items-center")}>
        <div className={cx("flex", "gap-3", "items-center")} ref={dropdownRef}>
          <Hamburgur isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className={cx("logo", "flex w-[200px]")}>
            {theme === "dark" && <img src={vectorImages.logoHeaderLight} alt="logo header" />}
            {theme === "light" && <img src={vectorImages.logoHeaderDark} alt="logo header" />}
          </div>
        </div>
        <Navbar isOpen={isOpen} />
        {!isLogin ? <GuestMenu /> : <UserMenu />}
      </div>
    </header>
  );
}

export default Header;
