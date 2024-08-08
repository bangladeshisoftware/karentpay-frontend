import axios from "axios";
import { toast } from "react-toastify";
import {GetCookies} from "@/app/_lib/cookiesSetting";
const ApiRequest=async({url,formdata=null,method="post",type="application/json"})=>{   

 
    var token=await GetCookies({name:'auth_token'});

    if(localStorage.getItem('secret_key')){
      var secret_key=localStorage.getItem('secret_key');
    }else{
      var secret_key="";
    }
    

    const api_request = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL+'/api', 
      });
      api_request.defaults.headers.common['Authorization'] =`Bearer ${token}`;

    try {
        const response = api_request({
          method: method,
          url: url,
          responseType: type,       
          data:formdata,
          headers: {
            'X-SECRET-KEY': secret_key
            }
        }
      );
      


        let { data } = await response;
        if(type=="multipart/form-data"){
          return data
        }else{
          return JSON.parse(data);
        }
       
      } catch (error) {  
        toast.error("Api Connection Failed, Please check your connection or reload the page");
        //return response;         

      }
}

export default ApiRequest;