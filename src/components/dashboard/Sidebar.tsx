
"use client";

import {
  LayoutDashboard,
  FolderKanban,
  ScanLine,
  Calendar,
  Bell,
  Settings,
  HelpCircle,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Scans", href: "/scans", icon: ScanLine },
  { name: "Schedule", href: "/schedule", icon: Calendar },
];

const bottomItems = [
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Support", href: "/support", icon: HelpCircle },
];

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const renderLinks = (items: typeof navItems) => (
    <ul className="space-y-1">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.name}>
            <button
              onClick={() => router.push(item.href)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-left ${
                isActive
                  ? "bg-[#0CC8A8]/10 text-[#0CC8A8] dark:bg-[#0CC8A8]/20"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-[#1A1A1A]"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  isActive ? "text-[#0CC8A8]" : ""
                }`}
              />
              {item.name}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside className="w-64 h-screen sticky top-0 shrink-0 border-r border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0F0F0F] hidden md:flex flex-col">

  <div className="flex-1 flex flex-col overflow-y-auto px-6 py-6">

    <div className="flex items-center justify-between mb-10">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full bg-[#0CC8A8] flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full" />
    </div>
    <span className="text-2xl font-semibold tracking-tight text-[#0CC8A8]">
      aps
    </span>
  </div>

  <ThemeToggle />
</div>

    <nav className="flex-1 space-y-8">
      {renderLinks(navItems)}

      <div className="pt-6 border-t border-gray-200 dark:border-[#262626] space-y-2">
        {renderLinks(bottomItems)}

        <button
          onClick={() => router.push("/")}
          className="w-full mt-2 flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-red-600 hover:bg-red-50 dark:text-gray-400 dark:hover:text-red-400 dark:hover:bg-red-900/20 transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </nav>
  </div>

  <div className="shrink-0 border-t border-gray-200 dark:border-[#262626] px-6 py-4 bg-white dark:bg-[#0F0F0F]">
    <div className="flex items-center justify-between rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1A1A1A] transition-colors p-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-full bg-yellow-400 border border-gray-200 dark:border-[#2A2A2A] flex items-center justify-center text-slate-900 font-bold shrink-0">
          A
        </div>
        <div className="flex flex-col truncate">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">
            admin@edu.com
          </span>
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
            Security Lead
          </span>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
    </div>
  </div>

</aside>
  );
}