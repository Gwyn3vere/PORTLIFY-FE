import { useState } from "react";
// Libraries
import classNames from "classnames/bind";
// CSS
import styles from "./Themes.module.css";
// Hooks
import { useTheme } from "../../hooks/useTheme";

const cx = classNames.bind(styles);

function ThemeMenu() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={cx("theme")}>
      <div className={cx("list", "flex", "justify-center", "items-center", "gap-2")}>
        <button onClick={() => setTheme("light")} className={cx("light-theme", { active: theme === "light" })}></button>
        <button onClick={() => setTheme("dark")} className={cx("dark-theme", { active: theme === "dark" })}></button>
      </div>
    </div>
  );
}

export default ThemeMenu;
