"use client";
import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies } from "@/app/_lib/cookiesSetting";
import useFetchingData from "@/lib/useFetchingData";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import BankingDrawer from "./BankingDrawer/BankingDrawer";
import EditProfile from "./Edit-Profile/EditProfile";
import ToggleButton from "./Toggle/ToggleButton";

function Product_Catalog() {
  const [selected, setSelected] = useState("profile");
  const [updated, setUpdated] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isInternetDrawerOpen, setIsInternetDrawerOpen] = useState(false);
  const [fileNames, setFileNames] = useState({
    file0: "No file chosen",
    file1: "No file chosen",
    file2: "No file chosen",
    file3: "No file chosen",
    file4: "No file chosen",
  });
  const [user, setUser] = useState("");

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    const token = await GetCookies({ name: "auth_token" });
    console.log("token", token);
    if (token) {
      const response = await ApiRequest({
        url: "/marchentuser",
        method: "get",
      });
      if (response.status == 200) {
        setUser(response.data);
        console.log(response.data.user);
      } else {
        toast.error(response.message);
      }
    }
  };

  const handleSelect = (section) => {
    setSelected(section);
  };

  const handleUpdate = () => {
    setUpdated(!updated);
  };

  const handlePaymentSetting = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e, fileKey) => {
    const file = e.target.files[0];
    setFileNames((prevState) => ({
      ...prevState,
      [fileKey]: file ? file.name : "No file chosen",
    }));
  };

  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");

  const { fetchData } = useFetchingData("/api/front/setting/color-setting");

  useEffect(() => {
    if (
      fetchData?.settings?.GradientColor1 &&
      fetchData?.settings?.GradientColor2
    ) {
      setColor1(fetchData.settings.GradientColor1);
      setColor2(fetchData.settings.GradientColor2);
    }
  }, [fetchData]);

  return (
    <div className=" mt-0 lg:mt-10 z-10 ml-0 lg:ml-8 px-0 lg:px-0 flex flex-col">
      <div className=" border shadow-lg mb-4 lg:mb-2 p-3 lg:p-3 mt-3 rounded-md text-center lg:text-left lg:hidden  ">
        <h3 className="text-xl font-semibold">Settings</h3>
      </div>
      <div
        className="nav  hidden lg:flex md:flex xl:flex lg:gap-4 border rounded-md shadow-md items-center h-fit  text-white py-2 lg:py-4"
        style={{
          background: `linear-gradient(to right, ${color1}, ${color2})`,
        }}
      >
        <h3
          className={`cursor-pointer rounded-md p-2 ml-3 ${
            selected == "profile" ? "bg-gradient-2" : "none"
          }`}
        >
          {!updated ? (
            <span
              onClick={() => {
                handleSelect("profile");
              }}
            >
              Profile
            </span>
          ) : (
            <span
              onClick={() => {
                handleSelect("update");
              }}
              className={`cursor-pointer p-2 rounded-md ${
                selected == "update" ? "bg-gradient-2" : "none"
              }`}
            >
              Update Profile
            </span>
          )}
        </h3>

        {/* <h3
          onClick={() => {
            handleSelect("verification");
          }}
          className={`cursor-pointer p-2 rounded-md ${selected == "verification"
              ? "bg-gradient-2"
              : "none"
            }`}
        >
          Verifications
        </h3>

        <h3
          onClick={() => {
            handleSelect("integration");
          }}
          className={`cursor-pointer p-2 rounded-md ${selected == "integration"
              ? "bg-gradient-2"
              : "none"
            }`}
        >
          Integrations
        </h3>

        <h3
          onClick={() => {
            handleSelect("passkey");
          }}
          className={`cursor-pointer p-2 rounded-md ${selected == "passkey"
              ? "bg-gradient-2"
              : "none"
            }`}
        >
          PassKeys
        </h3> */}

        <h3
          onClick={() => {
            handleSelect("paymentSettings");
          }}
          className={`cursor-pointer p-2 rounded-md ${
            selected == "paymentSettings" ? "bg-gradient-2" : "none"
          }`}
        >
          Payment Settings
        </h3>
      </div>
      <div
        className="nav  flex flex-col lg:hidden md:hidden xl:hidden lg:gap-4 border rounded-md shadow-md items-center h-fit mt-2 text-white py-2 lg:py-4"
        style={{
          background: `linear-gradient(to right, ${color1}, ${color2})`,
        }}
      >
        <h3
          className={`cursor-pointer rounded-md p-2 ml-3 ${
            selected == "profile" ? "bg-gradient-2" : "none"
          }`}
        >
          {!updated ? (
            <span
              onClick={() => {
                handleSelect("profile");
              }}
            >
              Profile
            </span>
          ) : (
            <span
              onClick={() => {
                handleSelect("update");
              }}
              className={`cursor-pointer p-2 rounded-md ${
                selected == "update" ? "bg-gradient-2" : "none"
              }`}
            >
              Update Profile
            </span>
          )}
        </h3>

        {/* <h3
          onClick={() => {
            handleSelect("verification");
          }}
          className={`cursor-pointer p-2 rounded-md ${selected == "verification"
              ? "bg-gradient-2"
              : "none"
            }`}
        >
          Verifications
        </h3>

        <h3
          onClick={() => {
            handleSelect("integration");
          }}
          className={`cursor-pointer p-2 rounded-md ${selected == "integration"
              ? "bg-gradient-2"
              : "none"
            }`}
        >
          Integrations
        </h3>

        <h3
          onClick={() => {
            handleSelect("passkey");
          }}
          className={`cursor-pointer p-2 rounded-md ${selected == "passkey"
              ? "bg-gradient-2"
              : "none"
            }`}
        >
          PassKeys
        </h3> */}

        <h3
          onClick={() => {
            handleSelect("paymentSettings");
          }}
          className={`cursor-pointer p-2 rounded-md ${
            selected == "paymentSettings" ? "bg-gradient-2" : "none"
          }`}
        >
          Payment Settings
        </h3>
      </div>

      <div
        className="container bg-white w-full h-full
       border shadow-md rounded-sm mt-12  pb-8 lg:px-12 xs:px-12 px-4"
      >
        {selected == "profile" && !updated && (
          <div className="lg:mx-24 xl:mx-24 md:mx-16 sm:mx-8 mx-0 font-normal">
            <div className="mt-8">
              <h3 className="">
                Name
                <p className="border w-full rounded-sm p-2 ">{user.name}</p>
              </h3>
            </div>
            <div className="mt-8">
              <h3 className="">
                Country
                <p className="border w-full rounded-sm p-2 ">
                  {user.country_name}
                </p>
              </h3>
            </div>
            <div className="mt-8">
              <h3 className="">
                Email
                <p className="border w-full rounded-sm p-2 ">{user.email}</p>
              </h3>
            </div>
            <div className="mt-8">
              <h3 className="">
                Phone
                <p className="border w-full rounded-sm p-2 ">{user.phone}</p>
              </h3>
            </div>

            <div className="mt-8">
              <button
                onClick={() => {
                  handleUpdate();
                  handleSelect("update");
                }}
                className="bg-gradient-2 mx-auto lg:mx-0 md:mx-0 sm:mx-0 w-full lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
              >
                Update
              </button>
            </div>
          </div>
        )}
        <div>
          {updated && selected == "update" ? (
            <EditProfile
              handleUpdate={handleUpdate}
              handleSelect={handleSelect}
            />
          ) : (
            ""
          )}
        </div>
        <div className="h-[60%]">
          {selected == "verification" ? (
            <form onSubmit={handlePaymentSetting} className="">
              <div className="my-6">
                <label className="mt-6 ">Work in Progress</label>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
        <div className="h-[60%]">
          {selected == "integration" ? (
            <form onSubmit={handlePaymentSetting} className="">
              <div className="my-6">
                <label className="mt-6 ">Work in Progress</label>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
        <div className="h-[60%]">
          {selected == "passkey" ? (
            <form onSubmit={handlePaymentSetting} className="">
              <div className="my-6">
                <label className="mt-6 ">Work in Progress</label>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
        <div className="h-[60%]">
          {selected == "paymentSettings" ? (
            <form onSubmit={handlePaymentSetting} className="">
              <div className="my-6">
                <h2 className="text-center">Work in Progress</h2>
                <label className="mt-6 ">Payment Title</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder="Payment Title"
                  />
                </div>
              </div>
              <div className="my-6">
                <label className="mt-6  ">Company Logo</label>
                <div className="relative border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    name="img1"
                    id="imgUpload1"
                    onChange={(e) => handleFileChange(e, "file0")}
                  />
                  <div className="flex items-center justify-between rounded-md overflow-hidden">
                    <label
                      htmlFor="imgUpload1"
                      className="px-4 py-2 lg:py-3 lg:px-6 text-center bg-black text-white cursor-pointer w-1/4"
                    >
                      Choose file
                    </label>
                    <span
                      id="fileName1"
                      className="px-4 py-2 lg:py-3 lg:px-6 bg-transparent text-black w-full text-center"
                    >
                      {fileNames.file0}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b">
                <label className="mt-6 ">Support</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder=""
                  />
                </div>
                <label className="mt-6 ">Faq</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder=""
                  />
                </div>
                <label className="mt-6 ">Gift</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder=""
                  />
                </div>
                <label className="mt-6 ">Login</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder=""
                  />
                </div>
                {/* <div className="relative border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    name="img2"
                    id="imgUpload2"
                    onChange={(e) => handleFileChange(e, "file2")}
                  />
                  <div className="flex items-center justify-between rounded-md overflow-hidden">
                    <label
                      htmlFor="imgUpload2"
                      className="px-4 py-2 lg:py-3 lg:px-6 text-center bg-black text-white cursor-pointer w-1/4"
                    >
                      Choose file
                    </label>
                    <span
                      id="fileName2"
                      className="px-4 py-2 lg:py-3 lg:px-6 bg-transparent text-black w-full text-center"
                    >
                      {fileNames.file2}
                    </span>
                  </div>
                </div> */}
                {/* <div className="relative border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    name="img3"
                    id="imgUpload3"
                    onChange={(e) => handleFileChange(e, "file3")}
                  />
                  <div className="flex items-center justify-between rounded-md overflow-hidden">
                    <label
                      htmlFor="imgUpload3"
                      className="px-4 py-2 lg:py-3 lg:px-6 text-center bg-black text-white cursor-pointer w-1/4"
                    >
                      Choose file
                    </label>
                    <span
                      id="fileName3"
                      className="px-4 py-2 lg:py-3 lg:px-6 bg-transparent text-black w-full text-center"
                    >
                      {fileNames.file3}
                    </span>
                  </div>
                </div> */}
                {/* <div className="relative border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    name="img4"
                    id="imgUpload4"
                    onChange={(e) => handleFileChange(e, "file4")}
                  />
                  <div className="flex items-center justify-between rounded-md overflow-hidden">
                    <label
                      htmlFor="imgUpload4"
                      className="px-4 py-2 lg:py-3 lg:px-6 text-center bg-black text-white cursor-pointer w-1/4"
                    >
                      Choose file
                    </label>
                    <span
                      id="fileName4"
                      className="px-4 py-2 lg:py-3 lg:px-6 bg-transparent text-black w-full text-center"
                    >
                      {fileNames.file4}
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="">
                <h3 className="mt-6  ">Manage Your Payment Gateway</h3>
                <button
                  onClick={() => {
                    setIsMobileDrawerOpen(true);
                  }}
                  className="my-6 bg-tansparent border-black border rounded-md hover:border-blue-600 w-full py-3 text-left px-4 font-semibold"
                >
                  Mobile Banking
                </button>
                <button
                  onClick={() => {
                    setIsInternetDrawerOpen(true);
                  }}
                  className="my-6 bg-tansparent border-black border rounded-md hover:border-blue-600 w-full py-3 text-left px-4 font-semibold"
                >
                  Internet Banking
                </button>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
      {isMobileDrawerOpen && (
        <>
          <BankingDrawer
            show={setIsMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
          >
            <h3 className="text-lg font-semibold mb-4">
              Mobile Banking Options
            </h3>
            <div className="flex flex-col space-y-2">
              <ToggleButton optionName="Bkash" />
              <ToggleButton optionName="Nagad" />
              <ToggleButton optionName="Rocket" />
              <ToggleButton optionName="Upay" />
            </div>
          </BankingDrawer>
        </>
      )}
      {isInternetDrawerOpen && (
        <BankingDrawer
          show={setIsInternetDrawerOpen}
          onClose={() => setIsInternetDrawerOpen(false)}
        >
          <h3 className="text-lg font-semibold mb-4">Mobile Banking Options</h3>
          <div className="flex flex-col space-y-2">
            <ToggleButton optionName="DBBL" />
            <ToggleButton optionName="Bank Asia" />
            <ToggleButton optionName="City Bank" />
            <ToggleButton optionName="Islami Bank" />
          </div>
        </BankingDrawer>
      )}
    </div>
  );
}

export default Product_Catalog;
