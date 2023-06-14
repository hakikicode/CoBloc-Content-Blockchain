import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const verseOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const linkOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SwapcreatorsPage = () => {
  const navigate = useNavigate();

  const [framesixtyfourvalue, setFramesixtyfourvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header3 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="h-[1517px] md:h-[2385px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-end justify-start m-auto p-[25px] sm:px-5 w-full">
            <div className="flex flex-col justify-start mb-[268px] mt-[18px] w-[90%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[45px] items-center justify-center md:ml-[0] ml-[398px] w-auto md:w-full">
                <Text
                  className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                  size="txtInterMedium22Gray50001"
                  onClick={() => navigate("/browsebrands")}
                >
                  Earn
                </Text>
                <Text
                  className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                  size="txtInterMedium22Gray50001"
                  onClick={() => navigate("/buycreators")}
                >
                  Buy
                </Text>
                <Button className="bg-teal-900 cursor-pointer font-medium leading-[normal] min-w-[88px] py-4 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                  Swap
                </Button>
                <Text
                  className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                  size="txtInterMedium22Gray50001"
                  onClick={() => navigate("/dashboardanalyticscreators")}
                >
                  Analytics Dashboard
                </Text>
                <Text
                  className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                  size="txtInterMedium22Gray50001"
                  onClick={() => navigate("/dashboardwatchlistcreators")}
                >
                  Watchlist
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mr-[155px] mt-[71px] w-[91%] md:w-full">
                <Text
                  className="md:mt-0 mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02"
                  size="txtInterBold30Black90002"
                >
                  SWAP
                </Text>
                <Input
                  name="frameSixtyFour"
                  placeholder="Search for a token..."
                  value={framesixtyfourvalue}
                  onChange={(e) => setFramesixtyfourvalue(e)}
                  className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pr-5 text-base text-gray-500_01 text-left w-full"
                  wrapClassName="border border-gray-500_01 border-solid flex md:ml-[0] ml-[803px] pb-[9px] pl-5 pr-[35px] pt-[13px] rounded-[23px] w-[24%] md:w-full"
                  prefix={
                    <Img
                      className="mt-px mb-auto cursor-pointer h-6 mr-2.5"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#979797"
                      className="cursor-pointer h-6 my-auto"
                      onClick={() => setFramesixtyfourvalue("")}
                      style={{
                        visibility:
                          framesixtyfourvalue?.length <= 0
                            ? "hidden"
                            : "visible",
                      }}
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  }
                ></Input>
                <SelectBox
                  className="border border-gray-500_01 border-solid font-semibold leading-[normal] md:ml-[0] ml-[15px] pl-[11px] sm:pr-5 pr-[23px] py-[11px] rounded-[23px] text-base text-black-900_02 text-left w-[9%] md:w-full"
                  placeholderClassName="text-black-900_02"
                  indicator={
                    <Img
                      className="h-[5px] mr-[0] outline-gray-900 outline-[1px] outline w-[11px]"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isSearchable={false}
                  placeholder="USD"
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        className="h-6 mr-3 rounded-[12px]"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  name="price"
                  isMulti={false}
                  options={priceOptionsList}
                />
                <SelectBox
                  className="border border-gray-500_01 border-solid leading-[normal] md:ml-[0] ml-[15px] pl-[11px] sm:pr-5 pr-[23px] py-[9px] rounded-[23px] text-[19px] text-black-900_02 text-left w-[8%] md:w-full"
                  placeholderClassName="text-black-900_02"
                  indicator={
                    <Img
                      className="h-[5px] mr-[0] outline-gray-900 outline-[1px] outline w-[11px]"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isSearchable={false}
                  placeholder="18"
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        className="h-[29px] mr-2 w-7"
                        src="images/img_music.svg"
                        alt="music"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  name="frameSixtyTwo"
                  isMulti={false}
                  options={optionsList}
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[465px] mt-[108px] w-[73%] md:w-full">
                <div className="bg-white-A700 flex flex-col h-[896px] md:h-auto items-center justify-start rounded-[20px] shadow-bs4 w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-end p-[9px] w-full">
                    <div className="flex flex-col items-start justify-start mt-8 w-[90%] md:w-full">
                      <div className="border border-gray-500_01 border-solid flex flex-col h-[84px] md:h-auto items-center justify-center py-4 rounded-[11px] w-[480px] sm:w-full">
                        <div className="flex flex-row gap-[151px] items-center justify-start w-[443px] sm:w-full">
                          <div className="flex flex-row gap-[11px] items-center justify-start w-auto">
                            <div className="flex flex-col h-[50px] items-center justify-start p-1 w-[50px]">
                              <Button className="bg-light_blue-A700 flex h-10 items-center justify-center p-[7px] rounded-[50%] w-10">
                                <Img src="images/img_rewind.svg" alt="rewind" />
                              </Button>
                            </div>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtInterSemiBold16Black900"
                            >
                              0x...hadfae
                            </Text>
                            <Text
                              className="text-base text-gray-500_01 w-auto"
                              size="txtInterMedium16Gray50001"
                            >
                              (0x...hadfae)
                            </Text>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowdown_black_900_01.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <SelectBox
                        className="border border-gray-200 border-solid font-medium h-11 leading-[normal] mt-[17px] pl-[11px] pr-4 py-[7px] rounded-[22px] text-base text-black-900_02 text-left w-full"
                        placeholderClassName="text-black-900_02"
                        indicator={
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowdown_black_900_01.svg"
                            alt="arrow_down"
                          />
                        }
                        isSearchable={false}
                        placeholder="Verse"
                        getOptionLabel={(e) => (
                          <div className="flex items-center">
                            <Img
                              className="h-4 mr-2.5 pt-2 pb-[5px] rounded-[15px] px-[5px]"
                              src="images/img_rewind.svg"
                              alt="rewind"
                            />
                            <span>{e.label}</span>
                          </div>
                        )}
                        name="frameNinetyFive"
                        isMulti={false}
                        options={verseOptionsList}
                      />
                      <Text
                        className="mt-12 text-black-900_02 text-xl"
                        size="txtInterSemiBold20Black90002"
                      >
                        Swap from
                      </Text>
                      <div className="border-2 border-gray-200 border-solid flex sm:flex-col flex-row gap-[41px] h-20 md:h-auto items-center justify-start mt-[18px] pl-[15px] py-4 rounded-[11px] w-[480px] sm:w-full">
                        <div className="flex flex-row gap-[47px] items-center justify-start w-[196px]">
                          <div className="flex flex-row gap-[11px] items-center justify-start w-auto">
                            <div className="flex flex-col h-[50px] items-center justify-start p-[5px] w-[50px]">
                              <Button className="bg-light_blue-A700 flex h-[38px] items-center justify-center p-1.5 rounded-[50%] w-[38px]">
                                <Img
                                  src="images/img_rewind.svg"
                                  alt="rewind_Two"
                                />
                              </Button>
                            </div>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtInterSemiBold16Black900"
                            >
                              VERSE
                            </Text>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowdown_black_900_01.svg"
                            alt="arrowdown_One"
                          />
                        </div>
                        <Line className="bg-gray-200 h-[78px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-row gap-[42px] items-center justify-start w-auto">
                          <Text
                            className="text-[19px] text-black-900_02 w-auto"
                            size="txtInterRegular19Black90002"
                          >
                            19927.07
                          </Text>
                          <Text
                            className="text-[19px] text-gray-500_01 w-auto"
                            size="txtInterRegular19Gray50001"
                          >
                            ~$10.00
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[9px] w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-gray-500_01"
                            size="txtInterMedium16Gray50001"
                          >
                            You do not have any available to swap
                          </Text>
                          <Text
                            className="mt-2 text-base text-red-A700_01"
                            size="txtInterMedium16RedA70001"
                          >
                            Insufficient balance
                          </Text>
                          <Text
                            className="mt-[67px] text-black-900_02 text-xl"
                            size="txtInterSemiBold20Black90002"
                          >
                            Swap to
                          </Text>
                        </div>
                        <Img
                          className="h-6 mt-[81px] w-6"
                          src="images/img_sort_gray_500_01.svg"
                          alt="sort"
                        />
                      </div>
                      <SelectBox
                        className="border-2 border-gray-200 border-solid font-semibold h-20 leading-[normal] mt-[13px] pl-[15px] sm:pr-5 pr-[23px] py-[15px] rounded-[11px] text-black-900 text-left text-xl w-full"
                        placeholderClassName="text-black-900"
                        indicator={
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowdown_black_900_01.svg"
                            alt="arrow_down"
                          />
                        }
                        isSearchable={false}
                        placeholder="LINK"
                        getOptionLabel={(e) => (
                          <div className="flex items-center">
                            <Img
                              className="h-[50px] mr-[11px] w-[50px]"
                              src="images/img_television.svg"
                              alt="television"
                            />
                            <span>{e.label}</span>
                          </div>
                        )}
                        name="frameNinetySix"
                        isMulti={false}
                        options={linkOptionsList}
                      />
                      <Text
                        className="mt-[11px] text-base text-gray-500_01 w-full"
                        size="txtInterMedium16Gray50001"
                      >
                        <span className="text-black-900_02 font-inter text-left font-semibold">
                          LINK verified on 15 sources
                        </span>
                        <span className="text-black-900_02 font-inter text-left font-medium">
                          .
                        </span>
                        <span className="text-gray-500_01 font-inter text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-gray-500_01 font-inter text-left font-medium">
                          Always confirm the token address{" "}
                        </span>
                        <span className="text-green-300 font-inter text-left font-medium">
                          on a block explorer.
                        </span>
                      </Text>
                      <div className="flex flex-row gap-[11px] items-center justify-center md:ml-[0] ml-[135px] mt-[35px] w-[45%] md:w-full">
                        <Text
                          className="text-green-300 text-xl"
                          size="txtInterSemiBold20Green300"
                        >
                          Advanced Options
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown_green_300.svg"
                          alt="arrowdown_Two"
                        />
                      </div>
                      <Button className="bg-teal-200 cursor-pointer font-medium leading-[normal] ml-0.5 md:ml-[0] mt-[54px] py-3.5 rounded-[23px] text-base text-center text-white-A700 w-[478px]">
                        Get Quotes
                      </Button>
                      <a
                        href="javascript:"
                        className="md:ml-[0] ml-[175px] mt-[22px] text-base text-green-300"
                      >
                        <Text size="txtInterMedium16Green300">
                          Terms of Service
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-900 flex flex-row items-center justify-start mb-[333px] md:mt-0 mt-[507px] p-[15px] w-[12%] md:w-full">
                  <div className="bg-teal-200 h-5 my-[3px] w-5"></div>
                  <Text
                    className="ml-[5px] text-[13px] text-teal-200"
                    size="txtInterMedium13Teal200"
                  >
                    Feedback
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="absolute bottom-[0] h-36 inset-x-[0] mx-auto object-cover w-full"
            src="images/img_frame4.png"
            alt="frameFour"
          />
        </div>
      </div>
    </>
  );
};

export default SwapcreatorsPage;
