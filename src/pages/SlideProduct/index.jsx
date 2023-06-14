import React from "react";

import { Button, Img, Text } from "components";

const SlideProductPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-end justify-end mx-auto md:pl-10 pl-16 sm:pl-5 pt-16 w-full">
        <div className="flex md:flex-col flex-row gap-[25px] items-start justify-end w-[79%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[61px] items-end justify-start md:mt-0 mt-[263px] w-[9%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
              <Button className="bg-blue-700 flex h-10 items-center justify-center p-[7px] rounded-[50%] w-10">
                <Img src="images/img_user.svg" alt="user" />
              </Button>
              <Img
                className="h-10 md:h-auto mt-[55px] object-cover w-[41px] sm:w-full"
                src="images/img_flow1.png"
                alt="flowOne"
              />
              <Img
                className="h-[45px] md:h-auto mt-[54px] object-cover w-full"
                src="images/img_spaceandtimecoloricon.png"
                alt="spaceandtimecol"
              />
              <Button className="bg-light_blue-A700 flex h-10 items-center justify-center mt-[51px] p-[7px] rounded-[50%] w-10">
                <Img src="images/img_rewind.svg" alt="rewind" />
              </Button>
            </div>
            <Img
              className="h-7"
              src="images/img_truflationlogo.svg"
              alt="truflationlogo"
            />
          </div>
          <div className="flex flex-col justify-start w-[90%] md:w-full">
            <div className="flex md:flex-col flex-row gap-11 items-center justify-start ml-2 md:ml-[0] w-[59%] md:w-full">
              <Text
                className="sm:text-[44px] md:text-[50px] text-[58px] text-teal-900"
                size="txtInterSemiBold58Teal900"
              >
                CONTENT BLOCKCHAIN
              </Text>
              <Img
                className="h-10 w-10"
                src="images/img_clock.svg"
                alt="clock"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[259px] mt-[37px] text-3xl sm:text-[26px] md:text-[28px] text-teal-900"
              size="txtInterBold30Teal900"
            >
              The Product
            </Text>
            <div className="md:h-[659px] h-[750px] mt-[119px] relative w-full">
              <Img
                className="absolute bottom-[0] h-[540px] object-cover right-[0]"
                src="images/img_contentblockchainlogo_gray_200.png"
                alt="contentblockcha_Two"
              />
              <div className="absolute flex flex-col gap-[59px] items-start justify-start left-[0] max-w-[843px] top-[0] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_02 w-auto"
                  size="txtInterBold30Black90002"
                >
                  Chainlink Price Feeds
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_02 w-auto"
                  size="txtInterBold30Black90002"
                >
                  Developed on Flow blockchain
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_02 w-auto"
                  size="txtInterBold30Black90002"
                >
                  Analyze and store real-time market data from Chainlink
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_02 w-auto"
                  size="txtInterBold30Black90002"
                >
                  Pay and Earn crypto tokens like Verse
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_02 w-auto"
                  size="txtInterBold30Black90002"
                >
                  Index tokens to market inflation.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideProductPage;
