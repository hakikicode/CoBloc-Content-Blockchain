import React from "react";

import { Img, Text } from "components";

const SlidecoverPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[145px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-end w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start mb-[109px] md:mt-0 mt-[205px] w-1/2 md:w-full">
            <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start w-[76%] md:w-full">
              <Text
                className="md:mt-0 mt-11 sm:text-[44px] md:text-[50px] text-[58px] text-teal-900 w-[62%] sm:w-full"
                size="txtInterSemiBold58Teal900"
              >
                CONTENT BLOCKCHAIN
              </Text>
              <Img
                className="h-[200px] w-[200px]"
                src="images/img_contentblockchainlogo.svg"
                alt="contentblockcha_Two"
              />
            </div>
            <Text
              className="mt-[79px] sm:text-[44px] md:text-[50px] text-[58px] text-green-300 w-[98%] sm:w-full"
              size="txtInterSemiBold58Green300"
            >
              PLAY-TO-EARN BLOCKCHAIN FOR CONTENT CREATOR AND BRAND CAMPAIGNS
            </Text>
            <div className="flex flex-row gap-[34px] items-start justify-end md:ml-[0] ml-[581px] mt-[177px] w-[34%] md:w-full">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_group84.svg"
                alt="user"
              />
              <div className="flex flex-col gap-1.5 items-start justify-start mt-9">
                <Text
                  className="text-teal-900 text-xl"
                  size="txtInterSemiBold20Teal900"
                >
                  Aliu Rasheed
                </Text>
                <Text
                  className="text-base text-teal-900"
                  size="txtInterSemiBold16Teal900"
                >
                  Full stack developer
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="h-[100px] mb-[109px] md:ml-[0] ml-[148px] md:mt-0 mt-[871px] w-[100px]"
            src="images/img_group84.svg"
            alt="user_One"
          />
          <div className="h-[1080px] md:ml-[0] ml-[34px] relative w-[36%] md:w-full">
            <Img
              className="absolute h-[1080px] inset-y-[0] my-auto object-cover right-[0]"
              src="images/img_contentblockchainlogo_gray_200.png"
              alt="contentblockcha_Three"
            />
            <Text
              className="absolute bottom-[13%] left-[0] text-teal-900 text-xl"
              size="txtInterSemiBold20Teal900"
            >
              Abisoye Onanuga
            </Text>
            <Text
              className="absolute bottom-[11%] left-[0] text-base text-teal-900"
              size="txtInterSemiBold16Teal900"
            >
              Designer
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidecoverPage;
