import React from "react";
import { permanentRedirect } from 'next/navigation';

const Pay = ({params}) => {
   console.log(params.hash)
   permanentRedirect(`${process.env.NEXT_PUBLIC_BASE_URL}/pay/${params.hash}`)

   return(   
      <h1 className="center">success </h1>
   )
}
export default Pay;