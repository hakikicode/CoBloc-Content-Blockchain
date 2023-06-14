import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import Header2 from "components/Header2";
import Valiacc from "components/Valiacc";

const BrowsecreatorsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header2 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-gradient  flex flex-col items-start justify-end p-[27px] sm:px-5 w-full">
              <div className="flex flex-col justify-start md:ml-[0] ml-[148px] mt-2 md:px-5 w-[74%] md:w-full">
                <Text
                  className="sm:text-[44px] md:text-[50px] text-[58px] text-black-900_02"
                  size="txtInterSemiBold58Black90002"
                >
                  Hi User
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[17px] mt-[91px] w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-row gap-[18px] items-start justify-between w-full">
                      <div className="flex flex-col gap-2 items-center justify-start w-[23%]">
                        <Img
                          className="h-[53px] md:h-auto object-cover w-[53px]"
                          src="images/img_image1343.png"
                          alt="image1343"
                        />
                        <div className="backdrop-opacity-[0.5] bg-black-900_7c blur-[5.00px] h-1 rounded-[13px] w-1/2"></div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-black-900_02 text-xl w-auto"
                          size="txtInterMedium20Black90002"
                        >
                          Available Tokens
                        </Text>
                        <Text
                          className="sm:text-[35px] md:text-[37px] text-[39px] text-black-900_02"
                          size="txtInterMedium39Black90002"
                        >
                          82
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[158px] w-auto">
                    <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[18px] items-center justify-start w-[19%]">
                        <Img
                          className="h-[43px] md:h-auto object-cover w-[47px] sm:w-full"
                          src="images/img_group29.png"
                          alt="groupTwentyNine"
                        />
                        <div className="backdrop-opacity-[0.5] bg-black-900_7c blur-[5.00px] h-1 rounded-[13px] w-[56%]"></div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-black-900_02 text-xl w-auto"
                          size="txtInterMedium20Black90002"
                        >
                          Give Tokens
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <Text
                            className="sm:text-[35px] md:text-[37px] text-[39px] text-black-900_02 w-auto"
                            size="txtInterMedium39Black90002"
                          >
                            1268
                          </Text>
                          <Text
                            className="text-[13px] text-black-900_02"
                            size="txtInterMedium13Black90002"
                          >
                            <>
                              Donating on
                              <br />
                              Jun 30, 2023
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[167px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[121px] w-[44%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-1/4">
                          <Img
                            className="h-[53px] md:h-auto object-cover w-[53px]"
                            src="images/img_image1025.png"
                            alt="image1025"
                          />
                          <div className="backdrop-opacity-[0.5] bg-black-900_7c blur-[5.00px] h-1 rounded-[13px] w-1/2"></div>
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                          <Text
                            className="text-black-900_02 text-xl w-auto"
                            size="txtInterMedium20Black90002"
                          >
                            Today’s Tokens
                          </Text>
                          <Text
                            className="sm:text-[35px] md:text-[37px] text-[39px] text-black-900_02 w-auto"
                            size="txtInterMedium39Black90002"
                          >
                            1,410
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-[28%]">
                          <Img
                            className="h-[53px] md:h-auto object-cover w-[53px]"
                            src="images/img_image1367.png"
                            alt="image1367"
                          />
                          <div className="backdrop-opacity-[0.5] bg-black-900_7c blur-[5.00px] h-1 rounded-[13px] w-1/2"></div>
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                          <Text
                            className="text-black-900_02 text-xl w-auto"
                            size="txtInterMedium20Black90002"
                          >
                            Streak count
                          </Text>
                          <Text
                            className="sm:text-[35px] md:text-[37px] text-[39px] text-black-900_02 w-auto"
                            size="txtInterMedium39Black90002"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[88px] mt-[25px] w-[92%] md:w-full">
                  <Text
                    className="md:mt-0 mt-1 text-base text-green-800"
                    size="txtInterMedium16Green800"
                  >
                    Swap
                  </Text>
                  <div className="bg-teal-900 flex flex-row items-center justify-center md:ml-[0] ml-[331px] p-1 rounded-[13px] w-[6%] md:w-full">
                    <Text
                      className="ml-0.5 text-[13px] text-white-A700"
                      size="txtInterMedium13WhiteA700"
                    >
                      GIVE
                    </Text>
                    <div className="bg-gray-600 h-[18px] mx-0.5 rounded-[50%] w-[18px]"></div>
                  </div>
                  <Text
                    className="ml-5 md:ml-[0] md:mt-0 mt-1 text-base text-green-800"
                    size="txtInterMedium16Green800"
                  >
                    Manage giving
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[205px] md:mt-0 mt-[3px] text-base text-green-800"
                    size="txtInterMedium16Green800"
                  >
                    Token breakdown
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[250px] md:mt-0 mt-1 text-base text-green-800"
                    size="txtInterMedium16Green800"
                  >
                    Today’s Set
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[45px] items-center justify-center md:ml-[0] ml-[584px] mt-[33px] md:px-5 w-auto md:w-full">
              <Button className="bg-teal-900 cursor-pointer font-medium leading-[normal] min-w-[156px] py-4 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                Partnerships
              </Button>
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
              <Text
                className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                size="txtInterMedium22Gray50001"
                onClick={() => navigate("/dashboardanalyticsbrands")}
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
            <div className="flex md:flex-col flex-row gap-8 items-start justify-end md:ml-[0] ml-[278px] mt-10 md:px-5 w-4/5 md:w-full">
              <div className="sm:h-[1106px] h-[1112px] md:h-[1987px] relative w-[90%] md:w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start my-auto pl-[11px] py-[11px] right-[9%] w-[72%]"
                  style={{ backgroundImage: "url('images/img_group87.svg')" }}
                >
                  <div className="flex flex-col gap-11 justify-start mb-[19px] w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <Text
                        className="text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        TIKTOK
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[137px] text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        PARTICIPATION
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[124px] text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        STATUS
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[149px] text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        RATE
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[158px] text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        DOCUMENTS
                      </Text>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[63px] items-start justify-start ml-3.5 md:ml-[0] w-[99%] md:w-full">
                      <List
                        className="flex flex-col gap-[46px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[117px] items-center justify-between my-0 w-auto md:w-full">
                          <Text
                            className="text-[15px] text-black-900_02 w-auto"
                            size="txtInterMedium15Black90002"
                          >
                            2.32%
                          </Text>
                          <div className="flex md:flex-col flex-row md:gap-10 gap-[87px] h-[73px] md:h-auto items-center justify-start max-w-[776px] w-full">
                            <div className="bg-deep_purple-50 border-2 border-deep_purple-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[102px]">
                              <Img
                                className="h-[18px] md:h-auto object-cover w-[18px]"
                                src="images/img_time.png"
                                alt="time"
                              />
                              <Text
                                className="text-[15px] text-deep_purple-300 w-auto"
                                size="txtInterMedium15Deeppurple300"
                              >
                                Awaiting
                              </Text>
                            </div>
                            <div className="bg-blue_gray-50 border border-blue_gray-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[111px]">
                              <Img
                                className="h-[18px] md:h-auto object-cover w-[18px]"
                                src="images/img_ok.png"
                                alt="ok"
                              />
                              <Text
                                className="text-[15px] text-blue_gray-400 w-auto"
                                size="txtInterMedium15Bluegray400"
                              >
                                Brief Sent
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                              <Text
                                className="text-[15px] text-black-900_02 w-auto"
                                size="txtInterMedium15Black90002"
                              >
                                CAD
                              </Text>
                              <Text
                                className="text-[15px] text-black-900_02 w-auto"
                                size="txtInterMedium15Black90002"
                              >
                                400.00
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[17px] items-center justify-start w-auto">
                              <Img
                                className="h-[37px] md:h-auto object-cover w-[37px]"
                                src="images/img_pdf.png"
                                alt="pdf"
                              />
                              <Text
                                className="text-[15px] text-black-900_02 w-auto"
                                size="txtInterMedium15Black90002"
                              >
                                Brief_contentcreator.pdf
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between mr-[104px] my-0 w-[89%] md:w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[111px] items-center justify-between w-auto md:w-full">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              3.21%
                            </Text>
                            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[66px] items-center justify-start w-auto sm:w-full">
                              <div className="bg-gray-100 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[115px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_facebooklike.png"
                                  alt="facebooklike"
                                />
                                <Text
                                  className="text-[15px] text-teal-200_01 w-auto"
                                  size="txtInterMedium15Teal20001"
                                >
                                  Confirmed
                                </Text>
                              </div>
                              <div className="bg-gray-300 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[150px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_edit_18x18.png"
                                  alt="edit"
                                />
                                <Text
                                  className="text-[15px] text-gray-500_02 w-auto"
                                  size="txtInterMedium15Gray50002"
                                >
                                  contract signed
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  CAD
                                </Text>
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  550.00
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[17px] items-center justify-start w-auto">
                            <div className="h-[37px] relative w-[37px]">
                              <Img
                                className="h-[37px] m-auto object-cover w-[37px]"
                                src="images/img_file.png"
                                alt="file"
                              />
                              <Img
                                className="absolute bottom-[19%] h-[18px] inset-x-[0] mx-auto object-cover w-[18px]"
                                src="images/img_attach.png"
                                alt="attach"
                              />
                            </div>
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              2 files
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[95px] items-center justify-start mr-[47px] my-0 w-[95%] md:w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[117px] items-center justify-between w-auto md:w-full">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              1.98%
                            </Text>
                            <div className="flex flex-row gap-[107px] items-center justify-between w-auto sm:w-full">
                              <div className="bg-deep_purple-50 border-2 border-deep_purple-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[102px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_time.png"
                                  alt="time"
                                />
                                <Text
                                  className="text-[15px] text-deep_purple-300 w-auto"
                                  size="txtInterMedium15Deeppurple300"
                                >
                                  Awaiting
                                </Text>
                              </div>
                              <div className="bg-blue-50 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[75px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_image1359.png"
                                  alt="image1359"
                                />
                                <Text
                                  className="text-[15px] text-indigo-400 w-auto"
                                  size="txtInterMedium15Indigo400"
                                >
                                  New
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  CAD
                                </Text>
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  600.00
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[17px] items-center justify-start w-auto">
                            <Img
                              className="h-[37px] md:h-auto object-cover w-[37px]"
                              src="images/img_xls.png"
                              alt="xls"
                            />
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              Schedule_creator.xlsx
                            </Text>
                          </div>
                        </div>
                      </List>
                      <List
                        className="flex flex-col gap-[86px] w-[92%]"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[117px] items-center justify-between w-auto md:w-full">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              1.98%
                            </Text>
                            <div className="flex flex-row gap-[107px] items-center justify-between w-auto sm:w-full">
                              <div className="bg-deep_purple-50 border-2 border-deep_purple-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[102px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_time.png"
                                  alt="time"
                                />
                                <Text
                                  className="text-[15px] text-deep_purple-300 w-auto"
                                  size="txtInterMedium15Deeppurple300"
                                >
                                  Awaiting
                                </Text>
                              </div>
                              <div className="bg-blue-50 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[75px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_image1359.png"
                                  alt="image1359"
                                />
                                <Text
                                  className="text-[15px] text-indigo-400 w-auto"
                                  size="txtInterMedium15Indigo400"
                                >
                                  New
                                </Text>
                              </div>
                              <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  +
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              +
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[117px] items-center justify-between w-auto md:w-full">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              1.98%
                            </Text>
                            <div className="flex flex-row gap-[107px] items-center justify-between w-auto sm:w-full">
                              <div className="bg-deep_purple-50 border-2 border-deep_purple-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[102px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_time.png"
                                  alt="time"
                                />
                                <Text
                                  className="text-[15px] text-deep_purple-300 w-auto"
                                  size="txtInterMedium15Deeppurple300"
                                >
                                  Awaiting
                                </Text>
                              </div>
                              <div className="bg-blue-50 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[75px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_image1359.png"
                                  alt="image1359"
                                />
                                <Text
                                  className="text-[15px] text-indigo-400 w-auto"
                                  size="txtInterMedium15Indigo400"
                                >
                                  New
                                </Text>
                              </div>
                              <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  +
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              +
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[117px] items-center justify-between w-auto md:w-full">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              1.98%
                            </Text>
                            <div className="flex flex-row gap-[107px] items-center justify-between w-auto sm:w-full">
                              <div className="bg-deep_purple-50 border-2 border-deep_purple-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[102px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_time.png"
                                  alt="time"
                                />
                                <Text
                                  className="text-[15px] text-deep_purple-300 w-auto"
                                  size="txtInterMedium15Deeppurple300"
                                >
                                  Awaiting
                                </Text>
                              </div>
                              <div className="bg-blue-50 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[75px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_image1359.png"
                                  alt="image1359"
                                />
                                <Text
                                  className="text-[15px] text-indigo-400 w-auto"
                                  size="txtInterMedium15Indigo400"
                                >
                                  New
                                </Text>
                              </div>
                              <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  +
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              +
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[117px] items-center justify-between w-auto md:w-full">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              1.98%
                            </Text>
                            <div className="flex flex-row gap-[107px] items-center justify-between w-auto sm:w-full">
                              <div className="bg-deep_purple-50 border-2 border-deep_purple-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[102px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_time.png"
                                  alt="time"
                                />
                                <Text
                                  className="text-[15px] text-deep_purple-300 w-auto"
                                  size="txtInterMedium15Deeppurple300"
                                >
                                  Awaiting
                                </Text>
                              </div>
                              <div className="bg-blue-50 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[75px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_image1359.png"
                                  alt="image1359"
                                />
                                <Text
                                  className="text-[15px] text-indigo-400 w-auto"
                                  size="txtInterMedium15Indigo400"
                                >
                                  New
                                </Text>
                              </div>
                              <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  +
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              +
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[117px] items-center justify-between w-auto md:w-full">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              1.98%
                            </Text>
                            <div className="flex flex-row gap-[107px] items-center justify-between w-auto sm:w-full">
                              <div className="bg-deep_purple-50 border-2 border-deep_purple-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[102px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_time.png"
                                  alt="time"
                                />
                                <Text
                                  className="text-[15px] text-deep_purple-300 w-auto"
                                  size="txtInterMedium15Deeppurple300"
                                >
                                  Awaiting
                                </Text>
                              </div>
                              <div className="bg-blue-50 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[75px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_image1359.png"
                                  alt="image1359"
                                />
                                <Text
                                  className="text-[15px] text-indigo-400 w-auto"
                                  size="txtInterMedium15Indigo400"
                                >
                                  New
                                </Text>
                              </div>
                              <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  +
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              +
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[117px] items-center justify-between w-auto md:w-full">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              1.98%
                            </Text>
                            <div className="flex flex-row gap-[107px] items-center justify-between w-auto sm:w-full">
                              <div className="bg-deep_purple-50 border-2 border-deep_purple-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[102px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_time.png"
                                  alt="time"
                                />
                                <Text
                                  className="text-[15px] text-deep_purple-300 w-auto"
                                  size="txtInterMedium15Deeppurple300"
                                >
                                  Awaiting
                                </Text>
                              </div>
                              <div className="bg-blue-50 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[75px]">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_image1359.png"
                                  alt="image1359"
                                />
                                <Text
                                  className="text-[15px] text-indigo-400 w-auto"
                                  size="txtInterMedium15Indigo400"
                                >
                                  New
                                </Text>
                              </div>
                              <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                                <Text
                                  className="text-[15px] text-black-900_02 w-auto"
                                  size="txtInterMedium15Black90002"
                                >
                                  +
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border border-black-900_02 border-dashed flex flex-col h-[29px] md:h-auto items-center justify-center sm:px-5 px-[37px] rounded-lg w-auto">
                            <Text
                              className="text-[15px] text-black-900_02 w-auto"
                              size="txtInterMedium15Black90002"
                            >
                              +
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <Line className="absolute bg-gray-400 h-0.5 inset-x-[0] mx-auto top-[4%] w-full" />
                <Line className="absolute bg-gray-400 h-0.5 inset-x-[0] mx-auto top-[15%] w-full" />
                <Line className="absolute bg-gray-400 h-0.5 inset-x-[0] mx-auto top-1/4 w-full" />
                <Line className="absolute bg-gray-400 h-0.5 inset-x-[0] mx-auto top-[36%] w-full" />
                <Line className="absolute bg-gray-400 h-0.5 inset-x-[0] mx-auto top-[47%] w-full" />
                <Line className="absolute bg-gray-400 bottom-[43%] h-0.5 inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-gray-400 bottom-[32%] h-0.5 inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-gray-400 bottom-[21%] h-0.5 inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-gray-400 bottom-[11%] h-0.5 inset-x-[0] mx-auto w-full" />
                <CheckBox
                  className="font-medium leading-[normal] text-[19px] text-black-900_02 text-left"
                  inputClassName="absolute border border-black-900_02 border-solid h-6 mr-[5px] rounded w-6"
                  name="creator"
                  id="creator"
                  label="creator"
                ></CheckBox>
                <Text
                  className="absolute right-[3%] text-black-900_02 text-xs top-[1%]"
                  size="txtInterMedium12"
                >
                  ACTION
                </Text>
                <div className="absolute flex flex-row gap-[15px] items-center justify-between left-[0] top-[7%] w-[255px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="bg-gray-200 flex flex-col h-[60px] items-center justify-start p-[5px] rounded-[50%] w-[60px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      content creator
                    </Text>
                    <div className="flex flex-col items-start justify-start w-[21px]">
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[15px] items-center justify-between left-[0] top-[17%] w-[255px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="bg-blue_gray-100 flex flex-col h-[60px] items-center justify-start p-1 rounded-[50%] w-[60px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      content creator
                    </Text>
                    <Input
                      name="frame142"
                      placeholder=""
                      className="p-0 sm:pr-5 w-full"
                      wrapClassName="flex pr-[26px] w-[52%]"
                      prefix={
                        <Img
                          className="h-[21px] mr-[35px] my-auto"
                          src="images/img_instagram.png"
                          alt="instagram"
                        />
                      }
                      suffix={
                        <div className="mt-0.5 mb-px ml-[26px] sm:w-full sm:mx-0 w-[15%] bg-blue-400">
                          <Img
                            className="my-auto"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[15px] items-center justify-between left-[0] top-[28%] w-[255px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="bg-blue_gray-100 flex flex-col h-[60px] items-center justify-start p-[5px] rounded-[50%] w-[60px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      content creator
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <Valiacc className="flex flex-col h-[21px] items-center justify-end w-[21px]" />
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_snapchat.svg"
                        alt="snapchat"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[15px] items-center justify-between left-[0] top-[39%] w-[255px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="bg-blue_gray-100 flex flex-col h-[60px] items-center justify-start p-[5px] rounded-[50%] w-[60px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      content creator
                    </Text>
                    <Input
                      name="frameThirtyOne"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex w-[34%]"
                      prefix={
                        <Img
                          className="h-[21px] mr-[26px] my-auto"
                          src="images/img_facebook.png"
                          alt="Facebook"
                        />
                      }
                      suffix={
                        <div className="h-[21px] ml-[26px] w-[21px] bg-white-A700 rounded-[10px]">
                          <Img
                            className="h-[21px] my-auto"
                            src="images/img_whatsapp.svg"
                            alt="whatsapp"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
                <div className="absolute bottom-[45%] flex flex-row gap-[15px] items-center justify-between left-[0] w-[255px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="bg-blue_gray-100 flex flex-col h-[60px] items-center justify-start p-[5px] rounded-[50%] w-[60px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      content creator
                    </Text>
                    <Input
                      name="frameThirtyOne_One"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex w-[34%]"
                      prefix={
                        <Img
                          className="h-[21px] mr-[26px] my-auto"
                          src="images/img_snapchat.svg"
                          alt="snapchat"
                        />
                      }
                      suffix={
                        <div className="h-[21px] ml-[26px] w-[21px] bg-white-A700 rounded-[10px]">
                          <Img
                            className="h-[21px] my-auto"
                            src="images/img_whatsapp.svg"
                            alt="whatsapp"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
                <div className="absolute bottom-[34%] flex flex-row gap-[15px] items-center justify-between left-[0] w-[255px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="bg-blue_gray-100 flex flex-col h-[60px] items-center justify-start p-[5px] rounded-[50%] w-[60px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      content creator
                    </Text>
                    <Input
                      name="frameThirtyOne_Two"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex w-[34%]"
                      prefix={
                        <Img
                          className="h-[21px] mr-[26px] my-auto"
                          src="images/img_youtube.svg"
                          alt="youtube"
                        />
                      }
                      suffix={
                        <Img
                          className="h-[21px] ml-[26px] my-auto"
                          src="images/img_instagram.png"
                          alt="instagram"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="absolute bottom-[23%] flex flex-row gap-[15px] items-center justify-between left-[0] w-[255px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="bg-blue_gray-100 flex flex-col h-[60px] items-center justify-start p-[5px] rounded-[50%] w-[60px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      content creator
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <Valiacc className="flex flex-col h-[21px] items-center justify-end w-[21px]" />
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_youtube.svg"
                        alt="youtube_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[12%] flex flex-row gap-[15px] items-center justify-between left-[0] w-[255px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="bg-blue_gray-100 flex flex-col h-[60px] items-center justify-start p-[5px] rounded-[50%] w-[60px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      content creator
                    </Text>
                    <Input
                      name="frameThirtyOne_Three"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex w-[34%]"
                      prefix={
                        <Img
                          className="h-[21px] mr-[26px] my-auto"
                          src="images/img_tiktok.svg"
                          alt="tiktok"
                        />
                      }
                      suffix={
                        <Img
                          className="h-[21px] ml-[26px] my-auto"
                          src="images/img_youtube.svg"
                          alt="youtube"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="absolute bottom-[2%] flex flex-row gap-[15px] items-center justify-between left-[0] w-[255px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="bg-blue_gray-100 flex flex-col h-[60px] items-center justify-start p-[5px] rounded-[50%] w-[60px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      content creator
                    </Text>
                    <Input
                      name="frameThirtyOne_Four"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex w-[34%]"
                      prefix={
                        <Img
                          className="h-[21px] mr-[26px] my-auto"
                          src="images/img_tiktok.svg"
                          alt="tiktok"
                        />
                      }
                      suffix={
                        <Img
                          className="h-[21px] ml-[26px] my-auto"
                          src="images/img_youtube.svg"
                          alt="youtube"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <Img
                  className="absolute h-[53px] right-[2%] rounded-lg top-[39%] w-[52px]"
                  src="images/img_action.svg"
                  alt="action_One"
                />
                <Img
                  className="absolute bottom-[45%] h-[53px] right-[2%] rounded-lg w-[52px]"
                  src="images/img_action.svg"
                  alt="action_Two"
                />
                <Img
                  className="absolute bottom-[34%] h-[53px] right-[2%] rounded-lg w-[52px]"
                  src="images/img_action.svg"
                  alt="action_Three"
                />
                <Img
                  className="absolute bottom-[24%] h-[53px] right-[2%] rounded-lg w-[52px]"
                  src="images/img_action.svg"
                  alt="action_Four"
                />
                <Img
                  className="absolute bottom-[13%] h-[53px] right-[2%] rounded-lg w-[52px]"
                  src="images/img_action.svg"
                  alt="action_Five"
                />
                <Img
                  className="absolute bottom-[2%] h-[53px] right-[2%] rounded-lg w-[52px]"
                  src="images/img_action.svg"
                  alt="action_Six"
                />
                <Img
                  className="absolute h-[53px] right-[2%] rounded-lg top-[27%] w-[52px]"
                  src="images/img_action.svg"
                  alt="action_Seven"
                />
                <Img
                  className="absolute h-[53px] right-[2%] rounded-lg top-[18%] w-[52px]"
                  src="images/img_action.svg"
                  alt="action_Eight"
                />
                <Img
                  className="absolute h-[53px] right-[2%] rounded-lg top-[7%] w-[52px]"
                  src="images/img_action.svg"
                  alt="action_Nine"
                />
              </div>
              <div className="bg-teal-900 flex flex-row items-center justify-start mb-[711px] md:mt-0 mt-[345px] p-[15px] w-[9%] md:w-full">
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
              className="h-36 sm:h-auto mt-[119px] object-cover w-full"
              src="images/img_frame4.png"
              alt="frameFour"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowsecreatorsPage;
