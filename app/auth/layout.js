import {SetCookies,GetCookies,deleteCookies} from "@/app/_lib/cookiesSetting";
import { redirect } from "next/navigation";

export default async function LoginLayout({ children }) {    

const token=await GetCookies({name:'auth_token'});
console.log(token);
if (token !==undefined) {
  redirect('/dashboard');  
}

  return (
   <section>{children}</section>
  );
}