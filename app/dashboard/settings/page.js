"use client";
import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies } from "@/app/_lib/cookiesSetting";
import useFetchingData from "@/lib/useFetchingData";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import BankingDrawer from "../components/BankingDrawer/BankingDrawer";
import EditProfile from "../components/Edit-Profile/EditProfile";
import ToggleButton from "../components/Toggle/ToggleButton";

function Product_Catalog() {
  const [selected, setSelected] = useState("profile");
  const [updated, setUpdated] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isInternetDrawerOpen, setIsInternetDrawerOpen] = useState(false);
  const [paymentTitle, setPaymentTitle] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyLogoLink, setCompanyLogoLink] = useState("");
  const [support, setSupport] = useState("");
  const [faq, setFaq] = useState("");
  const [gift, setGift] = useState("");
  const [loginLink, setLoginLink] = useState("");
  const [data, setData] = useState([]);

  const [user, setUser] = useState("");

  useEffect(() => {
    const getuser = async () => {
      const token = await GetCookies({ name: "auth_token" });
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response?.data?.data?.user);
    };

    getuser();
  }, []);

  console.log(user);

  const imageRef = useRef(null);
  const clearImage = () => {
    setCompanyLogo("");
    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };

  const handleSelect = (section) => {
    setSelected(section);
  };

  const handleUpdate = () => {
    setUpdated(!updated);
  };

  // const { fetchData: paymentSettingsData } = useFetchingData(
  //   "/api/merchant/payment-settings"
  // );
  // console.log(paymentSettingsData);
  useEffect(() => {
    const getPaymentSettings = async () => {
      const token = await GetCookies({ name: "auth_token" });
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/merchant/payment-settings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(response.data[0]);
        setData(response.data);
        setPaymentTitle(response.data[0]?.payment_title);
        setSupport(response.data[0]?.support);
        setFaq(response.data[0]?.faq);
        setGift(response.data[0]?.gift);
        setLoginLink(response.data[0]?.login_link);
        setCompanyLogoLink(response.data[0]?.company_logo);
      } catch (error) {
        console.error(error);
      }
    };

    getPaymentSettings();
  }, []);

  const handlePaymentSetting = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("payment_title", paymentTitle);
    if (companyLogo) {
      formData.append("company_logo", companyLogo);
    }
    formData.append("support", support);
    formData.append("faq", faq);
    formData.append("gift", gift);
    formData.append("login_link", loginLink);

    if (data.length > 0 && data[0].id) {
      formData.append("_method", "PUT");
    }

    var token = await GetCookies({ name: "auth_token" });
    try {
      if (data.length > 0 && data[0].id) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/merchant/payment-settings/${data[0].id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        toast.success("Form submitted successfully!");
      } else {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/merchant/payment-settings`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        toast.success("Form submitted successfully!");
      }
    } catch (error) {
      toast.error("Failed to submit form.");
      console.error(error);
    }
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
    <div className="  z-10 ml-0 px-0 lg:px-0 flex flex-col">
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
       border shadow-md rounded-sm mt-8  pb-8 lg:px-12 xs:px-12 px-4"
      >
        {selected == "profile" && (
          // <div className="lg:mx-24 xl:mx-24 md:mx-16 sm:mx-8 mx-0 font-normal">
          //   <div className="mt-8">
          //     <h3 className="">
          //       Name
          //       <p className="border w-full rounded-sm p-2 ">{user?.name}</p>
          //     </h3>
          //   </div>
          //   <div className="mt-8">
          //     <h3 className="">
          //       Country
          //       <p className="border w-full rounded-sm p-2 ">
          //         {user.country_name}
          //       </p>
          //     </h3>
          //   </div>
          //   <div className="mt-8">
          //     <h3 className="">
          //       Email
          //       <p className="border w-full rounded-sm p-2 ">{user.email}</p>
          //     </h3>
          //   </div>
          //   <div className="mt-8">
          //     <h3 className="">
          //       Phone
          //       <p className="border w-full rounded-sm p-2 ">{user.phone}</p>
          //     </h3>
          //   </div>
          //   <div className="mt-8">
          //     <h3 className="">
          //       Image
          //       <Image src={user.avatar ? user.avatar : ""} alt="profile" />
          //     </h3>
          //   </div>

          //   <div className="mt-8">
          //     <button
          //       onClick={() => {
          //         handleUpdate();
          //         handleSelect("update");
          //       }}
          //       className="bg-gradient-2 mx-auto lg:mx-0 md:mx-0 sm:mx-0 w-full lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
          //     >
          //       Update
          //     </button>
          //   </div>
          // </div>
          <EditProfile user={user} />
        )}
        <div>
          {updated && selected == "update" ? (
            <EditProfile
              handleUpdate={handleUpdate}
              handleSelect={handleSelect}
              user={user}
            />
          ) : (
            ""
          )}
        </div>
        {/* <div className="h-[60%]">
          {selected == "verification" ? (
            <form className="">
              <div className="my-6">
                <label className="mt-6 ">Work in Progress</label>
              </div>
            </form>
          ) : (
            ""
          )}
        </div> */}
        {/* <div className="h-[60%]">
          {selected == "integration" ? (
            <form  className="">
              <div className="my-6">
                <label className="mt-6 ">Work in Progress</label>
              </div>
            </form>
          ) : (
            ""
          )}
        </div> */}
        {/* <div className="h-[60%]">
          {selected == "passkey" ? (
            <form  className="">
              <div className="my-6">
                <label className="mt-6 ">Work in Progress</label>
              </div>
            </form>
          ) : (
            ""
          )}
        </div> */}
        <div className="h-[60%]">
          {selected == "paymentSettings" ? (
            <form className="">
              <div className="my-6">
                <label className="mt-6 ">Payment Name</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder="Payment Title"
                    value={paymentTitle}
                    onChange={(e) => setPaymentTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-6">
                <label className="mt-6 ">Company Logo</label>
                <div className="relative border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    name="img1"
                    id="imgUpload1"
                    ref={imageRef}
                    onChange={(e) => setCompanyLogo(e.target.files[0])}
                  />
                  <div className="flex items-center justify-between rounded-md overflow-hidden">
                    <label
                      htmlFor="imgUpload1"
                      className="px-4 py-2 lg:py-3  text-center bg-black text-white cursor-pointer w-1/4"
                    >
                      Choose file
                    </label>
                    <span
                      id="fileName1"
                      className="px-4 py-2 lg:py-3  bg-transparent text-black w-full text-center"
                    >
                      {companyLogo ? companyLogo.name : "No file chosen"}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    // src={URL.createObjectURL(companyLogo)}
                    src={
                      companyLogo
                        ? URL.createObjectURL(companyLogo)
                        : companyLogoLink
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
              </div>
              <div className="border-b">
                <label className="mt-6 ">Support</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder=""
                    value={support}
                    onChange={(e) => setSupport(e.target.value)}
                  />
                </div>
                <label className="mt-6 ">Faq</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder=""
                    value={faq}
                    onChange={(e) => setFaq(e.target.value)}
                  />
                </div>
                <label className="mt-6 ">Gift</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder=""
                    value={gift}
                    onChange={(e) => setGift(e.target.value)}
                  />
                </div>
                <label className="mt-6 ">Login</label>
                <div className="border my-3 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                    type="text"
                    name="name"
                    placeholder="http://example.com/loginlink"
                    value={loginLink}
                    onChange={(e) => setLoginLink(e.target.value)}
                  />
                </div>
                <div className="my-8">
                  <button
                    onClick={handlePaymentSetting}
                    className="bg-gradient-2 mx-auto lg:mx-0 md:mx-0 sm:mx-0 w-full lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
                  >
                    {data.length > 0 && data[0].id ? "Update" : "Add"}
                  </button>
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

              {/* payment gateway */}
              {/* <div className="">
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
              </div> */}
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
