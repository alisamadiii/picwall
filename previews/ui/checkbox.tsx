import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxUI() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox defaultChecked disabled />
    </div>
  );
}
