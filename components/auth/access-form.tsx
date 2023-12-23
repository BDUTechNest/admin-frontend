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
import { Button } from "../ui/button";
import { AdminCreds } from "./admin-creds";
export default function AccessForm() {
  return (
    <div className="bg-white  min-h-[70%]  py-5 px-6 col-start-7 self-center rounded-sm shadow-md col-span-5  lg:col-span-4 max-w-[446px]">
      <h1 className="text-center font-bold text-[30px] text-green-500 ">
        Give access
      </h1>

      <div>
        <form className="space-y-[22px] mb-12 lg:mb-[95px]">
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
              Phone
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

          <div>
            <AdminCreds></AdminCreds>
          </div>

          
        </form>
      </div>

      <Button className="w-full bg-green-500 hover:bg-green-400">Authenticate</Button>
    </div>
  );
}
