import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";

const listViewOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FrameFourteenPage = () => {
  return (
    <>
      <div className="border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto p-[26px] sm:px-5 w-full">
        <div className="flex flex-col items-end justify-start max-w-[1511px] mb-[98px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-4 items-center justify-end w-2/5 md:w-full">
            <div className="h-5 relative w-[3%] md:w-full">
              <div className="absolute border border-black-900 border-solid h-[18px] inset-[0] justify-center m-auto rounded-[50%] w-[18px]"></div>
              <Text
                className="absolute h-full inset-y-[0] my-auto right-[22%] text-base text-black-900"
                size="txtInterMedium16"
              >
                ?
              </Text>
            </div>
            <SelectBox
              className="border border-black-900 border-solid font-medium leading-[normal] pl-[18px] sm:pr-5 pr-[25px] py-3.5 rounded-[25px] text-[17px] text-black-900 text-left w-[23%] md:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-[5px] mr-[0] outline-black-900 outline-[1px] outline w-[11px]"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="groupSixtyTwo"
              options={listViewOptionsList}
              isSearchable={false}
              placeholder="List view"
            />
            <div className="border border-black-900 border-solid flex flex-col items-start justify-start p-1 rounded-[25px] w-[70%] md:w-full">
              <Button className="border border-black-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[115px] py-[11px] rounded-[21px] text-[17px] text-black-900 text-center">
                Tokens
              </Button>
            </div>
          </div>
          <Line className="bg-black-900 h-px mt-[101px] w-full" />
          <div className="border border-black-900 border-solid h-[49px] mt-[184px] rounded-[24px] w-[8%]"></div>
        </div>
      </div>
    </>
  );
};

export default FrameFourteenPage;
