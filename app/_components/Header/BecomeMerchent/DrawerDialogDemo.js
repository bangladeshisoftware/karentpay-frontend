import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DrawerDialogDemo({ open, setOpen }) {
  // const isDesktop = useMediaQuery("(min-width: 768px)");

  // if (isDesktop) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className=" max-w-[800px] w-full mx-auto ">
        <DialogHeader>
          <DialogTitle className="text-[#7073F3] text-3xl text-center py-4">
            Become A Merchant
          </DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <ProfileForm className=" border border-gray-300 rounded-lg  p-4" />
      </DialogContent>
    </Dialog>
  );
  // }

  // return (
  //   <Drawer open={open} onOpenChange={setOpen}>
  //     <DrawerTrigger asChild>
  //       <Button variant="outline">Edit Profile</Button>
  //     </DrawerTrigger>
  //     <DrawerContent>
  //       <DrawerHeader className="text-left">
  //         <DrawerTitle>Edit profile</DrawerTitle>
  //         <DrawerDescription>
  //           Make changes to your profile here. Click save when you're done.
  //         </DrawerDescription>
  //       </DrawerHeader>
  //       <ProfileForm className="px-4" />
  //       <DrawerFooter className="pt-2">
  //         <DrawerClose asChild>
  //           <Button variant="outline">Cancel</Button>
  //         </DrawerClose>
  //       </DrawerFooter>
  //     </DrawerContent>
  //   </Drawer>
  // );
}

function ProfileForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="text " className="text-base">
          Legal Identity of Company
        </Label>

        {/* <Input type="email" id="email" defaultValue="" /> */}
        <div className="border rounded-md py-4 ">
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md pl-2 outline-none  bg-transparent  text-gray-500  sm:text-sm w-[95%]  "
          >
            <option>Educational Institute</option>
            <option>Public Limited</option>
            <option>Partnership</option>
            <option>Proprietorship</option>
            <option>Non-profit</option>
            <option>Private Limited</option>
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username" className="text-base ">
          Industry/Business Type
        </Label>
        {/* <Input id="username" defaultValue="" /> */}
        <div className="border rounded-md py-4 ">
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md pl-2 outline-none  bg-transparent  text-gray-500  sm:text-sm w-[95%]"
          >
            <option>Education</option>
            <option>IT</option>
            <option>eEommerce</option>
            <option>fEommerce</option>
            <option>Clothing/Apparel</option>
            <option>Clothing/Apparel</option>
            <option>Charity/Donation</option>
            <option>Even Ticket/Registration</option>
            <option>Hotel & Resorts</option>
            <option>Health Service </option>
            <option>Others </option>
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username" className="text-base ">
          Product description
        </Label>

        <Input type="text" className="py-8 rounded-md border  " />
      </div>
      <Button type="submit" className="bg-[#7073F3]">
        Save changes
      </Button>
    </form>
  );
}
