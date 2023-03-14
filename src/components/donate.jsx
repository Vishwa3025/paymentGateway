import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Rocket from "../assests/Rocket.json";

const Donate = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.open(
  //       // "https://payments-test.cashfree.com/forms/dopayint",
  //       // "_blank"
  //       "https://rzp.io/l/N5o2M2Kuo"
  //     );
  //     navigate("/");
  //   }, 3000);
  // }, []);
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[500px]">
          <Lottie animationData={Rocket} loop={true} />
        </div>
      </div>
      <div className="text-center px-5 md:text-3xl lg:text-4xl text-white font-['Catamaran']">
        Please Hang on, you will be redirected to payment page in 3 sec...
      </div>
    </>
  );
};

export default Donate;
