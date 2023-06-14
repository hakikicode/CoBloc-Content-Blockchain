import React from "react";

import { Button, Img, Text } from "components";

const BrowserextensionPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[428px] items-center justify-start mx-auto pb-[485px] w-full">
        <div className="h-[106px] md:px-5 relative w-full">
          <Img
            className="h-[106px] m-auto object-cover w-full"
            src="images/img_image65.png"
            alt="imageSixtyFive"
          />
          <Button className="absolute bg-teal-900 bottom-[15%] flex h-5 items-center justify-center p-0.5 right-[6%] rounded-[3px] w-5">
            <Img className="h-4" src="images/img_trash.svg" alt="trash" />
          </Button>
        </div>
        <Text
          className="bg-white-A700 h-[61px] justify-center max-w-[905px] md:max-w-full sm:px-5 px-[35px] py-[15px] rounded-[3px] text-2xl md:text-[22px] text-gray-500_01 text-shadow-ts sm:text-xl w-full"
          size="txtInterRegular24"
        >
          Search with DuckDuckGo or enter address
        </Text>
      </div>
    </>
  );
};

export default BrowserextensionPage;
