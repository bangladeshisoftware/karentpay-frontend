import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function StepIndicator({ step }) {
  return (
    <div className="flex items-center max-w-[350px] lg:max-w-[750px] md:max-w-[550px] justify-around py-4">
      <div className="flex flex-col items-center gap-2">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            step >= 1 ? "bg-[#7073F3] text-white" : "bg-gray-300"
          }`}
        >
          1
        </div>
        <div className="text-center">
          Business <br></br>Structure
        </div>
      </div>
      <span className="w-48 h-[2px] bg-gray-300 mb-12" />
      <div className="flex flex-col items-center gap-2">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            step >= 2 ? "bg-[#7073F3] text-white" : "bg-gray-300"
          }`}
        >
          2
        </div>
        <div className="text-center">
          Business <br></br> Representative
        </div>
      </div>
      <span className="w-48 h-[2px] bg-gray-300 mb-12" />
      <div className="flex flex-col items-center gap-2">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            step >= 3 ? "bg-[#7073F3] text-white" : "bg-gray-300"
          }`}
        >
          3
        </div>
        <div className="text-center">
          Business <br></br> Details
        </div>
      </div>
    </div>
  );
}

export function DrawerDialogDemo({ open, setOpen }) {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[400px] lg:max-w-[800px] md:max-w-[600px] mx-auto">
        <DialogHeader>
          <DialogTitle className="bg-gradient-to-r from-blue-600  to-purple-400 inline-block text-transparent bg-clip-text text-3xl text-center py-4">
            Become A Merchant
          </DialogTitle>
        </DialogHeader>
        <StepIndicator step={step} />
        {step === 1 && (
          <ProfileForm
            className="border border-gray-300 rounded-lg p-4"
            handleNext={handleNext}
          />
        )}
        {step === 2 && (
          <AdditionalInfoForm
            className="border border-gray-300 rounded-lg p-4"
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
        {step === 3 && (
          <BusinessInfoForm
            className="border border-gray-300 rounded-lg p-4"
            handlePrevious={handlePrevious}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

function ProfileForm({ className, handleNext }) {
  return (
    <form
      className={cn("grid items-start gap-4", className)}
      onSubmit={(e) => {
        e.preventDefault();
        handleNext();
      }}
    >
      <div className="grid gap-2">
        <Label htmlFor="company" className="text-base">
          Legal Identity of Company <span className="text-red-500 ">*</span>
        </Label>
        <div className="border rounded-md py-4">
          <select
            id="company"
            name="company"
            className="h-full rounded-md pl-2 outline-none bg-transparent text-gray-500 sm:text-sm w-[95%]"
            required
          >
            <option value="">- - Select Identity - -</option>
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
        <Label htmlFor="industry" className="text-base">
          Industry/Business Type <span className="text-red-500 ">*</span>
        </Label>
        <div className="border rounded-md py-4">
          <select
            id="industry"
            name="industry"
            className="h-full rounded-md pl-2 outline-none bg-transparent text-gray-500 text-base sm:text-sm w-[95%] "
            required
          >
            <option value="">- - Select Business Type - -</option>
            <option>Education</option>
            <option>IT</option>
            <option>eEommerce</option>
            <option>fEommerce</option>
            <option>Clothing/Apparel</option>
            <option>Charity/Donation</option>
            <option>Even Ticket/Registration</option>
            <option>Hotel & Resorts</option>
            <option>Health Service</option>
            <option>Others</option>
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description" className="text-base">
          Product description
        </Label>
        <Input
          type="text"
          id="description"
          className="py-8 rounded-md border !outline-none focus:!outline-none focus-within:!outline-none shadow-none "
        />
      </div>
      <Button type="submit" className="bg-[#7073F3] mt-4">
        Next
      </Button>
    </form>
  );
}

function AdditionalInfoForm({ className, handleNext, handlePrevious }) {
  return (
    <form
      className={cn("grid items-start gap-4", className)}
      onSubmit={(e) => {
        e.preventDefault();
        handleNext();
      }}
    >
      <div className="grid gap-2">
        <Label htmlFor="legal-name" className="text-base">
          Legal Name of Person <span className="text-red-500 ">*</span>
        </Label>
        <Input
          type="text"
          id="legal-name"
          className="!outline-none py-2 rounded-md border   focus:!outline-none focus-within:!outline-none  focus:!border-transparent"
          placeholder="Full Name"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-base">
          Email <span className="text-red-500 ">*</span>
        </Label>
        <Input
          type="email"
          id="email"
          className="py-2 rounded-md border"
          placeholder="Email Address"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone" className="text-base">
          Phone <span className="text-red-500 ">*</span>
        </Label>
        <Input
          type="text"
          id="phone"
          className="py-2 rounded-md border"
          // className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
          // focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Active Phone Number"
          required
        />
      </div>
      <div className="flex  gap-x-4 justify-between mt-4">
        <Button
          type="previous"
          className="bg-gray-500 w-1/2 justify-center"
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          type="submit"
          className="bg-[#7073F3] w-1/2 justify-center"
          // onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </form>
  );
}

function BusinessInfoForm({ className, handlePrevious }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="business-name" className="text-base">
          Business Name <span className="text-red-500 ">*</span>
        </Label>
        <Input
          type="text"
          id="business-name"
          className="py-2 rounded-md border"
          placeholder="As per Trade License"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="address" className="text-base">
          Address <span className="text-red-500 ">*</span>
        </Label>
        <Input
          type="text"
          id="address"
          className="py-2 rounded-md border"
          placeholder="Specific Address"
          required
        />
      </div>
      <div className="flex  gap-x-4 justify-between mt-4">
        <Button
          type="button"
          className="bg-gray-500 w-1/2 justify-center"
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button type="submit" className="bg-[#7073F3] w-1/2 justify-center">
          Send
        </Button>
      </div>
    </form>
  );
}
