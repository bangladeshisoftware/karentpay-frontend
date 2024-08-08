"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CardWithForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.phone || !formData.message) {
      return toast.error("Please fill in all required fields.");
    }



    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/contact`,
        formData
      );
      toast.success("Form submitted successfully!");

      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
    } catch (error) {
      toast.error("Failed to submit form.");

    }
  };

  return (
    <Card className="max-w-[800px] w-full mx-auto transition duration-300 hover:shadow-lg hover:border-blue-500">
      <CardHeader>
        <CardTitle>User Information</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">
                Email <span className="text-red-500 ">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">
                Phone <span className="text-red-500 ">*</span>
              </Label>
              <Input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Active Phone Number"
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Specific Address"
              />
            </div>

            {/* message */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">
                Message <span className="text-red-500 ">*</span>
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
            </div>
          </div>
          <CardFooter className="flex items-center gap-2 mt-5 w-full pb-0 px-0">
            <Button
              className="bg-gray-500 w-1/2 justify-center text-white"
              variant="outline "
              type="button"
              onClick={() =>
                setFormData({ name: "", email: "", phone: "", address: "" })
              }
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-2 w-1/2 justify-center"
            >
              Send
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
