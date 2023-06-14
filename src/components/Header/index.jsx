import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Text
          className="ml-12 md:ml-[0] md:mt-0 my-[75px] text-base text-teal-900 w-[6%] sm:w-full"
          size="txtInterSemiBold16Teal900"
        >
          CONTENT BLOCKCHAIN
        </Text>
        <Img
          className="common-pointer h-6 mb-[90px] md:ml-[0] ml-[15px] md:mt-0 mt-[74px] w-6"
          src="images/img_clock.svg"
          alt="clock"
          onClick={() => navigate("")}
        />
        <Text
          className="mb-[90px] md:ml-[0] ml-[66px] md:mt-0 mt-[77px] text-base text-black-900"
          size="txtInterMedium16"
        >
          Earn Crypto
        </Text>
        <Text
          className="common-pointer mb-[91px] ml-11 md:ml-[0] md:mt-0 mt-[76px] text-base text-black-900"
          size="txtInterMedium16"
          onClick={() => navigate("/dashboardanalyticscreators")}
        >
          Market Data
        </Text>
        <Text
          className="mb-[90px] ml-6 md:ml-[0] md:mt-0 mt-[77px] text-base text-black-900"
          size="txtInterMedium16"
        >
          Blog
        </Text>
        <Text
          className="common-pointer mb-[91px] md:ml-[0] ml-[39px] md:mt-0 mt-[76px] text-base text-black-900"
          size="txtInterMedium16"
          onClick={() => navigate("/faq")}
        >
          FAQ
        </Text>
        <Button
          className="common-pointer bg-white-A700 border-2 border-green-300 border-solid cursor-pointer font-inter font-medium leading-[normal] mb-[74px] min-w-[202px] md:ml-[0] ml-[881px] mr-[219px] md:mt-0 mt-14 py-[19px] rounded-[29px] text-base text-center text-green-300"
          onClick={() => navigate("/browserextension")}
        >
          {props?.connectWallet}
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
