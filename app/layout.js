export const dynamic = "force-dynamic"
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import { Rubik } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  let backgroundImageStyle = {};
  
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/setting/header-setting`,
      {
        cache: "no-store",
      }
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    
    if (data?.settings?.HeaderBackground) {
      backgroundImageStyle = {
        backgroundImage: `url(${data.settings.HeaderBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100vh",
      };
    }
  } catch (error) {
    console.error("Failed to fetch header setting:", error);
  }

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
  let metadata = {
    title: "Next.js Starter",
    description: "Next.js Starter Description",
    keywords: "nextjs, starter, template",
    icons: {
      icon: "/public/favicon.ico",
    },
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/setting/logo-identity`,
      {
        cache: "no-store",
      }
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data?.success && data?.settings) {
      const keywordsString = data?.settings?.siteKeyword || "nextjs, starter, template";
      const keywordsArray = keywordsString.split(",").map((keyword) => keyword.trim());

      metadata = {
        title: {
          template: `${data.settings.siteName} | %s`,
          default: data.settings.siteName,
        },
        description: data.settings.siteDescription,
        keywords: keywordsArray,
        icons: {
          icon: data.settings.faviconImage,
        },
      };
    }
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
  }

  return metadata;
}
