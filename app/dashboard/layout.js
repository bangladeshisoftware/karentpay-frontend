import {
  SetCookies,
  GetCookies,
  deleteCookies,
} from "@/app/_lib/cookiesSetting";
import { redirect } from "next/navigation";

export default async function LoginLayout({ children }) {
  const token = await GetCookies({ name: "auth_token" });
  if (token == undefined || token == null) {
    redirect("/auth/login");
  }

  return <section>{children}</section>;
}
