import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Switch, Text } from "components";
import Header1 from "components/Header1";
import Valiacc from "components/Valiacc";

const CreatoraccountPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header1 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex flex-col justify-start w-full">
            <div className="bg-gradient  flex flex-col items-start justify-end p-[27px] sm:px-5 w-full">
              <div className="flex flex-col justify-start md:ml-[0] ml-[148px] mt-2 md:px-5 w-[74%] md:w-full">
                <Text
                  className="sm:text-[44px] md:text-[50px] text-[58px] text-black-900"
                  size="txtInterSemiBold58"
                >
                  Hi User
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-[92px] w-[99%] md:w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-[4%] md:w-full">
                    <Img
                      className="h-[53px] md:h-auto object-cover w-[53px]"
                      src="images/img_image1343.png"
                      alt="image1343"
                    />
                    <div className="backdrop-opacity-[0.5] bg-black-900_7c blur-[5.00px] h-1 rounded-[13px] w-1/2"></div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[18px] md:mt-0 mt-[3px]">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterMedium20"
                    >
                      Available tokens
                    </Text>
                    <Text
                      className="sm:text-[35px] md:text-[37px] text-[39px] text-black-900"
                      size="txtInterMedium39"
                    >
                      82
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[164px] md:mt-0 mt-2 w-[4%] md:w-full">
                    <div className="h-[43px] relative w-full">
                      <Img
                        className="h-[43px] m-auto object-cover w-full"
                        src="images/img_group29.png"
                        alt="groupTwentyNine"
                      />
                      <Valiacc
                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto pb-[13px] pr-[13px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group83.svg')",
                        }}
                      />
                    </div>
                    <div className="backdrop-opacity-[0.5] bg-black-900_7c blur-[5.00px] h-1 rounded-[13px] w-[56%]"></div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[22px] md:mt-0 mt-[3px] w-[15%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterMedium20"
                    >
                      Give Tokens
                    </Text>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="sm:text-[35px] md:text-[37px] text-[39px] text-black-900"
                        size="txtInterMedium39"
                      >
                        1268
                      </Text>
                      <Text
                        className="text-[13px] text-black-900"
                        size="txtInterMedium13"
                      >
                        <>
                          Donating on
                          <br />
                          Jun 30, 2023
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[116px] w-[4%] md:w-full">
                    <Img
                      className="h-[53px] md:h-auto object-cover w-[53px]"
                      src="images/img_image1025.png"
                      alt="image1025"
                    />
                    <div className="backdrop-opacity-[0.5] bg-black-900_7c blur-[5.00px] h-1 rounded-[13px] w-1/2"></div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[19px] md:mt-0 mt-[5px]">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterMedium20"
                    >
                      Today’s tokens
                    </Text>
                    <Text
                      className="sm:text-[35px] md:text-[37px] text-[39px] text-black-900"
                      size="txtInterMedium39"
                    >
                      1,410
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[171px] w-[4%] md:w-full">
                    <Img
                      className="h-[53px] md:h-auto object-cover w-[53px]"
                      src="images/img_image1367.png"
                      alt="image1367"
                    />
                    <div className="backdrop-opacity-[0.5] bg-black-900_7c blur-[5.00px] h-1 rounded-[13px] w-1/2"></div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[19px] md:mt-0 mt-[3px]">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterMedium20"
                    >
                      Streak count
                    </Text>
                    <Text
                      className="sm:text-[35px] md:text-[37px] text-[39px] text-black-900"
                      size="txtInterMedium39"
                    >
                      3
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[88px] mt-[19px] w-[92%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[3px] text-base text-black-900"
                    size="txtInterMedium16"
                  >
                    Redeem
                  </Text>
                  <div className="h-[27px] md:ml-[0] ml-[311px] relative w-[6%] md:w-full">
                    <Switch
                      onColor="#023e25"
                      offColor="#023e25"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={true}
                      className="m-auto w-full"
                    />
                    <Text
                      className="absolute bottom-[15%] left-[9%] text-[13px] text-white-A700"
                      size="txtInterMedium13WhiteA700"
                    >
                      GIVE
                    </Text>
                  </div>
                  <Text
                    className="ml-5 md:ml-[0] md:mt-0 mt-1 text-base text-black-900"
                    size="txtInterMedium16"
                  >
                    Manage giving
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[205px] md:mt-0 mt-[3px] text-base text-black-900"
                    size="txtInterMedium16"
                  >
                    Token breakdown
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[250px] md:mt-0 mt-1 text-base text-black-900"
                    size="txtInterMedium16"
                  >
                    Today’s Set
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[45px] items-start justify-start md:ml-[0] ml-[623px] mt-[49px] md:px-5 w-auto md:w-full">
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
                onClick={() => navigate("/buybrands")}
              >
                Buy
              </Text>
              <Text
                className="text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                size="txtInterMedium22Gray50001"
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
            <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start max-w-[1658px] mt-[79px] mx-auto md:px-5 w-full">
              <Img
                className="md:flex-1 h-[501px] sm:h-auto object-cover rounded-[21px] w-[48%] md:w-full"
                src="images/img_rectangle34_501x782.png"
                alt="rectangleThirtyFour"
              />
              <Img
                className="md:flex-1 h-[501px] sm:h-auto object-cover rounded-[21px] w-[23%] md:w-full"
                src="images/img_rectangle35_501x375.png"
                alt="rectangleThirtyFive"
              />
              <div className="h-[501px] relative w-[27%] md:w-full">
                <Img
                  className="absolute h-[501px] inset-y-[0] left-[0] my-auto object-cover rounded-[21px] w-[87%]"
                  src="images/img_rectangle36_501x375.png"
                  alt="rectangleThirtySix"
                />
                <div className="absolute bg-teal-900 bottom-1/4 flex flex-row items-center justify-start p-[15px] right-[0] w-[32%]">
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
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[625px] mt-[70px] md:px-5 w-[35%] md:w-full">
              <Img
                className="h-[100px] md:h-auto mb-1 object-cover w-[100px]"
                src="images/img_3.png"
                alt="Three_One"
              />
              <div className="bg-green-300 h-[22px] mb-[43px] ml-9 md:ml-[0] md:mt-0 mt-[39px] rounded-[50%] w-[22px]"></div>
              <div className="h-[22px] md:ml-[0] ml-[18px] relative w-[45%] md:w-full">
                <Line className="absolute bg-black-900 bottom-[23%] h-[5px] inset-x-[0] mx-auto w-full" />
                <div className="absolute bg-green-300 h-[22px] inset-[0] justify-center m-auto rounded-[50%] w-[22px]"></div>
              </div>
              <div className="bg-green-300 h-[22px] mb-[43px] md:ml-[0] ml-[18px] md:mt-0 mt-[39px] rounded-[50%] w-[22px]"></div>
              <Img
                className="h-[100px] md:h-auto md:ml-[0] ml-[57px] md:mt-0 mt-1 object-cover w-[100px]"
                src="images/img_treasurechest.png"
                alt="treasurechest"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[585px] mt-[22px] md:px-5 w-[38%] md:w-full">
              <Text
                className="text-[19px] text-black-900 text-center"
                size="txtInterMedium19"
              >
                Current day streak
              </Text>
              <Text
                className="common-pointer ml-6 md:ml-[0] text-[19px] text-black-900 text-center w-[48%] sm:w-full"
                size="txtInterMedium19"
                onClick={() => navigate("/dashboardanalyticscreators")}
              >
                Awesome! You’ve just earned 45 CB tokens for your 3-day streak.
                Come back tomorrow to keep going!
              </Text>
              <Text
                className="common-pointer md:ml-[0] ml-[61px] text-[19px] text-black-900 text-center"
                size="txtInterMedium19"
                onClick={() => navigate("/dashboardanalyticscreators")}
              >
                Streak bonus
              </Text>
            </div>
            <div className="h-[501px] md:h-[578px] max-w-[1598px] mt-[77px] mx-auto md:px-5 relative w-full">
              <Img
                className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                src="images/img_rectangle37_501x1598.png"
                alt="rectangleThirtySeven"
              />
              <Text
                className="absolute bottom-[3%] inset-x-[0] mx-auto sm:text-[44px] md:text-[50px] text-[58px] text-center text-white-A700 w-max"
                size="txtInterSemiBold58WhiteA700"
              >
                Brand of the month
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[150px] mt-[146px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterBold30"
            >
              Categories
            </Text>
            <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start max-w-[1598px] mt-[26px] mx-auto md:px-5 w-full">
              <div className="h-[501px] relative w-[49%] md:w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle43_501x782.png"
                  alt="rectangleFortyThree"
                />
                <Text
                  className="absolute bottom-[6%] left-[6%] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02"
                  size="txtInterBold30Black90002"
                >
                  #photography
                </Text>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[33px] grid md:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                orientation="horizontal"
              >
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle44_501x375.png"
                    alt="rectangleFortyFour"
                  />
                  <Text
                    className="absolute bottom-[6%] left-[10%] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02 text-center"
                    size="txtInterBold30Black90002"
                  >
                    #skincare
                  </Text>
                </div>
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle45_501x375.png"
                    alt="rectangleFortyFive"
                  />
                  <Text
                    className="absolute bottom-[6%] left-[9%] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02"
                    size="txtInterBold30Black90002"
                  >
                    #running
                  </Text>
                </div>
              </List>
            </div>
            <div className="md:gap-5 gap-[33px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1599px] min-h-[auto] mt-[33px] mx-auto md:px-5 w-full">
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle46_501x375.png"
                  alt="rectangleFortySix"
                />
                <Text
                  className="absolute bottom-[6%] left-[12%] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02"
                  size="txtInterBold30Black90002"
                >
                  #beauty
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle47_501x375.png"
                  alt="rectangleFortySeven"
                />
                <Text
                  className="absolute left-[12%] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02 text-center top-[7%]"
                  size="txtInterBold30Black90002"
                >
                  #Makeup
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle48_501x375.png"
                  alt="rectangleFortyEight"
                />
                <Text
                  className="absolute bottom-[6%] left-[10%] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02 text-center"
                  size="txtInterBold30Black90002"
                >
                  #Makeup
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle49_501x375.png"
                  alt="rectangleFortyNine"
                />
                <Text
                  className="absolute bottom-[6%] left-[9%] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02 text-center"
                  size="txtInterBold30Black90002"
                >
                  #Spices
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle50_501x375.png"
                  alt="rectangleFifty"
                />
                <Text
                  className="absolute bottom-[7%] left-[12%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #leisure
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle51_501x375.png"
                  alt="rectangleFiftyOne"
                />
                <Text
                  className="absolute bottom-[7%] left-[12%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #travel
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle52_501x375.png"
                  alt="rectangleFiftyTwo"
                />
                <Text
                  className="absolute bottom-[7%] left-[10%] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #food
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle53_501x375.png"
                  alt="rectangleFiftyThree"
                />
                <Text
                  className="absolute bottom-[7%] left-[9%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #Spices
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle54.png"
                  alt="rectangleFiftyFour"
                />
                <Text
                  className="absolute bottom-[7%] left-[12%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #gaming
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle55.png"
                  alt="rectangleFiftyFive"
                />
                <Text
                  className="absolute bottom-[7%] left-[12%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #artsandcraft
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle56.png"
                  alt="rectangleFiftySix"
                />
                <Text
                  className="absolute bottom-[7%] left-[10%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #sustainability
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle57.png"
                  alt="rectangleFiftySeven"
                />
                <Text
                  className="absolute bottom-[7%] left-[9%] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02"
                  size="txtInterBold30Black90002"
                >
                  #fitness
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle58.png"
                  alt="rectangleFiftyEight"
                />
                <Text
                  className="absolute bottom-[10%] left-[12%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #diy
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle59.png"
                  alt="rectangleFiftyNine"
                />
                <Text
                  className="absolute bottom-[10%] left-[12%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #thrifting
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle60.png"
                  alt="rectangleSixty"
                />
                <Text
                  className="absolute bottom-[10%] left-[10%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtInterBold30WhiteA700"
                >
                  #snacks
                </Text>
              </div>
              <div className="h-[501px] relative w-full">
                <Img
                  className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                  src="images/img_rectangle61.png"
                  alt="rectangleSixtyOne"
                />
                <Text
                  className="absolute bottom-[10%] left-[9%] text-3xl sm:text-[26px] md:text-[28px] text-black-900_02"
                  size="txtInterBold30Black90002"
                >
                  #cooking
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-start max-w-[1599px] mt-[33px] mx-auto md:px-5 w-full">
              <Img
                className="sm:flex-1 h-[180px] md:h-auto object-cover rounded-[21px] w-1/2 sm:w-full"
                src="images/img_rectangle62.png"
                alt="rectangleSixtyTwo"
              />
              <Img
                className="sm:flex-1 h-[180px] md:h-auto object-cover rounded-[21px] w-1/2 sm:w-full"
                src="images/img_rectangle63.png"
                alt="rectangleSixtyThree"
              />
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1421px] mt-[33px] mx-auto md:px-5 w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_02"
                size="txtInterBold30Black90002"
              >
                promotional content for Pintereste
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_02"
                size="txtInterBold30Black90002"
              >
                making promotional content for Facebook
              </Text>
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

export default CreatoraccountPage;
