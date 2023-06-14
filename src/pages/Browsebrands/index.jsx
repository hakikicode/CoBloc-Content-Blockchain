import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import Header2 from "components/Header2";
import Valiacc from "components/Valiacc";

const BrowsebrandsPage = () => {
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
            <div className="flex md:flex-col flex-row gap-[45px] items-center justify-center md:ml-[0] ml-[629px] mt-[33px] md:px-5 w-auto md:w-full">
              <Button className="bg-teal-900 cursor-pointer font-medium leading-[normal] min-w-[66px] py-4 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                Earn
              </Button>
              <Text
                className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                size="txtInterMedium22Gray50001"
                onClick={() => navigate("/buybrands")}
              >
                Buy
              </Text>
              <Text
                className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                size="txtInterMedium22Gray50001"
                onClick={() => navigate("/swapbrands")}
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
                onClick={() => navigate("/dashboardwatchlistbrands")}
              >
                Watchlist
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-start justify-end md:ml-[0] ml-[278px] mt-10 md:px-5 w-4/5 md:w-full">
              <div className="sm:h-[1107px] h-[1112px] md:h-[1804px] relative w-[90%] md:w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-0.5 right-[9%] w-[72%]"
                  style={{ backgroundImage: "url('images/img_group87.svg')" }}
                >
                  <div className="flex flex-col items-start justify-start mb-[29px] mt-[9px] w-[97%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                      <Text
                        className="text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        FOLLOWERS
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[99px] text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        NEXT PROMO
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[134px] text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        STATUS
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[149px] text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        AVG. PAY
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[135px] text-black-900_02 text-xs"
                        size="txtInterMedium12"
                      >
                        DOCUMENTS
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-[46px] items-center md:ml-[0] ml-[5px] mt-11 w-full"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-36 items-center justify-between w-auto md:w-full">
                        <Text
                          className="text-[15px] text-black-900_02 w-auto"
                          size="txtInterMedium15Black90002"
                        >
                          1k
                        </Text>
                        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[91px] h-[73px] md:h-auto items-center justify-start max-w-[776px] w-full">
                          <div className="bg-deep_purple-50 border-2 border-deep_purple-50 border-solid flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[102px]">
                            <Img
                              className="h-[18px] md:h-auto object-cover w-[18px]"
                              src="images/img_redcircle.png"
                              alt="redcircle"
                            />
                            <Text
                              className="text-[15px] text-deep_purple-300 w-auto"
                              size="txtInterMedium15Deeppurple300"
                            >
                              Live
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
                              Accepted
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
                              Brand_guidelines.pdf
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[90%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[125px] items-center justify-between w-auto md:w-full">
                          <Text
                            className="text-[15px] text-black-900_02 w-auto"
                            size="txtInterMedium15Black90002"
                          >
                            2.5k
                          </Text>
                          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[83px] items-center justify-start w-auto sm:w-full">
                            <div className="bg-gray-100 flex flex-row gap-[5px] h-[34px] md:h-auto items-center justify-center rounded-lg w-[115px]">
                              <Img
                                className="h-[18px] md:h-auto object-cover w-[18px]"
                                src="images/img_calendar_18x18.png"
                                alt="calendar"
                              />
                              <Text
                                className="text-[15px] text-teal-200_01 w-auto"
                                size="txtInterMedium15Teal20001"
                              >
                                7 days
                              </Text>
                            </div>
                            <div className="bg-white-A700 border-2 border-gray-500_01 border-solid flex flex-col items-center justify-center py-2 rounded-lg w-[111px]">
                              <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[18px]"
                                  src="images/img_memo.png"
                                  alt="memo"
                                />
                                <Text
                                  className="text-[15px] text-gray-500_01 w-auto"
                                  size="txtInterMedium15Gray50001"
                                >
                                  Review
                                </Text>
                              </div>
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
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
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
                                src="images/img_horizontalline.png"
                                alt="horizontalline"
                              />
                              <Text
                                className="text-[15px] text-deep_purple-300 w-auto"
                                size="txtInterMedium15Deeppurple300"
                              >
                                NA
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
                            src="images/img_calendar_37x37.png"
                            alt="calendar"
                          />
                          <Text
                            className="text-[15px] text-black-900_02 w-auto"
                            size="txtInterMedium15Black90002"
                          >
                            Schedule_calendar.xlsx
                          </Text>
                        </div>
                      </div>
                    </List>
                    <List
                      className="flex flex-col gap-[86px] md:ml-[0] ml-[5px] mt-[63px] w-[91%]"
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
                                src="images/img_calendar_18x18.png"
                                alt="calendar"
                              />
                              <Text
                                className="text-[15px] text-deep_purple-300 w-auto"
                                size="txtInterMedium15Deeppurple300"
                              >
                                2 weeks
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
                                src="images/img_calendar_18x18.png"
                                alt="calendar"
                              />
                              <Text
                                className="text-[15px] text-deep_purple-300 w-auto"
                                size="txtInterMedium15Deeppurple300"
                              >
                                1 month
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
                                src="images/img_calendar_18x18.png"
                                alt="calendar"
                              />
                              <Text
                                className="text-[15px] text-deep_purple-300 w-auto"
                                size="txtInterMedium15Deeppurple300"
                              >
                                3 days
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
                                src="images/img_redcircle.png"
                                alt="redcircle"
                              />
                              <Text
                                className="text-[15px] text-deep_purple-300 w-auto"
                                size="txtInterMedium15Deeppurple300"
                              >
                                Live
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
                                src="images/img_redcircle.png"
                                alt="redcircle"
                              />
                              <Text
                                className="text-[15px] text-deep_purple-300 w-auto"
                                size="txtInterMedium15Deeppurple300"
                              >
                                Live
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
                                src="images/img_calendar_18x18.png"
                                alt="calendar"
                              />
                              <Text
                                className="text-[15px] text-deep_purple-300 w-auto"
                                size="txtInterMedium15Deeppurple300"
                              >
                                6 days
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
                <div className="absolute flex flex-row gap-[15px] items-center justify-start left-[0] top-[7%] w-[235px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="flex flex-col h-[50px] items-center justify-start w-[50px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      Samsung
                    </Text>
                    <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[15px] items-center justify-start left-[0] top-[17%] w-[235px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="flex flex-col h-[50px] items-center justify-start w-[50px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      Nike
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <div className="md:h-[18px] h-[21px] relative w-[21px]">
                        <Img
                          className="h-[18px] m-auto w-[18px]"
                          src="images/img_user_white_a700.svg"
                          alt="user"
                        />
                        <Img
                          className="absolute h-[11px] inset-[0] justify-center m-auto"
                          src="images/img_download.svg"
                          alt="download"
                        />
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[5px] grid grid-cols-2 w-[65%]"
                        orientation="horizontal"
                      >
                        <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-full" />
                        <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-full" />
                      </List>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[15px] items-center justify-start left-[0] top-[28%] w-[235px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="flex flex-col h-[50px] items-center justify-start w-[50px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      Nestle
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[15px] items-center justify-start left-[0] top-[39%] w-[235px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="flex flex-col h-[50px] items-center justify-start w-[50px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      Microsoft
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                      <div className="flex flex-col items-start justify-start w-[21px]">
                        <Valiacc className="flex flex-col h-[21px] items-center justify-end w-[21px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[46%] flex flex-row gap-[15px] items-center justify-start left-[0] w-[235px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="flex flex-col h-[50px] items-center justify-start w-[50px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      Dominos
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[35%] flex flex-row gap-[15px] items-center justify-start left-[0] w-[235px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="flex flex-col h-[50px] items-center justify-start w-[50px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      Mcdonalds
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[24%] flex flex-row gap-[15px] items-center justify-between left-[0] w-[237px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="flex flex-col h-[50px] items-center justify-start w-[50px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      United Airlines
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-[21px]">
                        <div className="md:h-[18px] h-[21px] relative w-[21px]">
                          <Img
                            className="h-[18px] m-auto w-[18px]"
                            src="images/img_user_white_a700.svg"
                            alt="user_One"
                          />
                          <Img
                            className="absolute h-[11px] inset-[0] justify-center m-auto"
                            src="images/img_download.svg"
                            alt="download_One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[21px]">
                        <Valiacc className="flex flex-col h-[21px] items-center justify-end w-[21px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[13%] flex flex-row gap-[15px] items-center justify-start left-[0] w-[235px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="flex flex-col h-[50px] items-center justify-start w-[50px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      Walmart
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-[21px]">
                        <div className="md:h-[18px] h-[21px] relative w-[21px]">
                          <Img
                            className="h-[18px] m-auto w-[18px]"
                            src="images/img_user_white_a700.svg"
                            alt="user_Two"
                          />
                          <Img
                            className="absolute h-[11px] inset-[0] justify-center m-auto"
                            src="images/img_download.svg"
                            alt="download_Two"
                          />
                        </div>
                      </div>
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[3%] flex flex-row gap-[15px] items-center justify-start left-[0] w-[235px]">
                  <div className="border border-black-900_02 border-solid h-6 rounded w-6"></div>
                  <Valiacc className="flex flex-col h-[50px] items-center justify-start w-[50px]" />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-[19px] text-black-900_02 w-auto"
                      size="txtInterMedium19Black90002"
                    >
                      Tesco
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-[21px]">
                        <div className="md:h-[18px] h-[21px] relative w-[21px]">
                          <Img
                            className="h-[18px] m-auto w-[18px]"
                            src="images/img_user_white_a700.svg"
                            alt="user_Three"
                          />
                          <Img
                            className="absolute h-[11px] inset-[0] justify-center m-auto"
                            src="images/img_download.svg"
                            alt="download_Three"
                          />
                        </div>
                      </div>
                      <Valiacc className="flex flex-col gap-[5px] items-start justify-start w-[21px]" />
                    </div>
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

export default BrowsebrandsPage;
