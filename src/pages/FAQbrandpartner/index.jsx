import React from "react";

import { Img, Text } from "components";

const FAQbrandpartnerPage = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1174px] sm:pl-5 pl-[38px] py-[38px] rounded-lg shadow-bs2 w-full">
          <div className="flex flex-col gap-[34px] items-start justify-center max-w-[1070px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-center justify-start w-auto md:w-full">
              <Text
                className="max-w-[994px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterBold30"
              >
                What if my business partner doesn’t appear in search results
                when I try to add them as a brand partner?
              </Text>
              <Img
                className="h-[11px] w-[5px]"
                src="images/img_vector23.svg"
                alt="vectorTwentyThree"
              />
            </div>
            <Text
              className="text-base text-black-900 w-auto"
              size="txtInterMedium16"
            >
              Inviting brands to join by connecting a wallet
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQbrandpartnerPage;
