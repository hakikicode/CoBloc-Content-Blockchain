import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Text
          className="common-pointer ml-12 md:ml-[0] md:mt-0 my-[75px] text-base text-teal-900 w-[6%] sm:w-full"
          size="txtInterSemiBold16Teal900"
          onClick={() => navigate("/earn")}
        >
          CONTENT BLOCKCHAIN
        </Text>
        <Img
          className="h-6 mb-[90px] md:ml-[0] ml-[15px] md:mt-0 mt-[74px] w-6"
          src="images/img_clock.svg"
          alt="clock"
        />
        <Text
          className="common-pointer mb-[90px] md:ml-[0] ml-[66px] md:mt-0 mt-[77px] text-base text-black-900"
          size="txtInterMedium16"
          onClick={() => navigate("/earn")}
        >
          Earn Crypto
        </Text>
        <Text
          className="mb-[91px] ml-11 md:ml-[0] md:mt-0 mt-[76px] text-base text-black-900"
          size="txtInterMedium16"
        >
          Market Data
        </Text>
        <Text
          className="mb-[91px] ml-11 md:ml-[0] md:mt-0 mt-[76px] text-base text-black-900"
          size="txtInterMedium16"
        >
          Dashboard
        </Text>
        <Text
          className="common-pointer mb-[90px] ml-11 md:ml-[0] md:mt-0 mt-[77px] text-base text-black-900"
          size="txtInterMedium16"
          onClick={() => navigate("/buybrands")}
        >
          Buy
        </Text>
        <Text
          className="mb-[90px] ml-11 md:ml-[0] md:mt-0 mt-[77px] text-base text-black-900"
          size="txtInterMedium16"
        >
          Swap
        </Text>
        <Text
          className="mb-[90px] ml-11 md:ml-[0] md:mt-0 mt-[77px] text-base text-black-900"
          size="txtInterMedium16"
        >
          Blog
        </Text>
        <Text
          className="common-pointer mb-[91px] ml-11 md:ml-[0] md:mt-0 mt-[76px] text-base text-black-900"
          size="txtInterMedium16"
          onClick={() => navigate("/faq")}
        >
          FAQ
        </Text>
        <Text
          className="mb-[92px] md:ml-[0] ml-[547px] md:mt-0 mt-[75px] text-base text-black-900"
          size="txtInterMedium16"
        >
          User account
        </Text>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[66px] items-center justify-start mb-[70px] md:ml-[0] ml-[55px] mr-[217px] md:mt-0 mt-[52px] p-1 w-[66px]"
          style={{ backgroundImage: "url('images/img_group84.svg')" }}
        >
          <div className="border-2 border-gray-500_01 border-solid h-[58px] rounded-[50%] w-[58px]"></div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
