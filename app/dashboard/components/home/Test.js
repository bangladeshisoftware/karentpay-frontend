'use client';
import React,{useState,useEffect} from 'react';
import ApiRequest from '@/app/_lib/Api_request';


const Test = () => {
    const [key, setKey] = useState({});
    useEffect(() => {
        getTestKey();
    },[]);

    useEffect(()=>{
        console.log(key[0]);
    },[key])

    const getTestKey = async () => {
        const response = await ApiRequest({
            url: '/key',
            method: 'get',
        });
        if (response.status == 200) {
            setKey(response.data);
        } else {
            console.log(response);
        }

        console.log(key);
    };


    return (
        <div className=" ml-5">
          <p className="text-xl font-bold"> {key[0]?.name} </p>  
          <p className="text-xl font-bold">Privet Key : <span> {key[0]?.public_key} </span> </p>  
          <p className="text-xl font-bold">Public Key : <span> {key[0]?.privet_key} </span></p>  

        </div>
    )}

export default Test;

