import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const AdminCreds = () => {
  return (
    <div className="bg-green-500 p-[25px] rounded-[6px] space-y-[8px]">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email" className="mb-[6px] text-white">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="max-h-[36px] bg-white"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email" className="mb-[6px] text-white">
          Password
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="max-h-[36px] bg-white"
        />
      </div>
    </div>
  );
};
