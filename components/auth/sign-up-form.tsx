"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
export default function SignUpForm() {
  return (
    <div className="bg-white  min-h-[70%] py-5 px-6 !col-end-7 self-center rounded-sm shadow-md col-span-5 lg:col-span-4 max-w-[446px]">
      <h1 className="text-center font-bold text-[30px] text-green-500 ">
        Sign Up
      </h1>

      <div >
        <form className="space-y-[22px] md:mb-8 lg:mb-[95px]">
          <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="mb-[6px]">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="max-h-[36px]"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="mb-[6px]">
            Password
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="max-h-[36px]"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="mb-[6px]">
            Confirm Password
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="max-h-[36px]"
          />
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        </form>
      </div>

      <Button className="w-full bg-green-500 hover:bg-green-400">Button</Button>
    </div>
  );
}
