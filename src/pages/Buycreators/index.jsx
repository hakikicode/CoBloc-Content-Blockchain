import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import Header3 from "components/Header3";
import Valiacc from "components/Valiacc";

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

const BuycreatorsPage = () => {
  const navigate = useNavigate();

  const [framesixtyfourvalue, setFramesixtyfourvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header3 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="h-[1517px] md:h-[2031px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-end justify-start m-auto p-[25px] sm:px-5 w-full">
            <div className="flex flex-col justify-start mb-[303px] mt-[18px] w-[90%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[45px] items-center justify-center md:ml-[0] ml-[389px] w-auto md:w-full">
                <Text
                  className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                  size="txtInterMedium22Gray50001"
                  onClick={() => navigate("/browsebrands")}
                >
                  Earn
                </Text>
                <Button className="bg-teal-900 cursor-pointer font-medium leading-[normal] min-w-[68px] py-4 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                  Buy
                </Button>
                <Text
                  className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                  size="txtInterMedium22Gray50001"
                  onClick={() => navigate("/swapcreators")}
                >
                  Swap
                </Text>
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
                  BUY
                </Text>
                <Input
                  name="frameSixtyFour"
                  placeholder="Search for a token..."
                  value={framesixtyfourvalue}
                  onChange={(e) => setFramesixtyfourvalue(e)}
                  className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pr-5 text-base text-gray-500_01 text-left w-full"
                  wrapClassName="border border-gray-500_01 border-solid flex md:ml-[0] ml-[830px] pb-[9px] pl-5 pr-[35px] pt-[13px] rounded-[23px] w-[24%] md:w-full"
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
                <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                  <div className="border border-gray-200 border-solid flex flex-col md:gap-10 gap-[388px] items-center justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start mt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-row gap-[98px] items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowleft.svg"
                          alt="arrowleft"
                        />
                        <Text
                          className="text-black-900_02 text-xl w-auto"
                          size="txtInterSemiBold20Black90002"
                        >
                          Select Payment Method
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[49px] mt-[26px] text-base text-gray-500_01"
                        size="txtInterMedium16Gray50001"
                      >
                        Available payment methods based on your region
                      </Text>
                      <List
                        className="flex flex-col gap-[22px] items-center mt-5 w-full"
                        orientation="vertical"
                      >
                        <div className="border-2 border-gray-200 border-solid flex sm:flex-1 flex-col gap-[11px] h-[122px] md:h-auto items-center justify-start px-3.5 py-4 rounded-[11px] w-[477px] sm:w-full">
                          <div className="flex flex-row gap-[168px] items-start justify-start w-[443px] sm:w-full">
                            <div className="flex flex-row gap-[11px] items-center justify-start w-auto">
                              <Button className="bg-gray-200 flex h-[50px] items-center justify-center p-[13px] rounded-lg w-[50px]">
                                <Img
                                  className="h-6"
                                  src="images/img_car.svg"
                                  alt="car"
                                />
                              </Button>
                              <Text
                                className="text-base text-black-900_02 w-[113px]"
                                size="txtInterSemiBold16Black90002"
                              >
                                Debit or Credit
                              </Text>
                            </div>
                            <Img
                              className="h-[23px] w-20"
                              src="images/img_computer_white_a700.svg"
                              alt="computer"
                            />
                          </div>
                          <div className="flex flex-row gap-[9px] items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_clock_gray_500_01.svg"
                              alt="clock"
                            />
                            <Text
                              className="text-base text-gray-500_01 w-auto"
                              size="txtInterMedium16Gray50001"
                            >
                              5-10 mins{" "}
                            </Text>
                            <div className="bg-gray-500_01 h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-base text-gray-500_01 w-auto"
                              size="txtInterMedium16Gray50001"
                            >
                              $$$ lowest buy limit
                            </Text>
                          </div>
                        </div>
                        <div className="border-2 border-gray-200 border-solid flex sm:flex-1 flex-col gap-[11px] h-[122px] md:h-auto items-center justify-start px-2.5 py-4 rounded-[11px] w-[477px] sm:w-full">
                          <div className="flex flex-row gap-[214px] items-start justify-start w-[443px] sm:w-full">
                            <div className="flex flex-row gap-[11px] items-center justify-start w-auto">
                              <Button className="bg-gray-200 flex h-[50px] items-center justify-center p-[13px] rounded-lg w-[50px]">
                                <Img
                                  className="h-6"
                                  src="images/img_trash_black_900_01.svg"
                                  alt="trash"
                                />
                              </Button>
                              <Text
                                className="text-base text-black-900_02 w-[54px]"
                                size="txtInterSemiBold16Black90002"
                              >
                                Interac
                              </Text>
                            </div>
                            <Valiacc className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-end p-[3px] rounded-sm w-[8%]" />
                          </div>
                          <div className="flex flex-row gap-[7px] items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_ticket.svg"
                              alt="ticket"
                            />
                            <Text
                              className="text-base text-gray-500_01 w-auto"
                              size="txtInterMedium16Gray50001"
                            >
                              Instant
                            </Text>
                            <div className="bg-gray-500_01 h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-base text-gray-500_01 w-auto"
                              size="txtInterMedium16Gray50001"
                            >
                              $$$ highest buy limit
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <Button className="bg-gray-200 cursor-pointer font-medium leading-[normal] mb-0.5 py-3.5 rounded-[23px] text-base text-center text-gray-500_01 w-[500px]">
                      Continue
                    </Button>
                  </div>
                </div>
                <div className="bg-teal-900 border border-solid border-teal-200 flex flex-row items-center justify-start mb-[298px] md:mt-0 mt-[507px] p-[15px] w-[12%] md:w-full">
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

export default BuycreatorsPage;
