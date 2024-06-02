import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Divide } from "lucide-react";
import { useState } from "react";

import { toast } from "react-toastify";

export function ResetPasswordToast({ open, setOpen }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      console.log(email);
      toast.success("Password reset email sent!", { autoClose: 1000 });
      setEmail("");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[500px] w-full">
        <DialogHeader>
          <DialogTitle className="text-[#7073F3] text-xl text-left pb-4 border-b">
            Forget Password?
          </DialogTitle>
          <DialogDescription className="py-2 text-sm text-[#2C384AF2]">
            Reset password with email
          </DialogDescription>
        </DialogHeader>
        <ResetPasswordForm
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}

function ResetPasswordForm({ email, setEmail, handleSubmit, className }) {
  return (
    <div>
      <form className={cn("", className)} onSubmit={handleSubmit}>
        <div className="border border-gray-300 rounded-lg p-2">
          <input
            className="!outline-none w-full h-full focus:!outline-none focus-within:!outline-none shadow-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="email"
            required
          />
        </div>
        <button
          className="bg-[#7073F3] p-2 rounded-lg mt-4 text-white outline-none border border-[#7073F3]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
