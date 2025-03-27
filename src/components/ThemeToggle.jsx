import { useState, useEffect } from "react";
import ButtonToggleTheme from "./ButtonToggleTheme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
      {/* Botão Theme */}
      <label className="right-3 swap swap-rotate">
      <input type="checkbox" checked={isDark} onChange={toggleTheme} />
      <ButtonToggleTheme />
      </label>
    </>
  );
}
