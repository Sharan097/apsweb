"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SummaryBar } from "@/components/dashboard/SummaryBar";
import { SeverityCards } from "@/components/dashboard/SeverityCards";
import { ScansTable } from "@/components/dashboard/ScansTable";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-[#0a0d14]">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        <DashboardHeader />
        <SummaryBar />
        <SeverityCards />
        <ScansTable />
      </main>
    </div>
  );
}