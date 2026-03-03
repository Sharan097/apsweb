"use client";
import React from "react";
import { Search, Network, FlaskConical, ShieldCheck, FileText, RefreshCw, Minus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScansView() {
  const steps = [
    { label: "Spidering", icon: Search, active: true },
    { label: "Mapping", icon: Network, active: false },
    { label: "Testing", icon: FlaskConical, active: false },
    { label: "Validating", icon: ShieldCheck, active: false },
    { label: "Reporting", icon: FileText, active: false },
  ];

  const stats = [
    { label: "Scan Type", value: "Grey Box" },
    { label: "Targets", value: "google.com" },
    { label: "Started At", value: "Nov 22, 09:00AM" },
    { label: "Credentials", value: "2 Active" },
    { label: "Files", value: "Control.pdf" },
    { label: "Checklists", value: <span className="text-[#00b2a9]">40/350</span> },
  ];

  return (
    <div className="flex-1 flex flex-col p-6 lg:p-8 gap-6 min-h-full bg-gray-50/50 dark:bg-[#0a0d14]">
      
      <div className="bg-white dark:bg-[#11131f] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center gap-8 shrink-0">
        
        <div className="flex items-center justify-center shrink-0 pr-8 md:border-r border-gray-200 dark:border-gray-800 w-full md:w-auto">
          <div className="flex items-center justify-center w-[110px] h-[110px] rounded-full bg-[#111827] text-white flex-col shadow-inner">
            <span className="text-3xl font-bold tracking-tight text-[#00b2a9] z-10">0%</span>
            <span className="text-[10px] font-medium tracking-wider text-gray-400 mt-1 z-10">In Progress</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col w-full">
          
            <div className="relative w-full mb-8">

            {/* Thin Connector Line */}
            <div className="absolute top-5 left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-800" />

            <div className="relative flex items-center justify-between">
                {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3 bg-white dark:bg-[#11131f] px-3">

                    <div
                    className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10",
                        step.active
                        ? "bg-[#00b2a9] text-white shadow-md shadow-[#00b2a9]/30"
                        : "bg-white dark:bg-[#0a0d14] border border-gray-200 dark:border-gray-700 text-gray-400"
                    )}
                    >
                    <step.icon
                        className="w-4 h-4"
                        strokeWidth={step.active ? 2.5 : 2}
                    />
                    </div>

                    <span
                    className={cn(
                        "text-xs font-semibold",
                        step.active
                        ? "text-gray-600 dark:text-gray-300"
                        : "text-gray-400 dark:text-gray-500"
                    )}
                    >
                    {step.label}
                    </span>
                </div>
                ))}
            </div>
            </div>

          <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800 mb-4"></div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-between w-full gap-4 px-2">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold text-gray-400">{stat.label}</span>
                <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{stat.value}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="flex-1 bg-white dark:bg-[#11131f] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm flex flex-col min-h-[500px] overflow-hidden mb-6 relative">
        {/* Console Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#0a0d14]/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b2a9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00b2a9]"></span>
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Live Scan Console</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <RefreshCw className="w-3 h-3 animate-spin duration-3000" />
              Running...
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Minus className="w-4 h-4 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors" />
            <X className="w-4 h-4 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors" />
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="flex-1 flex flex-col min-w-0 border-r border-gray-200 dark:border-gray-800">
            <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-2 shrink-0">
              <button className="px-4 py-2.5 text-xs font-bold text-[#00b2a9] border-b-2 border-[#00b2a9]">
                Activity Log
              </button>
              <button className="px-4 py-2.5 text-xs font-bold text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                Verification Loops
              </button>
            </div>
            
            <div className="flex-1 p-5 overflow-y-auto font-mono text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 space-y-4">
              <p><span className="text-gray-400">[09:00:00]</span> I'll begin a systematic penetration test on <span className="text-[#00b2a9] font-medium">helpdesk.democorp.com</span>. Let me start with reconnaissance and enumeration.</p>
              <p><span className="text-gray-400">[09:01:00]</span> Good! target is online. Now let me perform port scanning to identify running services.</p>
              <div>
                <span className="text-gray-400">[09:02:00]</span> Excellent reconnaissance results:
                <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700 my-2 text-gray-500 dark:text-gray-400 py-0.5 bg-gray-50/50 dark:bg-gray-800/30 rounded-r-md">
                  <span className="text-[#00b2a9]">-</span> helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)
                </div>
                Let me probe the web server on target first to understand its structure.
              </div>
              <p><span className="text-gray-400">[09:03:00]</span> Great! I found a login page for a Help Desk Platform. I can see a useful comment: <span className="text-[#3b82f6]">"TODO: Delete the testing account (test:test)"</span>. Let me test this credential. The login redirects to <span className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded font-bold">/password/test</span>. Let me follow that path and explore it.</p>
              <p><span className="text-gray-400">[09:04:00]</span> The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to <span className="text-[#3b82f6]">'#'</span> which means the current page. Let me try a different approach.</p>
              <p><span className="text-gray-400">[09:05:00]</span> It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the <span className="text-[#00b2a9]">test:test</span> password directly on other endpoints.</p>
              <p><span className="text-gray-400">[09:06:00]</span> Great! I can access the dashboard using the <span className="text-[#3b82f6]">'X-UserId: 10032'</span> header. The dashboard shows "Welcome, John Doe". This suggests an <span className="text-[#e11d48] font-bold">**IDOR vulnerability**</span> - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...</p>
              <div className="flex items-center gap-2 mt-4 text-gray-400">
                <span className="w-1.5 h-4 bg-[#00b2a9] animate-pulse"></span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[380px] flex flex-col shrink-0 bg-gray-50/30 dark:bg-[#0a0d14]/30">
            <div className="px-5 py-3.5 border-b border-gray-200 dark:border-gray-800 shrink-0">
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Finding Log</span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="bg-white dark:bg-[#11131f] border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-sm hover:border-[#00b2a9]/50 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-[#e11d48]/20 dark:text-[#e11d48]">Critical</span>
                  <span className="text-[10px] text-gray-400 font-mono">10:45:23</span>
                </div>
                <h4 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1.5 group-hover:text-[#00b2a9] transition-colors">SQL Injection in Authentication Endpoint</h4>
                <div className="text-[11px] font-mono text-[#00b2a9] mb-2 font-semibold">/api/users/profile</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.</p>
              </div>

              <div className="bg-white dark:bg-[#11131f] border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-sm hover:border-[#00b2a9]/50 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-[#ea580c]/20 dark:text-[#ea580c]">High</span>
                  <span className="text-[10px] text-gray-400 font-mono">10:45:23</span>
                </div>
                <h4 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1.5 group-hover:text-[#00b2a9] transition-colors">Unauthorized Access to User Metadata</h4>
                <div className="text-[11px] font-mono text-[#00b2a9] mb-2 font-semibold">/api/auth/login</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.</p>
              </div>

              <div className="bg-white dark:bg-[#11131f] border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-sm hover:border-[#00b2a9]/50 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-700 dark:bg-[#ca8a04]/20 dark:text-[#ca8a04]">Medium</span>
                  <span className="text-[10px] text-gray-400 font-mono">10:45:23</span>
                </div>
                <h4 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1.5 group-hover:text-[#00b2a9] transition-colors">Broken Authentication Rate Limiting</h4>
                <div className="text-[11px] font-mono text-[#00b2a9] mb-2 font-semibold">/api/search</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">No effective rate limiting detected on login attempts. Automated brute-force attempts possible.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-5 py-3 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0d14] text-[11px] font-bold text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              Sub-Agents: <span className="text-gray-900 dark:text-gray-100">0</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00b2a9]"></span>
              Parallel Executions: <span className="text-gray-900 dark:text-gray-100">2</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
              Operations: <span className="text-gray-900 dark:text-gray-100">1</span>
            </div>
          </div>
          
          <div className="flex items-center gap-5 mt-2 sm:mt-0">
            <div className="flex items-center gap-1">Critical: <span className="text-[#e11d48]">0</span></div>
            <div className="flex items-center gap-1">High: <span className="text-[#ea580c]">0</span></div>
            <div className="flex items-center gap-1">Medium: <span className="text-[#ca8a04]">0</span></div>
            <div className="flex items-center gap-1">Low: <span className="text-[#10b981]">0</span></div>
          </div>
        </div>

      </div>
    </div>
  );
}