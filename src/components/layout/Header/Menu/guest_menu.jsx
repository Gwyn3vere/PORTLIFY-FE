import { useState, useRef, useEffect } from "react";
// libraries
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
// CSS - React Icons - Components
import styles from "./Guest.module.css";
import ThemeMenu from "../../../ui/Theme/theme";
import LanguageMenu from "../../../ui/Languages/languages";
import { TbMenu2, TbChevronRight, TbChevronDown, TbLanguage, TbMoon } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";

const cx = classNames.bind(styles);

export function GuestMenu() {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);
  const toggleDropdown = (name) => {
    setIsDropdownOpen((prev) => (prev === name ? null : name));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [subMenu, setSubMenu] = useState(null);

  const handleSubMenuToggle = (name) => {
    if (subMenu === name) {
      setSubMenu(null);
    } else {
      setSubMenu(name);
    }
  };

  return (
    <div className={cx("flex items-center justify-end gap-5 w-[200px]")} ref={dropdownRef}>
      <div className={cx("auth", "flex")}>
        <div className={cx("sign-up", "w-auto h-auto")}>
          <a href="#">Sign up</a>
        </div>
      </div>
      <div className={cx("menu", "relative hidden xl:block")}>
        <span
          className={cx("text-[30px]", { active: isDropdownOpen === "guest" })}
          onClick={() => toggleDropdown("guest")}
        >
          {isDropdownOpen === "guest" ? <MdOutlineClose /> : <TbMenu2 />}
        </span>
        {isDropdownOpen === "guest" && (
          <div className={cx("dropdown", "absolute p-5", "xl:w-[300px] xl:h-auto", "xl:top-15 xl:right-0")}>
            <div
              className={cx("theme", "flex items-center justify-between py-5 px-5")}
              onClick={() => handleSubMenuToggle("theme")}
            >
              <div className={cx("flex items-center gap-5")}>
                <span>
                  <TbMoon />
                </span>
                Themes
              </div>
              {subMenu === "theme" ? (
                <span className={cx("sub-icon")}>
                  <TbChevronDown />
                </span>
              ) : (
                <span className={cx("sub-icon")}>
                  <TbChevronRight />
                </span>
              )}
            </div>
            {subMenu === "theme" ? (
              <div className={cx("sub-menu", "py-5 px-5")}>
                <ThemeMenu />
              </div>
            ) : null}
            <div
              className={cx("language", "flex items-center justify-between py-5 px-5")}
              onClick={() => handleSubMenuToggle("language")}
            >
              <div className={cx("flex items-center gap-5")}>
                <span>
                  <TbLanguage />
                </span>
                Languages
              </div>
              {subMenu === "language" ? (
                <span className={cx("sub-icon")}>
                  <TbChevronDown />
                </span>
              ) : (
                <span className={cx("sub-icon")}>
                  <TbChevronRight />
                </span>
              )}
            </div>
            {subMenu === "language" ? (
              <div className={cx("sub-menu", "py-5 px-5")}>
                <LanguageMenu />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
