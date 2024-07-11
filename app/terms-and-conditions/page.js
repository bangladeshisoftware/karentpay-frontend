"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "@/app/_assets/About_img1.jpg";
import img2 from "@/app/_assets/About_img2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoDiamondOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TermsCondition = () => {

  return (
    <div className="container">
      <div className="px-3 mt-[70px] bg-white text-justify ">

        <div className=" py-3">
          <div className="mb-4"><h2 className="text-xl mb-2">TERMS AND CONDITIONS</h2>
            <p>Last updated: 20-09-2024</p></div>

          <div className="mb-4">
            <h2 className="text-xl mb-2">1. Introduction</h2>
            <p>These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at https://www.karentpay.com (together or individually “Service”) operated by Bangladeshi Software.Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at admin@karentpay.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl mb-2">2. Communications</h2>
            <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at admin@karentpay.com.</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl mb-2">3. Purchases</h2>
            <p>If you wish to purchase any product or service made available through Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.You represent and warrant that: (i) you have the legal right to use any card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl mb-2">4. Subscriptions</h2>
            <p>
              Some parts of Service are billed on a subscription basis (“Subscription(s)”). You will be billed in advance on a recurring and periodic basis (“Billing Cycle”). Billing cycles will be set depending on the type of subscription plan you select when purchasing a Subscription.

              At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Karentpay Software cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting admin@karentpay.com customer support team.

              A valid payment method is required to process the payment for your subscription. You shall provide Bangladeshi Software with accurate and complete billing information that may include but not limited to full name, address, state, postal or zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Bangladeshi Software to charge all Subscription fees incurred through your account to any such payment instruments.

              Should automatic billing fail to occur for any reason, Bangladeshi Software reserves the right to terminate your access to the Service with immediate effect..</p>
          </div>


        </div>

      </div>
    </div>
  );
};

export default TermsCondition;
