// import React from "react";
// import { cn } from "../../lib/utils";

// export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "social" }>(
//   ({ className, variant = "default", ...props }, ref) => {
//     const variants = {
//       default: "bg-[#00b2a9] text-white hover:bg-[#009b93] shadow-sm",
//       outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900",
//       social: "flex items-center justify-center rounded-full h-11 transition-transform active:scale-95",
//     };
//     return (
//       <button
//         ref={ref}
//         className={cn(
//           "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2a9] disabled:pointer-events-none disabled:opacity-50 h-11 px-4 py-2 w-full",
//           variants[variant],
//           className
//         )}
//         {...props}
//       />
//     );
//   }
// );
// Button.displayName = "Button";











import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "social" | "destructive";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-[#00b2a9] text-white hover:bg-[#009b93] shadow-sm dark:bg-teal-600 dark:hover:bg-teal-700",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900 dark:border-zinc-700 dark:text-slate-100 dark:hover:bg-zinc-800",
      social: "flex items-center justify-center rounded-full transition-transform active:scale-95 bg-white border border-gray-200 hover:bg-gray-50 dark:bg-zinc-900 dark:border-zinc-800",
      destructive: "bg-rose-100 text-rose-600 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/50",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2a9] disabled:pointer-events-none disabled:opacity-50 h-11 px-4 py-2",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";