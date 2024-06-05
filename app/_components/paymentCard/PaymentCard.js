// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import styled, { keyframes } from "styled-components";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px;
// `;

// const CountrySelector = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
// `;

// const CountryButton = styled.button`
//   background-color: ${(props) => (props.selected ? "#007bff" : "#fff")};
//   color: ${(props) => (props.selected ? "#fff" : "#007bff")};
//   border: 2px solid #007bff;
//   border-radius: 5px;
//   padding: 10px 20px;
//   margin: 0 10px;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background-color: #0056b3;
//     color: #fff;
//   }
// `;

// const CardContainer = styled.div`
//   width: 300px;
//   padding: 20px;
//   background-color: #fff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   text-align: center;
//   animation: ${fadeIn} 1s ease-in-out;
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   margin-bottom: 20px;
// `;

// const Description = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
// `;

// const PaymentCard = () => {
//   const [selectedCountry, setSelectedCountry] = useState("Bangladesh");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSelectedCountry((prev) =>
//         prev === "Bangladesh" ? "India" : "Bangladesh"
//       );
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Container>
//       <CountrySelector>
//         <CountryButton
//           selected={selectedCountry === "Bangladesh"}
//           onClick={() => setSelectedCountry("Bangladesh")}
//         >
//           Bangladesh
//         </CountryButton>
//         <CountryButton
//           selected={selectedCountry === "India"}
//           onClick={() => setSelectedCountry("India")}
//         >
//           India
//         </CountryButton>
//       </CountrySelector>
//       <CardContainer>
//         {selectedCountry === "Bangladesh" ? (
//           <>
//             <Title>Payment Systems in Bangladesh</Title>
//             <Description>
//               <div className="border p-2">
//                 <div className="border-b">
//                   <Image src={bkash} height={100} width={100} alt="" />
//                 </div>
//                 <div className="border-b">
//                   <Image src={nagad} height={100} width={100} alt="" />
//                 </div>
//                 <div>
//                   <Image src={rocket} height={100} width={100} alt="" />
//                 </div>
//               </div>
//             </Description>
//           </>
//         ) : (
//           <>
//             <Title>Payment Systems in India</Title>
//             <Description>
//               In India, major payment systems include Paytm, Google Pay, and
//               PhonePe. These platforms offer a wide range of services including
//               bill payments, money transfers, and online shopping, making
//               digital transactions convenient.
//             </Description>
//           </>
//         )}
//       </CardContainer>
//     </Container>
//   );
// };

// export default PaymentCard;

// <div className="border p-2">
//   <div className="border-b">
//     <Image src={bkash} height={100} width={100} alt="" />
//   </div>
//   <div className="border-b">
//     <Image src={nagad} height={100} width={100} alt="" />
//   </div>
//   <div>
//     <Image src={rocket} height={100} width={100} alt="" />
//   </div>
// </div>;
