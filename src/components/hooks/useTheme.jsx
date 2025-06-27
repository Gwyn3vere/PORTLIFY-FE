import { useState, useEffect } from "react";

export function useTheme() {
  const getThemeFromHtml = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) return "dark";
    if (root.classList.contains("light")) return "light";
    if (root.classList.contains("blue")) return "blue";
    return "light"; // default
  };

  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem("theme") || getThemeFromHtml() || "light";
  });

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "blue");
    root.classList.add(newTheme);
  };

  const setTheme = (newTheme) => {
    applyTheme(newTheme);
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;

    const observer = new MutationObserver(() => {
      const currentTheme = getThemeFromHtml();
      setThemeState(currentTheme);
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "theme") {
        setThemeState(e.newValue || "light");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return { theme, setTheme };
}
