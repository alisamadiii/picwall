import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function InputUI() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label htmlFor="input">Input</Label>
        <Input id="input" placeholder="You can type here..." />
      </div>
      <div>
        <Label htmlFor="textarea">Textarea</Label>
        <Textarea id="textarea" placeholder="You can type here..." />
      </div>
    </div>
  );
}
