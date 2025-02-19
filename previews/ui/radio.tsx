import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioUI() {
  return (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one" className="mb-0">
            Option One
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two" className="mb-0">
            Option Two
          </Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="option-two">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-one" id="option-one" disabled />
          <Label htmlFor="option-one" className="mb-0">
            Option One
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-two" id="option-two" disabled />
          <Label htmlFor="option-two" className="mb-0">
            Option Two
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
