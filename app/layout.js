import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import { Rubik } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/setting/header-setting`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());
  // console.log(data?.settings?.HeaderBackground);

  const backgroundImageStyle = {
    backgroundImage: `url(${data?.settings?.HeaderBackground})`,
    backgroundSize: "cover", // This will ensure the background covers the entire element
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%", // Set the width as required
    height: "100vh", // Set the height as required
  };

  return (
    <html lang="en">
      <body className={`${rubik.className}`} style={backgroundImageStyle}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}

export async function generateMetadata() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/setting/logo-identity`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  if (data?.success && data?.settings) {
    let keywordsString;

    if (data?.settings?.siteKeyword) {
      keywordsString = data?.settings?.siteKeyword;
    } else {
      keywordsString = "nextjs, starter, template";
    }

    const keywordsArray = keywordsString
      .split(",")
      .map((keyword) => keyword.trim());

    return {
      title: {
        template: `${data?.settings?.siteName} | %s`,
        default: data?.settings?.siteName,
      },
      description: data?.settings?.siteDescription,
      keywords: keywordsArray,
      icons: {
        icon: data?.settings?.faviconImage,
      },
    };
  } else {
    return {
      title: "Next.js Starter",
      description: "Next.js Starter Description",
      keywords: "nextjs, starter, template",
      icons: {
        icon: "/public/favicon.ico",
      },
    };
  }
}
