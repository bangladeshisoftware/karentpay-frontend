'use server';
import { cookies } from 'next/headers'; 
const SetCookies=({name,value})=>{
  const cookieStore = cookies()
  const token = cookieStore.set(name,value,{ secure: true });  
  return token? true : false;
}
const GetCookies=async({name})=>{
    const cookieStore = cookies()
    const token = cookieStore.get(name)
    if(token){
      return token.value;
    }else{
      return false;
    }
    
  }

 
const deleteCookies = async({name})=>{
  const cookieStore = cookies()  
  const token = cookieStore.get(name)
  if(token==undefined || token==null){return true;}
    cookies().delete(name);
    return true;
  
}
export  {SetCookies,GetCookies,deleteCookies};