import React from "react";

import { allUIs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/MDX/mdx-contents";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function UIPage({ params }: Props) {
  const { slug } = await params;

  const findingUIs = allUIs.find(
    (ui) => `${slug.join("/")}` === ui.slugAsParams
  );

  if (!findingUIs) {
    notFound();
  }

  return (
    <div className="w-full">
      <div>
        <h1 className="text-4xl">{findingUIs.title}</h1>
        {findingUIs.description && <p>{findingUIs.description}</p>}
      </div>
      <Separator className="mt-4 mb-8" />
      <Mdx code={findingUIs.body.code} />
    </div>
  );
}
