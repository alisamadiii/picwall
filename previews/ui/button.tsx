import React from "react";

import { UITitle } from "@/components/MDX";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function ButtonUI() {
  return (
    <div className="space-y-4">
      <UITitle title="default" className="flex items-center gap-4">
        <Button size="xs">Click me</Button>
        <Button size="sm">Click me</Button>
        <Button>Click me</Button>
        <Button size="lg">Click me</Button>
        <Button size="icon">
          <User />
        </Button>
      </UITitle>
      <UITitle title="primary" className="flex items-center gap-4">
        <Button size="xs" variant={"primary"}>
          Click me
        </Button>
        <Button size="sm" variant={"primary"}>
          Click me
        </Button>
        <Button variant={"primary"}>Click me</Button>
        <Button size="lg" variant={"primary"}>
          Click me
        </Button>
        <Button size="icon" variant={"primary"}>
          <User />
        </Button>
      </UITitle>
      <UITitle title="destructive" className="flex items-center gap-4">
        <Button size="xs" variant={"destructive"}>
          Click me
        </Button>
        <Button size="sm" variant={"destructive"}>
          Click me
        </Button>
        <Button variant={"destructive"}>Click me</Button>
        <Button size="lg" variant={"destructive"}>
          Click me
        </Button>
        <Button size="icon" variant={"destructive"}>
          <User />
        </Button>
      </UITitle>
      <UITitle title="outline" className="flex items-center gap-4">
        <Button size="xs" variant={"outline"}>
          Click me
        </Button>
        <Button size="sm" variant={"outline"}>
          Click me
        </Button>
        <Button variant={"outline"}>Click me</Button>
        <Button size="lg" variant={"outline"}>
          Click me
        </Button>
        <Button size="icon" variant={"outline"}>
          <User />
        </Button>
      </UITitle>
      <UITitle title="ghost" className="flex items-center gap-4">
        <Button size="xs" variant={"ghost"}>
          Click me
        </Button>
        <Button size="sm" variant={"ghost"}>
          Click me
        </Button>
        <Button variant={"ghost"}>Click me</Button>
        <Button size="lg" variant={"ghost"}>
          Click me
        </Button>
        <Button size="icon" variant={"ghost"}>
          <User />
        </Button>
      </UITitle>
      <UITitle title="link" className="flex items-center gap-4">
        <Button size="xs" variant={"link"}>
          Click me
        </Button>
        <Button size="sm" variant={"link"}>
          Click me
        </Button>
        <Button variant={"link"}>Click me</Button>
        <Button size="lg" variant={"link"}>
          Click me
        </Button>
        <Button size="icon" variant={"link"}>
          <User />
        </Button>
      </UITitle>
    </div>
  );
}
