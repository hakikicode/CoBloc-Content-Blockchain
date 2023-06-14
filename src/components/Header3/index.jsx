import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header3 = (props) => {
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
          className="common-pointer mb-[90px] md:ml-[0] ml-[66px] md:mt-0 mt-[77px] text-base text-black-900_02"
          size="txtInterMedium16Black90002"
          onClick={() => navigate("/earn")}
        >
          Earn Crypto
        </Text>
        <Text
          className="mb-[91px] ml-11 md:ml-[0] md:mt-0 mt-[76px] text-base text-black-900_02"
          size="txtInterMedium16Black90002"
        >
          Market Data
        </Text>
        <Text
          className="common-pointer mb-[91px] ml-11 md:ml-[0] md:mt-0 mt-[76px] text-base text-black-900_02"
          size="txtInterMedium16Black90002"
          onClick={() => navigate("/creatoraccount")}
        >
          Dashboard
        </Text>
        <Text
          className="mb-[90px] ml-11 md:ml-[0] md:mt-0 mt-[77px] text-base text-black-900_02"
          size="txtInterMedium16Black90002"
        >
          Buy
        </Text>
        <Text
          className="mb-[90px] ml-11 md:ml-[0] md:mt-0 mt-[77px] text-base text-black-900_02"
          size="txtInterMedium16Black90002"
        >
          Swap
        </Text>
        <Text
          className="mb-[90px] ml-11 md:ml-[0] md:mt-0 mt-[77px] text-base text-black-900_02"
          size="txtInterMedium16Black90002"
        >
          Blog
        </Text>
        <Text
          className="common-pointer mb-[91px] ml-11 md:ml-[0] md:mt-0 mt-[76px] text-base text-black-900_02"
          size="txtInterMedium16Black90002"
          onClick={() => navigate("/faq")}
        >
          FAQ
        </Text>
        <Text
          className="mb-[92px] md:ml-[0] ml-[547px] md:mt-0 mt-[75px] text-base text-black-900_02"
          size="txtInterMedium16Black90002"
        >
          User account
        </Text>
        <div className="border-2 border-gray-500_01 border-solid flex flex-col h-[58px] items-center justify-start mb-[74px] md:ml-[0] ml-[59px] mr-[221px] md:mt-0 mt-14 rounded-[50%] w-[58px]">
          <div className="bg-gray-200 flex flex-col gap-2.5 h-[55px] items-center justify-end pt-1.5 px-1.5 rounded-[27px] w-[55px]">
            <div className="bg-gray-500_01 h-4 mt-1 rounded-[50%] w-4"></div>
            <Img className="h-[17px]" src="images/img_eye.svg" alt="eye" />
          </div>
        </div>
      </header>
    </>
  );
};

Header3.defaultProps = {};

export default Header3;
