"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Rubik } from "@next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [siteData, setSiteData] = useState({
    title: "Karentpay Gateway",
    description: "A smart payment gateway for your daily need",
    favicon: "/favicon.ico",
    keywords: 'payment, gateway, smart payment, daily needs',
  });

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const token = Cookies.get("auth_token");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_DATA_API}/admin/setting/logo-identity`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("API Response:", response);
        if (response.data && response.data.settings) {
          setSiteData({
            title: response.data.settings.siteName,
            description: response.data.settings.siteDescription,
            favicon: response.data.settings.faviconImage,
            keywords: response.data.settings.siteKeyword,
          });
        }
      } catch (error) {
        console.error("Error fetching site data:", error);
      }
    };
    fetchSiteData();
  }, []);

  console.log("Site Data:", siteData);

  return (
    <html lang="en">
      <Head>
        <title>{siteData.title}</title>
        <meta name="description" content={siteData.description} />
        <meta name="keywords" content={siteData.keywords} />
        <link rel="icon" href={siteData.favicon}/>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/jpeg" href="/favicon.jpeg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${rubik.className} body-background`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
