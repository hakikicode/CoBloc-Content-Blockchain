import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Switch, Text } from "components";
import Header1 from "components/Header1";
import Valiacc from "components/Valiacc";

const BrandaccountPage = () => {
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
            <div className="flex md:flex-col flex-row gap-[45px] items-start justify-start md:ml-[0] ml-[580px] mt-[49px] md:px-5 w-auto md:w-full">
              <Text
                className="common-pointer text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-auto"
                size="txtInterMedium22Gray50001"
                onClick={() => navigate("/browsecreators")}
              >
                Partnerships
              </Text>
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
                onClick={() => navigate("/dashboardanalyticsbrands")}
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
            <div className="flex md:flex-col flex-row gap-[33px] items-center justify-start max-w-[1658px] mt-[79px] mx-auto md:px-5 w-full">
              <Img
                className="md:flex-1 h-[501px] sm:h-auto object-cover rounded-[21px] w-[48%] md:w-full"
                src="images/img_rectangle34.png"
                alt="rectangleThirtyFour"
              />
              <Img
                className="md:flex-1 h-[501px] sm:h-auto object-cover rounded-[21px] w-[23%] md:w-full"
                src="images/img_rectangle35.png"
                alt="rectangleThirtyFive"
              />
              <div className="h-[501px] relative w-[27%] md:w-full">
                <Img
                  className="absolute h-[501px] inset-y-[0] left-[0] my-auto object-cover rounded-[21px] w-[87%]"
                  src="images/img_rectangle36.png"
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
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start max-w-[1474px] mt-[18px] mx-auto md:px-5 w-full">
              <Text
                className="mb-2.5 text-base text-black-900_02"
                size="txtInterSemiBold16Black90002"
              >
                How to approach branding
              </Text>
              <Text
                className="mb-[3px] sm:ml-[0] ml-[607px] sm:mt-0 mt-[7px] text-base text-black-900_02"
                size="txtInterSemiBold16Black90002"
              >
                What are data feeds
              </Text>
              <Text
                className="sm:ml-[0] ml-[252px] sm:mt-0 mt-2.5 text-base text-black-900_02"
                size="txtInterSemiBold16Black90002"
              >
                Finding the right partnerships
              </Text>
            </div>
            <div className="h-[501px] md:h-[526px] max-w-[1598px] mt-[25px] mx-auto md:px-5 relative w-full">
              <Img
                className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                src="images/img_rectangle37.png"
                alt="rectangleThirtySeven"
              />
              <Text
                className="absolute bottom-[3%] inset-x-[0] mx-auto sm:text-[44px] md:text-[50px] text-[58px] text-black-900_02 text-center w-max"
                size="txtInterSemiBold58Black90002"
              >
                How to promote your brand
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[150px] mt-[72px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterBold30"
            >
              Tips for Brand partnerships
            </Text>
            <List
              className="flex flex-col gap-[33px] items-center max-w-[1599px] mt-[26px] mx-auto md:px-5 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-[33px] items-center justify-between w-full">
                <div className="h-[501px] relative w-[49%] md:w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle43.png"
                    alt="rectangleFortyThree"
                  />
                  <Text
                    className="absolute bottom-[5%] left-[7%] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtInterBold30WhiteA700"
                  >
                    Branding for Linked in
                  </Text>
                </div>
                <div className="h-[501px] relative w-[24%] md:w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle44.png"
                    alt="rectangleFortyFour"
                  />
                  <Text
                    className="absolute bottom-[5%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                    size="txtInterBold30WhiteA700"
                  >
                    Branding with GPT
                  </Text>
                </div>
                <div className="h-[501px] relative w-[24%] md:w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle45.png"
                    alt="rectangleFortyFive"
                  />
                  <Text
                    className="absolute bottom-[5%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                    size="txtInterBold30WhiteA700"
                  >
                    Google SEO
                  </Text>
                </div>
              </div>
              <div className="flex-1 gap-[33px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle46.png"
                    alt="rectangleFortySix"
                  />
                  <Text
                    className="absolute bottom-[5%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-max"
                    size="txtInterBold30WhiteA700"
                  >
                    Spotify ads strategy
                  </Text>
                </div>
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle47.png"
                    alt="rectangleFortySeven"
                  />
                  <Text
                    className="absolute bottom-[5%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[90%] sm:w-full"
                    size="txtInterBold30WhiteA700"
                  >
                    Partnering with content creators
                  </Text>
                </div>
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle48.png"
                    alt="rectangleFortyEight"
                  />
                  <Text
                    className="absolute bottom-[5%] left-[5%] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtInterBold30WhiteA700"
                  >
                    Visual branding
                  </Text>
                </div>
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle49.png"
                    alt="rectangleFortyNine"
                  />
                  <Text
                    className="absolute bottom-[5%] left-[5%] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtInterBold30WhiteA700"
                  >
                    Branding for Twitter
                  </Text>
                </div>
              </div>
              <div className="flex-1 gap-[33px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle50.png"
                    alt="rectangleFifty"
                  />
                  <Text
                    className="absolute bottom-[5%] left-[5%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[72%] sm:w-full"
                    size="txtInterBold30WhiteA700"
                  >
                    How to price your products
                  </Text>
                </div>
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle51.png"
                    alt="rectangleFiftyOne"
                  />
                  <Text
                    className="absolute bottom-[7%] left-[5%] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtInterBold30WhiteA700"
                  >
                    Visual branding
                  </Text>
                </div>
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle52.png"
                    alt="rectangleFiftyTwo"
                  />
                  <Text
                    className="absolute bottom-[7%] left-[5%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtInterBold30WhiteA700"
                  >
                    Marketing strategy
                  </Text>
                </div>
                <div className="h-[501px] relative w-full">
                  <Img
                    className="h-[501px] m-auto object-cover rounded-[21px] w-full"
                    src="images/img_rectangle53.png"
                    alt="rectangleFiftyThree"
                  />
                  <Text
                    className="absolute bottom-[7%] left-[5%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtInterBold30WhiteA700"
                  >
                    Marketing budgets
                  </Text>
                </div>
              </div>
            </List>
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

export default BrandaccountPage;
