"use client";

import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies } from "@/app/_lib/cookiesSetting";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-toastify";

const EditProfile = ({ user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageLink, setProfileImageLink] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [countries, setCountries] = useState([]);
  const [showCountryList, setShowCountryList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const [countryId, setCountryId] = useState(0);
  const [phoneCode, setPhoneCode] = useState("+00");

  const imageRef = useRef(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await ApiRequest({
          url: "/country",
          method: "GET",
        });

        if (response.status === 200) {
          setCountries(response.data);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
      setPhone(user?.phone);
      setProfileImageLink(user?.avatar);
      const userCountry = countries.find(
        (country) => country.id === user?.country
      );
      if (userCountry) {
        setSelectedCountry(userCountry?.name);
        setPhoneCode(userCountry?.phone_code);
      }
    }
  }, [user, countries]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country?.name);
    setCountryId(country?.id);
    setPhoneCode(country?.phone_code);
    setShowCountryList(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("_method", "PUT");
    formData.append("name", name);
    formData.append("country", countryId);
    formData.append("phone", phone);
    if (profileImage) {
      formData.append("avatar", profileImage);
    }
    if (oldPassword && newPassword) {
      formData.append("password", oldPassword);
      formData.append("password_confirmation", newPassword);
    }

    const token = await GetCookies({ name: "auth_token" });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/user`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile");
    }
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearImage = () => {
    setProfileImage(null);
    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };

  return (
    <div className="lg:mx-24 pb-10">
      <form>
        <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <input
            className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
            type="text"
            name="name"
            placeholder="Fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <div
            className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none cursor-pointer"
            onClick={() => setShowCountryList(!showCountryList)}
          >
            {selectedCountry ? selectedCountry : "Select your country"}
          </div>
          {showCountryList && (
            <div className="absolute top-full left-0 right-0 bg-white border rounded-md z-10 max-h-60 overflow-y-auto">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none border-b"
                type="text"
                name="search"
                placeholder="Search country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {filteredCountries.map((country, index) => (
                <div
                  key={index}
                  className="flex items-center px-2 py-2 lg:py-3 lg:px-3 cursor-pointer hover:bg-gray-200 w-full justify-between"
                  onClick={() => handleCountryClick(country)}
                >
                  <span className="flex items-center">{country.name}</span>
                  <span className="text-right">{country.phone_code}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <input
            className="w-full px-2 py-2 lg:py-3 bg-transparent rounded-md outline-none"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            disabled
          />
        </div>
        <div className="flex items-center border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <span className="ml-2 text-slate-600">{phoneCode}</span>
          <input
            className="w-full pr-2 pl-1 py-2 lg:py-3 bg-transparent rounded-md outline-none"
            type="number"
            name="phone"
            placeholder="Phone No."
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className="my-6">
          <label className="mt-6">Profile Image</label>
          <div className="relative border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
            <input
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="file"
              name="img1"
              id="imgUpload1"
              ref={imageRef}
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
            <div className="flex items-center justify-between rounded-md overflow-hidden">
              <label
                htmlFor="imgUpload1"
                className="px-4 py-3 text-center bg-black text-white cursor-pointer w-1/2"
              >
                Choose file
              </label>
              <span
                id="fileName1"
                className="px-4 py-2 lg:py-3 bg-transparent text-black w-full text-center"
              >
                {profileImage ? profileImage.name : "No file chosen"}
              </span>
            </div>
          </div>
          {(profileImage || profileImageLink) && (
            <div className="relative">
              <Image
                src={
                  profileImage
                    ? URL.createObjectURL(profileImage)
                    : profileImageLink
                }
                alt="logo"
                width={100}
                height={50}
              />
              <TiDeleteOutline
                className="absolute top-0 right-0 cursor-pointer h-6 w-6"
                onClick={clearImage}
              />
            </div>
          )}
        </div>
        <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full relative">
          <input
            className="w-full px-2 py-2 lg:py-3 bg-transparent rounded-md outline-none"
            type={showOldPassword ? "text" : "password"}
            placeholder="Old Password"
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <div
            className="absolute right-0 top-0 bottom-0 flex items-center pr-2"
            onClick={() => setShowOldPassword(!showOldPassword)}
          >
            {showOldPassword ? (
              <FaEye className="cursor-pointer" />
            ) : (
              <FaEyeSlash className="cursor-pointer" />
            )}
          </div>
        </div>
        <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full relative">
          <input
            className="w-full px-2 py-2 lg:py-3 bg-transparent rounded-md outline-none"
            type={showNewPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <div
            className="absolute right-0 top-0 bottom-0 flex items-center pr-2"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? (
              <FaEye className="cursor-pointer" />
            ) : (
              <FaEyeSlash className="cursor-pointer" />
            )}
          </div>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 w-full lg:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
      {/* <button
        onClick={() => {
          handleUpdate();
          handleSelect("profile");
        }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 w-full lg:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
      >
        Back
      </button> */}
    </div>
  );
};

export default EditProfile;
