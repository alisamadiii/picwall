import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Loader({ className }: Props) {
  return <Loader2 className={cn("h-4 w-4 animate-spin", className)} />;
}
