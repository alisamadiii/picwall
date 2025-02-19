import React from "react";
import { allUIs } from "contentlayer/generated";

import { Label } from "@/components/ui/label";
import Back from "@/components/back";
import { Button } from "@/components/ui/button";
import Content from "@/components/ui/content";

export async function generateStaticParams() {
  return allUIs.map((ui) => ({
    ui: ui.slug.split("/").slice(1),
  }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{
    slug: string[];
  }>;
};

export default async function UILayout({ children, params }: Props) {
  const { slug } = await params;

  return (
    <Content className="flex gap-12 py-8 md:py-24">
      <div className="hidden min-w-55 flex-col items-start md:flex">
        <Label className="px-2 text-xs">UI Components</Label>
        {allUIs.map((ui) => (
          <Button
            key={ui.slug}
            variant={slug.includes(ui.slugAsParams) ? "primary" : "ghost"}
            size="sm"
            className="w-full justify-start"
            href={`${ui.slug}`}
          >
            {ui.title}
          </Button>
        ))}
      </div>
      <div className="w-full min-w-0">
        <Back href="/" />
        {children}
      </div>
    </Content>
  );
}
