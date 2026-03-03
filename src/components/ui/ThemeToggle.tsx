
"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(saved);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] hover:bg-gray-100 dark:hover:bg-[#242424] transition-colors"
    >
      {theme === "dark" ? (
        <Sun size={16} className="text-yellow-500" />
      ) : (
        <Moon size={16} className="text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
}