import React from "react";
import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

export default function ThemeSwitcher() {
  const { isDark, toggleTheme } = useTheme();

  const tf = useTranslate();

  const t = tf("testpage");

  return (
    <button
      className={`m-1 p-1 text-sm border rounded-md ${
        isDark && " text-white"
      } ${!isDark && "text-gray-700 "}`}
      onClick={toggleTheme}
    >
      {t.toggle_theme}
    </button>
  );
}
