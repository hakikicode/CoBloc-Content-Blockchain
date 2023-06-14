import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
} from "components";
import Header1 from "components/Header1";
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
const y9B965Rr30QOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const chainlinkOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const verseOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectATokenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const advancedOptionsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardAnalyticscreatorsPage = () => {
  const navigate = useNavigate();

  const [framesixtyfourvalue, setFramesixtyfourvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header1 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="h-[1517px] md:h-[4169px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-end justify-start m-auto p-[25px] sm:px-5 w-full">
            <div className="flex flex-col gap-[50px] justify-start mb-[254px] mt-[18px] w-[92%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[91%] md:w-full">
                <div className="flex flex-col gap-[15px] justify-start md:mt-0 mt-[130px] w-[8%] md:w-full">
                  <CheckBox
                    className="font-medium leading-[normal] mr-[23px] text-base text-black-900 text-left"
                    inputClassName="bg-white-A700 border-2 border-black-900 border-solid h-[25px] mr-[5px] rounded-md w-[25px]"
                    name="portfolio"
                    id="portfolio"
                    label="Portfolio"
                  ></CheckBox>
                  <div className="flex flex-row gap-[23px] items-center justify-between md:ml-[0] ml-[9px] w-[93%] md:w-full">
                    <Button className="bg-light_blue-A700 flex h-10 items-center justify-center p-[7px] rounded-[50%] w-10">
                      <Img src="images/img_rewind.svg" alt="rewind" />
                    </Button>
                    <Text
                      className="text-base text-black-900"
                      size="txtInterMedium16"
                    >
                      VERSE
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[71px] justify-start mb-[33px] w-[72%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[45px] items-center justify-center mr-[437px] w-auto md:w-full">
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
                    <Text
                      className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                      size="txtInterMedium22Gray50001"
                      onClick={() => navigate("/swapcreators")}
                    >
                      Swap
                    </Text>
                    <Button className="bg-teal-900 cursor-pointer font-medium leading-[normal] min-w-[261px] py-4 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                      Analytics Dashboard
                    </Button>
                    <Text
                      className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                      size="txtInterMedium22Gray50001"
                      onClick={() => navigate("/dashboardwatchlistcreators")}
                    >
                      Watchlist
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[15px] items-center justify-end md:ml-[0] ml-[492px] w-[57%] md:w-full">
                    <Input
                      name="frameSixtyFour"
                      placeholder="Search for a token..."
                      value={framesixtyfourvalue}
                      onChange={(e) => setFramesixtyfourvalue(e)}
                      className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pr-5 text-base text-gray-500_01 text-left w-full"
                      wrapClassName="border border-gray-500_01 border-solid flex pb-[9px] pl-5 pr-[35px] pt-[13px] rounded-[23px] w-[58%] md:w-full"
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
                      className="border border-gray-500_01 border-solid font-semibold leading-[normal] pl-[11px] sm:pr-5 pr-[23px] py-[11px] rounded-[23px] text-base text-black-900_02 text-left w-[21%] md:w-full"
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
                      className="border border-gray-500_01 border-solid leading-[normal] pl-[11px] sm:pr-5 pr-[23px] py-[9px] rounded-[23px] text-[19px] text-black-900_02 text-left w-[18%] md:w-full"
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
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[9px] w-full">
                <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start w-[61%] md:w-full">
                  <div className="md:h-[1258px] h-[719px] sm:h-[789px] relative w-full">
                    <Img
                      className="h-[227px] ml-auto mr-[31px] mt-[193px]"
                      src="images/img_vector20.svg"
                      alt="vectorTwenty"
                    />
                    <div className="absolute bg-white-A700 border border-black-900_01 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[21px] w-full">
                      <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-[22px] w-full">
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[99%] md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-1 md:ml-[0] w-full">
                            <Text
                              className="md:mt-0 mt-1 text-3xl sm:text-[26px] md:text-[28px] text-black-900_02"
                              size="txtInterBold30Black90002"
                            >
                              $100.00
                            </Text>
                            <Button className="bg-green-300 cursor-pointer font-semibold h-[29px] leading-[normal] mb-3 md:ml-[0] ml-[553px] py-1 rounded-lg text-base text-center text-white-A700 w-14">
                              1D
                            </Button>
                            <Button className="bg-gray-200 cursor-pointer font-semibold h-[29px] leading-[normal] mb-3 md:ml-[0] ml-[17px] py-1 rounded-lg text-base text-center text-gray-500_01 w-14">
                              1W
                            </Button>
                            <Button className="bg-gray-200 cursor-pointer font-semibold h-[29px] leading-[normal] mb-3 md:ml-[0] ml-[17px] py-1 rounded-lg text-base text-center text-gray-500_01 w-14">
                              1M
                            </Button>
                            <Button className="bg-gray-200 cursor-pointer font-semibold h-[29px] leading-[normal] mb-3 md:ml-[0] ml-[17px] py-1 rounded-lg text-base text-center text-gray-500_01 w-14">
                              1Y
                            </Button>
                          </div>
                          <div className="flex flex-row gap-[9px] items-start justify-start w-[23%] md:w-full">
                            <Text
                              className="text-[19px] text-green-300"
                              size="txtInterRegular19"
                            >
                              +$0.00
                            </Text>
                            <Text
                              className="text-[19px] text-green-300"
                              size="txtInterRegular19"
                            >
                              (+7.55%)
                            </Text>
                            <Text
                              className="text-[19px] text-black-900_02"
                              size="txtInterRegular19Black90002"
                            >
                              Today
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="md:h-72 h-[292px] relative w-full">
                            <div className="absolute flex inset-[0] justify-center m-auto w-full">
                              <div className="flex flex-col items-center justify-start my-auto w-[7%]">
                                <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                                  <Text
                                    className="text-base text-gray-500_01"
                                    size="txtInterMedium16Gray50001"
                                  >
                                    0.00056
                                  </Text>
                                  <Text
                                    className="text-base text-gray-500_01"
                                    size="txtInterMedium16Gray50001"
                                  >
                                    0.00054
                                  </Text>
                                  <Text
                                    className="text-base text-gray-500_01"
                                    size="txtInterMedium16Gray50001"
                                  >
                                    0.00052
                                  </Text>
                                  <Text
                                    className="text-base text-gray-500_01"
                                    size="txtInterMedium16Gray50001"
                                  >
                                    0.00050
                                  </Text>
                                  <Text
                                    className="text-base text-gray-500_01"
                                    size="txtInterMedium16Gray50001"
                                  >
                                    0.00048
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-[272px] ml-[-2.5px] my-auto z-[1]"
                                src="images/img_vector16.svg"
                                alt="vectorSixteen"
                              />
                            </div>
                            <Valiacc
                              className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col h-[250px] items-center justify-start pb-[23px] right-[0] w-[93%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group60.png')",
                              }}
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[81px] w-[82%] md:w-full">
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtInterMedium16Gray50001"
                            >
                              2AM
                            </Text>
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtInterMedium16Gray50001"
                            >
                              7AM
                            </Text>
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtInterMedium16Gray50001"
                            >
                              12PM
                            </Text>
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtInterMedium16Gray50001"
                            >
                              5PM
                            </Text>
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtInterMedium16Gray50001"
                            >
                              10PM
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[5px] mt-[45px] w-[91%] md:w-full">
                            <div className="flex flex-col gap-[27px] items-start justify-start w-auto">
                              <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                                <Text
                                  className="text-base text-gray-500_01 w-auto"
                                  size="txtInterMedium16Gray50001"
                                >
                                  Market cap
                                </Text>
                                <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                                  <Text
                                    className="text-black-900_02 text-xl w-auto"
                                    size="txtInterSemiBold20Black90002"
                                  >
                                    10.19M
                                  </Text>
                                  <Text
                                    className="text-base text-green-300 w-auto"
                                    size="txtInterMedium16Green300"
                                  >
                                    +7.49%
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="text-base text-gray-500_01 w-auto"
                                size="txtInterMedium16Gray50001"
                              >
                                Day range
                              </Text>
                            </div>
                            <div className="flex flex-col gap-7 items-start justify-start md:ml-[0] ml-[121px] w-auto">
                              <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                                <Text
                                  className="text-base text-gray-500_01 w-auto"
                                  size="txtInterMedium16Gray50001"
                                >
                                  Total volume
                                </Text>
                                <Text
                                  className="text-base text-black-900_02 w-auto"
                                  size="txtInterMedium16Black90002"
                                >
                                  16.53K
                                </Text>
                              </div>
                              <Text
                                className="text-base text-gray-500_01 w-auto"
                                size="txtInterMedium16Gray50001"
                              >
                                All-time low
                              </Text>
                            </div>
                            <div className="flex flex-col gap-7 items-start justify-start md:ml-[0] ml-[149px] w-auto">
                              <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                                <Text
                                  className="text-base text-gray-500_01 w-auto"
                                  size="txtInterMedium16Gray50001"
                                >
                                  Total volume / Market cap
                                </Text>
                                <Text
                                  className="text-base text-black-900_02 w-auto"
                                  size="txtInterMedium16Black90002"
                                >
                                  0.0016
                                </Text>
                              </div>
                              <Text
                                className="text-base text-gray-500_01 w-auto"
                                size="txtInterMedium16Gray50001"
                              >
                                All-time high
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[47px] w-auto">
                              <Text
                                className="text-base text-gray-500_01 w-auto"
                                size="txtInterMedium16Gray50001"
                              >
                                Circulating supply
                              </Text>
                              <Text
                                className="text-base text-black-900_02 w-auto"
                                size="txtInterMedium16Black90002"
                              >
                                18.49B
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[5px] mt-3.5 w-[56%] md:w-full">
                            <div className="flex flex-col gap-2 items-center justify-start w-[43%] sm:w-full">
                              <Img
                                className="h-[5px]"
                                src="images/img_group26.svg"
                                alt="groupTwentySix"
                              />
                              <div className="flex flex-row gap-[134px] items-start justify-between w-auto">
                                <Text
                                  className="text-base text-gray-500_01 w-auto"
                                  size="txtInterMedium16Gray50001"
                                >
                                  $0.00
                                </Text>
                                <Text
                                  className="text-base text-gray-500_01 w-auto"
                                  size="txtInterMedium16Gray50001"
                                >
                                  $0.00
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="ml-5 sm:ml-[0] sm:mt-0 mt-1 text-base text-black-900_02"
                              size="txtInterMedium16Black90002"
                            >
                              $0.00
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[202px] sm:mt-0 mt-1 text-base text-black-900_02"
                              size="txtInterMedium16Black90002"
                            >
                              $0.01
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900_01 border-solid flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[21px] w-full">
                    <div className="flex flex-col gap-9 items-center justify-start my-2.5 w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text
                          className="mt-0.5 text-black-900_02 text-xl"
                          size="txtInterSemiBold20Black90002"
                        >
                          Holdings
                        </Text>
                        <Text
                          className="mb-0.5 text-black-900_02 text-xl"
                          size="txtInterSemiBold20Black90002"
                        >
                          $100.00
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Button className="bg-green-300 flex h-[50px] items-center justify-center md:mt-0 my-0.5 p-[3px] rounded-[50%] w-[50px]">
                          <Img
                            className="h-[42px]"
                            src="images/img_cut.svg"
                            alt="cut"
                          />
                        </Button>
                        <div className="flex flex-col items-center justify-start ml-3.5 md:ml-[0] md:mt-0 mt-[7px]">
                          <Text
                            className="text-base text-black-900_02"
                            size="txtInterSemiBold16Black90002"
                          >
                            Account Address
                          </Text>
                          <Text
                            className="text-base text-gray-200"
                            size="txtInterSemiBold16Gray200"
                          >
                            Account Address
                          </Text>
                        </div>
                        <Button className="bg-gray-200 flex h-[34px] items-center justify-center mb-[13px] md:ml-[0] ml-[51px] md:mt-0 mt-[7px] p-[5px] rounded-[7px] w-[34px]">
                          <Img
                            className="h-6"
                            src="images/img_frame70.svg"
                            alt="frameSeventy"
                          />
                        </Button>
                        <div className="flex flex-col gap-1.5 items-end justify-start md:ml-[0] ml-[574px]">
                          <Text
                            className="text-black-900_02 text-xl"
                            size="txtInterSemiBold20Black90002"
                          >
                            $100.00
                          </Text>
                          <Text
                            className="text-gray-500_01 text-xl"
                            size="txtInterSemiBold20Gray50001"
                          >
                            100 VERSE
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-black-900_01 border-solid flex md:flex-1 flex-col items-center justify-start mb-[124px] p-9 sm:px-5 rounded-[21px] w-[30%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-1.5 mt-[3px] w-full">
                    <div className="border border-black-900 border-solid flex flex-col items-center justify-start p-[15px] rounded-[11px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start mb-[7px] w-[94%] md:w-full">
                        <div className="h-12 md:h-[42px] relative w-[13%]">
                          <Button className="absolute bg-green-300 bottom-[0] flex h-[42px] items-center justify-center p-[3px] right-[0] rounded-[50%] w-[42px]">
                            <Img
                              className="h-9"
                              src="images/img_cut.svg"
                              alt="cut_One"
                            />
                          </Button>
                          <Button className="absolute bg-blue-700 flex h-5 items-center justify-center left-[0] p-[3px] rounded-[50%] top-[0] w-5">
                            <Img src="images/img_user.svg" alt="user" />
                          </Button>
                        </div>
                        <SelectBox
                          className="font-medium leading-[normal] text-base text-black-900 text-left w-[85%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-[5px] mr-[0] outline-gray-900 outline-[1px] outline w-[11px]"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group121"
                          options={y9B965Rr30QOptionsList}
                          isSearchable={false}
                          placeholder="0y9b96...5rr30q"
                        />
                      </div>
                    </div>
                    <SelectBox
                      className="border border-black-900 border-solid font-semibold leading-[normal] mt-[15px] pl-3 sm:pr-5 pr-[22px] py-2 rounded-[23px] text-base text-black-900_02 text-left w-full"
                      placeholderClassName="text-black-900_02"
                      indicator={
                        <Img
                          className="h-[5px] mr-[0] outline-gray-900 outline-[1px] outline w-[11px]"
                          src="images/img_arrowdown_gray_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isSearchable={false}
                      placeholder="Chainlink"
                      getOptionLabel={(e) => (
                        <div className="flex items-center">
                          <Img
                            className="h-[18px] mr-3 rounded-[15px] py-[5px] px-[7px]"
                            src="images/img_user.svg"
                            alt="user"
                          />
                          <span>{e.label}</span>
                        </div>
                      )}
                      name="groupTwenty"
                      isMulti={false}
                      options={chainlinkOptionsList}
                    />
                    <div className="flex flex-row items-start justify-between mt-12 w-full">
                      <Text
                        className="text-black-900_02 text-xl"
                        size="txtInterSemiBold20Black90002"
                      >
                        Swap from
                      </Text>
                      <Text
                        className="mt-1 text-base text-teal-900"
                        size="txtInterSemiBold16Teal900"
                      >
                        Max
                      </Text>
                    </div>
                    <div className="h-[79px] md:h-[97px] mt-[18px] sm:pl-5 pl-[22px] relative w-[418px] sm:w-full">
                      <div className="absolute border border-gray-200 border-solid h-[78px] inset-[0] m-auto rounded-[11px] w-full"></div>
                      <div className="absolute flex flex-row h-full inset-y-[0] items-center justify-start left-[28%] my-auto w-3/5 md:w-full">
                        <Button className="bg-light_blue-A700 flex h-10 items-center justify-center my-[19px] p-[7px] rounded-[50%] w-10">
                          <Img src="images/img_rewind.svg" alt="rewind_One" />
                        </Button>
                        <SelectBox
                          className="font-semibold leading-[normal] ml-[18px] text-black-900_02 text-left text-xl w-[46%] sm:w-full"
                          placeholderClassName="text-black-900_02"
                          indicator={
                            <Img
                              className="h-[7px] mr-[0] outline-gray-900 outline-[1px] outline w-3.5"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group125"
                          options={verseOptionsList}
                          isSearchable={false}
                          placeholder="VERSE"
                        />
                        <Line className="bg-gray-200 h-[79px] ml-7 w-px" />
                        <Text
                          className="ml-8 text-gray-500_01 text-xl"
                          size="txtInterSemiBold20Gray50001"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 md:ml-[0] ml-[396px] mt-[46px] w-6"
                      src="images/img_sort.svg"
                      alt="sort"
                    />
                    <Text
                      className="mt-[9px] text-black-900_02 text-xl"
                      size="txtInterSemiBold20Black90002"
                    >
                      Swap to
                    </Text>
                    <div className="border border-black-900 border-solid flex flex-col items-start justify-start mt-[15px] sm:px-5 px-[25px] py-5 rounded-[11px] w-[418px] sm:w-full">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[99%] md:w-full">
                        <div className="bg-light_blue-A700 h-10 rounded-[50%] w-10"></div>
                        <SelectBox
                          className="font-semibold leading-[normal] text-gray-500_01 text-left text-xl w-[85%] sm:w-full"
                          placeholderClassName="text-gray-500_01"
                          indicator={
                            <Img
                              className="h-[7px] mr-[0] outline-gray-900 outline-[1px] outline w-3.5"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group127"
                          options={selectATokenOptionsList}
                          isSearchable={false}
                          placeholder="Select a token"
                        />
                      </div>
                    </div>
                    <SelectBox
                      className="font-semibold leading-[normal] md:ml-[0] ml-[104px] mt-11 text-green-300 text-left text-xl w-1/2 sm:w-full"
                      placeholderClassName="text-green-300"
                      indicator={
                        <Img
                          className="h-[5px] outline-green-300 outline-[1px] outline w-[11px]"
                          src="images/img_arrowdown_green_300_5x11.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frameSixtySeven"
                      options={advancedOptionsOptionsList}
                      isSearchable={false}
                      placeholder="Advanced Options"
                    />
                    <Button className="bg-gray-200 cursor-pointer font-medium leading-[normal] min-w-[417px] sm:min-w-full mt-[52px] py-3.5 rounded-[23px] text-base text-center text-gray-500_01">
                      Get Quotes
                    </Button>
                    <a
                      href="javascript:"
                      className="md:ml-[0] ml-[143px] mt-[26px] text-base text-green-300"
                    >
                      <Text size="txtInterSemiBold16">Terms of Service</Text>
                    </a>
                  </div>
                </div>
                <div className="bg-teal-900 flex md:flex-1 flex-row items-center justify-start mb-[347px] md:mt-0 mt-[532px] p-[15px] w-[8%] md:w-full">
                  <div className="bg-green-300 h-5 my-[3px] w-5"></div>
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

export default DashboardAnalyticscreatorsPage;
