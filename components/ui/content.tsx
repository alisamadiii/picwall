"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

const Content = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[calc(74rem+2rem)] px-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Content;
