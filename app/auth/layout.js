import {
  GetCookies,
  SetCookies,
  deleteCookies,
} from "@/app/_lib/cookiesSetting";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login",
};

export default async function LoginLayout({ children }) {
  const token = await GetCookies({ name: "auth_token" });

  if (token) {
    redirect("/dashboard");
  }

  return <section>{children}</section>;
}
