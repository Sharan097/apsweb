"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light"
    setTheme(saved)
    document.documentElement.classList.toggle("dark", saved === "dark")
  }, [])

  const toggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg border border-border hover:bg-muted transition"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}