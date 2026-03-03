import React from "react";
import { Search, Filter, Columns, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion } from "@/lib/mocks";

const scanData = [
  { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulns: { crit: 5, high: 12, med: 23, low: 18 }, time: "4d ago" },
  { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulns: { crit: 5, high: 12, med: 23, low: 18 }, time: "4d ago" },
  { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulns: { crit: 5, high: 12, med: 23, low: 18 }, time: "4d ago" },
  { name: "Web App Servers", type: "Greybox", status: "Scheduled", progress: 100, vulns: { crit: 5, high: 12 }, time: "4d ago" },
  { name: "IoT Devices", type: "Blackbox", status: "Failed", progress: 10, vulns: { crit: 2, high: 4, med: 8, low: 1 }, time: "3d ago" },
  { name: "Temp Data", type: "Blackbox", status: "Failed", progress: 10, vulns: { crit: 2, high: 4, med: 8, low: 1 }, time: "3d ago" },
];


export function ScansTable() {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "Scheduled":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Failed":
        return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300";
    }
  };

  return (
    <div className="space-y-4">

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search scans by name or type..."
            className="pl-10 bg-slate-50 dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 w-full"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Button variant="outline" className="text-slate-600 dark:text-slate-300">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button variant="outline" className="text-slate-600 dark:text-slate-300">
            <Columns className="w-4 h-4 mr-2" /> Column
          </Button>
          <Button className="bg-[#0CC8A8] hover:bg-[#0BB89A] text-white border-none">
            <Plus className="w-4 h-4 mr-2" /> New scan
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-zinc-800">
            <tr>
              <th className="font-medium pb-3 pt-2 pl-2">Scan Name</th>
              <th className="font-medium pb-3 pt-2">Type</th>
              <th className="font-medium pb-3 pt-2">Status</th>
              <th className="font-medium pb-3 pt-2">Progress</th>
              <th className="font-medium pb-3 pt-2">Vulnerability</th>
              <th className="font-medium pb-3 pt-2 text-right pr-2">Last Scan</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
            {scanData.map((row, idx) => (
              <motion.tr
                key={idx}
                className="hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <td className="py-4 pl-2 font-semibold text-slate-900 dark:text-slate-100">
                  {row.name}
                </td>
                <td className="py-4 text-slate-600 dark:text-slate-400">
                  {row.type}
                </td>

                <td className="py-4">
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${getStatusStyle(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="py-4">
                  <div className="flex items-center gap-3 w-40">
                    <div className="h-2 w-full bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          row.status === "Failed"
                            ? "bg-rose-500"
                            : "bg-[#0CC8A8]"
                        }`}
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-900 dark:text-slate-300">
                      {row.progress}%
                    </span>
                  </div>
                </td>

                <td className="py-4">
                  <div className="flex gap-1.5">
                    {row.vulns.crit && (
                      <span className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold bg-rose-500 text-white">
                        {row.vulns.crit}
                      </span>
                    )}
                    {row.vulns.high && (
                      <span className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold bg-orange-500 text-white">
                        {row.vulns.high}
                      </span>
                    )}
                    {row.vulns.med && (
                      <span className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold bg-yellow-400 text-slate-900">
                        {row.vulns.med}
                      </span>
                    )}
                    {row.vulns.low && (
                      <span className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold bg-emerald-500 text-white">
                        {row.vulns.low}
                      </span>
                    )}
                  </div>
                </td>

                <td className="py-4 pr-2 text-right text-slate-500 dark:text-slate-400">
                  {row.time}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer (Added from image) */}
      <div className="mt-2 flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 dark:bg-[#11131f] border border-slate-200 dark:border-zinc-800">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Showing 6 of 100 Scans
        </span>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-300 dark:border-zinc-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-zinc-800 transition">
            ‹
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-300 dark:border-zinc-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-zinc-800 transition">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}