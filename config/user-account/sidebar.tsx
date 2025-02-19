import React from "react";
import { CircleUserRound, CreditCard, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  activeTab: ProfileTab;
  setActiveTab: (tab: ProfileTab) => void;
  onClose?: () => void;
};

const tabsName: ProfileTab[] = ["profile", "security", "billing"];

const tabs = tabsName.map((tab) => {
  let icon;
  if (tab === "profile") {
    icon = CircleUserRound;
  } else if (tab === "security") {
    icon = ShieldCheck;
  } else {
    icon = CreditCard;
  }
  return {
    label: tab,
    icon,
  };
});

export default function Sidebar({ activeTab, setActiveTab, onClose }: Props) {
  return (
    <>
      {tabs.map((tab) => (
        <Button
          key={tab.label}
          variant={activeTab === tab.label ? "default" : "ghost"}
          size="sm"
          className={cn("w-full justify-start text-[13px] font-medium")}
          onClick={() => {
            setActiveTab(tab.label);
            onClose?.();
          }}
        >
          <tab.icon />
          <span>{tab.label}</span>
        </Button>
      ))}
    </>
  );
}
