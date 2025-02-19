import { Switch } from "@/components/ui/switch";
import React from "react";

type Props = {};

export default function SwitchUI({}: Props) {
  return (
    <div className="flex gap-4">
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch disabled defaultChecked />
    </div>
  );
}
