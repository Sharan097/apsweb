import React from "react";

export const motion = {
  div: ({ children, className, initial, animate, transition, ...props }: any) => (
    <div className={className} {...props}>{children}</div>
  ),
  tr: ({ children, className, initial, animate, transition, ...props }: any) => (
    <tr className={className} {...props}>{children}</tr>
  ),
};