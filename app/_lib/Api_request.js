import axios from "axios";
import { toast } from "react-toastify";
import {GetCookies} from "@/app/_lib/cookiesSetting";
const ApiRequest=async({url,formdata=null,method="post",type="application/json"})=>{   

 
    var token=await GetCookies({name:'auth_token'});
    console.log(token);

    const api_request = axios.create({
        baseURL: 'http://localhost:8000/api',       
      });
      api_request.defaults.headers.common['Authorization'] =`Bearer ${token}`;

    try {
        const response = api_request({
          method: method,
          url: url,
          responseType: type,       
          data:formdata,
        });
        let { data } = await response;
        if(type=="multipart/form-data"){
          return data
        }else{
          return JSON.parse(data);
        }
       
      } catch (error) {  
        toast.error("Api Connection Failed, Please check your connection or reload the page");
        //return response;         
       console.log(error);
      }
}

export default ApiRequest;