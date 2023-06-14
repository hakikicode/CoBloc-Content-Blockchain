import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const FAQPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header2 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="h-[358px] md:px-5 relative w-full">
              <Img
                className="h-[358px] m-auto object-cover w-full"
                src="images/img_rectangle73.png"
                alt="rectangleSeventyThree"
              />
              <div className="absolute bg-teal-900_19 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[37px] sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start mb-36 md:ml-[0] ml-[138px]">
                  <Text
                    className="sm:text-[44px] md:text-[50px] text-[58px] text-white-A700"
                    size="txtInterSemiBold58WhiteA700"
                  >
                    <>
                      FAQ
                      <br />
                      Frequently asked questions
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1441px] mt-[150px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start w-auto md:w-full">
                <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 gap-[636px] h-[99px] md:h-auto items-center justify-start max-w-[1174px] sm:pl-5 pl-[38px] rounded-lg shadow-bs2 w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                    size="txtInterBold30"
                  >
                    What is Content Block chain?
                  </Text>
                  <Img
                    className="h-[5px] w-[11px]"
                    src="images/img_arrowdown_black_900.svg"
                    alt="vectorTwentyThree"
                  />
                </div>
                <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 gap-[555px] h-[99px] md:h-auto items-center justify-start max-w-[1174px] sm:pl-5 pl-[38px] rounded-lg shadow-bs2 w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                    size="txtInterBold30"
                  >
                    Where can I find support and help?
                  </Text>
                  <Img
                    className="h-[5px] w-[11px]"
                    src="images/img_arrowdown_black_900.svg"
                    alt="vectorTwentyThree_One"
                  />
                </div>
                <Button
                  className="common-pointer bg-white-A700 cursor-pointer flex h-[99px] items-center justify-center max-w-[1174px] px-[35px] py-[31px] rounded-lg shadow-bs2 w-full"
                  onClick={() => navigate("/faqcommunity")}
                  rightIcon={
                    <div className="mt-px mb-1.5 ml-[35px] outline-black-900 outline-[1.5px] outline">
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        alt="Vector 23"
                      />
                    </div>
                  }
                >
                  <div className="font-bold leading-[normal] md:text-[28px] sm:px-5 sm:text-[26px] text-3xl text-black-900 text-left">
                    Where does the community hang out?
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-white-A700 cursor-pointer flex h-[134px] items-center justify-center max-w-[1174px] px-[35px] py-[31px] rounded-lg shadow-bs2 w-full"
                  onClick={() => navigate("/faqbrandpartner")}
                  rightIcon={
                    <div className="ml-[35px] outline-black-900 outline-[1.5px] outline my-1">
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        alt="Vector 23"
                      />
                    </div>
                  }
                >
                  <div className="font-bold leading-[normal] md:text-[28px] sm:px-5 sm:text-[26px] text-3xl text-black-900 text-left">
                    What if my business partner doesn’t appear in search results
                    when I try to add them as a brand partner?
                  </div>
                </Button>
                <div className="bg-white-A700 flex flex-row md:gap-10 gap-[797px] h-[99px] md:h-auto items-center justify-start max-w-[1174px] sm:pl-5 pl-[38px] rounded-lg shadow-bs2 w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                    size="txtInterBold30"
                  >
                    How do I get paid?
                  </Text>
                  <Img
                    className="h-[5px] w-[11px]"
                    src="images/img_arrowdown_black_900.svg"
                    alt="vectorTwentyThree_Two"
                  />
                </div>
              </div>
              <div className="bg-teal-900 flex md:flex-1 flex-row items-center justify-start mb-[283px] md:mt-0 mt-[327px] p-[15px] w-[10%] md:w-full">
                <div className="bg-teal-200 h-5 my-[3px] w-5"></div>
                <Text
                  className="ml-[5px] text-[13px] text-teal-200"
                  size="txtInterMedium13Teal200"
                >
                  Feedback
                </Text>
              </div>
            </div>
            <Img
              className="h-36 sm:h-auto mt-[139px] object-cover w-full"
              src="images/img_frame4.png"
              alt="frameFour"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
