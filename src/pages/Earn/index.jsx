import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import Valiacc from "components/Valiacc";

const EarnPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-end pt-[35px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1385px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[200px] w-[43%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtInterSemiBold16Black900"
                >
                  EARN CRYPTO WITH BRANDED CONTENT
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] mt-[18px] sm:text-[44px] md:text-[50px] text-[58px] text-black-900"
                  size="txtInterSemiBold58"
                >
                  <>
                    Work with <br />
                    brands. Earn Crypto.
                  </>
                </Text>
                <Text
                  className="mt-[33px] text-black-900 text-xl w-full"
                  size="txtInterSemiBold20"
                >
                  Share the brands and products you love to your online
                  communities. Start earning crypto, the more audiences you
                  reach.
                </Text>
                <Button
                  className="common-pointer border-2 border-green-300 border-solid cursor-pointer font-medium leading-[normal] min-w-[325px] ml-0.5 md:ml-[0] mt-[33px] py-[19px] rounded-[29px] text-base text-center text-green-300"
                  onClick={() => navigate("")}
                >
                  START EARNING BY CREATING
                </Button>
              </div>
              <div className="h-[857px] relative w-[51%] md:w-full">
                <Img
                  className="h-[857px] m-auto object-cover w-full"
                  src="images/img_rectangle4_857x693.png"
                  alt="rectangleFour"
                />
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[41%] flex flex-col h-[83px] items-center justify-end left-[23%] p-[25px] sm:px-5 w-[36%]"
                  style={{ backgroundImage: "url('images/img_group25.svg')" }}
                >
                  <div className="bg-blue_gray-100 h-3.5 mt-[19px] w-[96%]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1539px] mt-[218px] mx-auto md:px-5 w-full">
              <Text
                className="text-[17px] text-black-900"
                size="txtInterBold17Black900"
              >
                INTRODUCING
              </Text>
              <Text
                className="mt-2 sm:text-[31px] md:text-[37px] text-[41px] text-black-900 w-full"
                size="txtInterMedium41"
              >
                Content Block’s creator widget: Where brands and creators can
                build branded content partnerships powered by cryptocurrency
                analytics on a blockchain network
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[113px] w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[53%] md:w-full">
                  <div className="h-[973px] relative w-[97%] md:w-full">
                    <div className="flex flex-col h-full items-center justify-start mt-[111px] mx-auto w-[41%]">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterMedium22"
                      >
                        Creator wallet
                      </Text>
                      <Text
                        className="mt-[162px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-[79%] sm:w-full"
                        size="txtInterMedium22"
                      >
                        Earn crypto with brand deals
                      </Text>
                      <div className="flex flex-col items-start justify-start mt-[60px] w-full">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          Join creator wallet
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-500 w-full"
                          size="txtInterMedium15"
                        >
                          Get discovered by member brands for promo content.
                        </Text>
                        <Text
                          className="mt-[27px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          Get paid crypto for your content
                        </Text>
                        <Text
                          className="mt-2 text-[15px] text-gray-500 w-full"
                          size="txtInterMedium15"
                        >
                          Select your interests to let brands know the type of
                          products you want to promote.
                        </Text>
                        <Text
                          className="mt-[27px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          Find new opportunities easily
                        </Text>
                        <Text
                          className="mt-2 text-[15px] text-gray-500 w-full"
                          size="txtInterMedium15"
                        >
                          Get a message folder for promo notifications so you
                          can respond on-time when brands get in touch.
                        </Text>
                      </div>
                    </div>
                    <div className="absolute h-[973px] inset-[0] justify-center m-auto w-full">
                      <Img
                        className="absolute h-[973px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_rectangle6_973x769.png"
                        alt="rectangleSix"
                      />
                      <div className="absolute bottom-[36%] flex flex-col items-center justify-start left-[26%] w-[4%]">
                        <div className="bg-blue_gray-100 h-[25px] w-[25px]"></div>
                        <div className="bg-blue_gray-100 h-[25px] mt-[65px] w-[25px]"></div>
                        <div className="bg-blue_gray-100 h-[25px] mt-[68px] w-[25px]"></div>
                      </div>
                      <Img
                        className="absolute h-[860px] inset-[0] justify-center m-auto object-cover rounded-[45px] w-[52%]"
                        src="images/img_rectangle7_860x396.png"
                        alt="rectangleSeven"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[477px] text-[17px] text-black-900"
                    size="txtInterBold17Black900"
                  >
                    START EARNING
                  </Text>
                  <Text
                    className="mt-2 sm:text-[31px] md:text-[37px] text-[41px] text-black-900"
                    size="txtInterMedium41"
                  >
                    How to get started with branded content
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[170px] w-[42%] md:w-full">
                  <Text
                    className="sm:text-[25px] md:text-[27px] text-[29px] text-green-300"
                    size="txtInterBold29"
                  >
                    Join Content Block’s creator wallet
                  </Text>
                  <Text
                    className="mt-[42px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtInterMedium22"
                  >
                    <>
                      To learn more about Content Block’s creator wallet,
                      <br />
                      see our onboarding guide.
                    </>
                  </Text>
                  <Text
                    className="mt-[35px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtInterMedium22"
                  >
                    Now testing globally.
                  </Text>
                  <Line className="bg-black-900 h-px mt-[78px] w-full" />
                  <Text
                    className="mt-11 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtInterBold30"
                  >
                    Token Wallet
                  </Text>
                  <Line className="bg-black-900 h-px mt-11 w-full" />
                  <Text
                    className="mt-11 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtInterBold30"
                  >
                    Partnership Branding
                  </Text>
                  <Line className="bg-black-900 h-px mt-11 w-full" />
                  <Text
                    className="mt-[43px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtInterBold30"
                  >
                    Token Truflation widget
                  </Text>
                  <Line className="bg-black-900 h-px mt-[45px] w-full" />
                  <Text
                    className="mt-11 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtInterBold30"
                  >
                    Circular Verse Economy
                  </Text>
                  <Line className="bg-black-900 h-px mt-11 w-full" />
                  <Text
                    className="mt-11 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtInterBold30"
                  >
                    Chainlink Data Feeds on Flow Blockchain
                  </Text>
                  <Line className="bg-black-900 h-px mt-11 w-full" />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1554px] mt-[436px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[76px] items-center justify-start md:mt-0 mt-[235px] w-[42%] md:w-full">
                <div className="flex flex-col gap-11 items-start justify-start">
                  <Text
                    className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                    size="txtInterBold29Black900"
                  >
                    Can I join?
                  </Text>
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl w-full"
                    size="txtInterMedium22"
                  >
                    Make sure you comply with our Instagram Partner Monetization
                    Policies, Community Guidelines and Content Monetization
                    Policies.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Line className="bg-black-900 h-px w-full" />
                  <Text
                    className="md:ml-[0] ml-[15px] mt-11 sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                    size="txtInterBold29Black900"
                  >
                    Partner with member brands
                  </Text>
                  <Line className="bg-black-900 h-px mt-[45px] w-full" />
                  <Text
                    className="md:ml-[0] ml-[15px] mt-12 sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                    size="txtInterBold29Black900"
                  >
                    How to create your branded content
                  </Text>
                  <Line className="bg-black-900 h-px mt-[41px] w-full" />
                  <Text
                    className="ml-5 md:ml-[0] mt-[422px] text-[17px] text-black-900"
                    size="txtInterBold17Black900"
                  >
                    TIPS FOR BRANDED CONTENT
                  </Text>
                </div>
              </div>
              <div className="h-[891px] relative w-1/2 md:w-full">
                <Img
                  className="h-[891px] m-auto object-cover w-full"
                  src="images/img_rectangle4_891x771.png"
                  alt="rectangleFour_One"
                />
                <div className="absolute bg-white-A700 bottom-[9%] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[35px] sm:px-5 rounded-[10px] shadow-bs1 w-[71%]">
                  <div className="flex flex-col gap-8 items-start justify-start my-1 w-[69%] md:w-full">
                    <div className="flex flex-row gap-[26px] items-center justify-start w-[81%] md:w-full">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <div className="bg-blue_gray-100 h-3.5 w-[83%]"></div>
                    </div>
                    <div className="flex flex-row gap-[26px] items-center justify-between w-full">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark_One"
                      />
                      <div className="bg-blue_gray-100 h-3.5 w-[87%]"></div>
                    </div>
                    <div className="flex flex-row gap-[26px] items-center justify-start w-[81%] md:w-full">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Two"
                      />
                      <div className="bg-blue_gray-100 h-3.5 w-[83%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start max-w-[1561px] mt-2 mx-auto md:px-5 w-full">
              <Text
                className="ml-2 md:ml-[0] sm:text-[31px] md:text-[37px] text-[41px] text-black-900"
                size="txtInterMedium41"
              >
                Create better branded content
              </Text>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[363px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 ml-0.5 md:ml-[0] mt-[87px] w-[82%]"
                orientation="horizontal"
              >
                {new Array(3).fill({}).map((props, index) => (
                  <React.Fragment key={`Valiacc${index}`}>
                    <Valiacc
                      className="bg-white-A700 flex flex-col h-[180px] items-center justify-start p-10 sm:px-5 rounded-[21px] shadow-bs w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <div className="md:gap-10 gap-[90px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between ml-0.5 md:ml-[0] mt-[34px] w-[99%] md:w-full">
                <Text
                  className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900 w-full"
                  size="txtInterSemiBold29"
                >
                  Be yourself
                </Text>
                <Text
                  className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900 w-full"
                  size="txtInterSemiBold29"
                >
                  Own your partnerships
                </Text>
                <Text
                  className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900 w-full"
                  size="txtInterSemiBold29"
                >
                  Create mobile-friendly content
                </Text>
              </div>
              <div className="md:gap-10 gap-[90px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between ml-0.5 md:ml-[0] mt-6 w-[99%] md:w-full">
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 w-full"
                  size="txtInterMedium23"
                >
                  Your community is smart enough to spot forced partnerships. So
                  in line with your interests and only promote with brands that
                  speak to you.
                </Text>
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 w-full"
                  size="txtInterMedium23"
                >
                  When a brand sponsors your content, they’ll expect to see
                  their clearly presented on your accounts. Your community will
                  appreciate being transparent as well.
                </Text>
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 w-full"
                  size="txtInterMedium23"
                >
                  Always capture content that translates to mobile devices.
                  Since not everyone experience content the same way, always try
                  to add captions or enable alternative text in advanced
                  options.
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[363px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 ml-0.5 md:ml-[0] mt-[87px] w-[82%]"
                orientation="horizontal"
              >
                {new Array(3).fill({}).map((props, index) => (
                  <React.Fragment key={`Valiacc${index}`}>
                    <Valiacc
                      className="bg-white-A700 flex flex-col h-[180px] items-center justify-start p-10 sm:px-5 rounded-[21px] shadow-bs w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-[34px] w-[99%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start">
                  <Text
                    className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900 w-[98%] sm:w-full"
                    size="txtInterSemiBold29"
                  >
                    Prohibited and restricted categories
                  </Text>
                  <Text
                    className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 w-full"
                    size="txtInterMedium23"
                  >
                    Certain products, like drugs and weapons, can’t be promoted
                    as branded content. And others can only be promoted with
                    restrictions, like alcohol. See the full list.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start">
                  <Text
                    className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                    size="txtInterSemiBold29"
                  >
                    Format restrictions
                  </Text>
                  <Text
                    className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 w-full"
                    size="txtInterMedium23"
                  >
                    Don’t include pre, mid or post-roll ads in videos or audio
                    content. Don’t include banner ads in videos or images. See
                    what it looks like in our visual guide.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start">
                  <Text
                    className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900 w-full"
                    size="txtInterSemiBold29"
                  >
                    Always disclose paid partnerships
                  </Text>
                  <Text
                    className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900 w-full"
                    size="txtInterMedium23"
                  >
                    If you’re getting paid in any form for your content, you’ll
                    need to add a Paid Partnership label. Unsure if yours
                    qualifies? Check out our full list of scenarios.
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[42px] items-start justify-between mt-[236px] w-[99%] md:w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[476px] w-[51%] md:w-full">
                  <Text
                    className="ml-2 md:ml-[0] text-[17px] text-black-900"
                    size="txtInterBold17Black900"
                  >
                    EARN LIKE A PRO
                  </Text>
                  <Text
                    className="ml-2 md:ml-[0] mt-2 sm:text-[31px] md:text-[37px] text-[41px] text-black-900"
                    size="txtInterMedium41"
                  >
                    How to earn with branded content
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[22px] text-[22px] text-black-900 sm:text-lg md:text-xl w-[79%] sm:w-full"
                    size="txtInterMedium22"
                  >
                    Since you’ll negotiate the terms of every branded content
                    deal, each will be different. But it’s always a good idea to
                    provide the brand with data, like your number of followers,
                    average number likes, views, comments and shares your
                    organic content and past branded content deals have
                    received. All of this will help back up why you deserve a
                    certain rate.
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[33px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtInterMedium22"
                  >
                    Find more ways to earn.
                  </Text>
                  <Img
                    className="h-[777px] sm:h-auto mt-[205px] object-cover w-[777px] md:w-full"
                    src="images/img_rectangle4.png"
                    alt="rectangleTwentyFour"
                  />
                  <Text
                    className="ml-0.5 md:ml-[0] mt-[278px] text-[17px] text-black-900"
                    size="txtInterBold17Black900"
                  >
                    MORE?
                  </Text>
                </div>
                <div className="flex flex-col md:gap-10 gap-[568px] justify-start w-[47%] md:w-full">
                  <div className="h-[732px] relative w-[71%] sm:w-full">
                    <Img
                      className="absolute h-[732px] inset-y-[0] my-auto object-cover right-[0] rounded-[38px] w-[67%]"
                      src="images/img_rectangle19.png"
                      alt="rectangleNineteen"
                    />
                    <div className="absolute bg-white-A700 bottom-[14%] flex flex-col items-center justify-start left-[0] p-[30px] sm:px-5 rounded-[21px] shadow-bs w-[67%]">
                      <div className="flex flex-col gap-[17px] items-center justify-start mb-[3px] w-[78%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Img
                            className="h-9 md:h-auto object-cover w-9"
                            src="images/img_image258.png"
                            alt="image258"
                          />
                          <Img
                            className="h-9 w-9"
                            src="images/img_computer.svg"
                            alt="computer"
                          />
                          <Img
                            className="h-10 w-10"
                            src="images/img_share.svg"
                            alt="share"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                            size="txtInterMedium21"
                          >
                            19k
                          </Text>
                          <Text
                            className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                            size="txtInterMedium21"
                          >
                            4k
                          </Text>
                          <Text
                            className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                            size="txtInterMedium21"
                          >
                            365
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[81px]">
                    <Text
                      className="md:ml-[0] ml-[5px] text-[17px] text-black-900"
                      size="txtInterBold17Black900"
                    >
                      CREATOR SPOTLIGHT{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[5px] mt-2 sm:text-[31px] md:text-[37px] text-[41px] text-black-900 w-[92%] sm:w-full"
                      size="txtInterMedium41"
                    >
                      How to navigate brand deals according to @
                    </Text>
                    <Text
                      className="mt-[11px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtInterMedium22"
                    >
                      include brands in content your planned content.{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-2 sm:text-[31px] md:text-[37px] text-[41px] text-black-900"
                size="txtInterMedium41"
              >
                More ways to use Content Block
              </Text>
              <div className="md:gap-10 gap-[77px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between ml-1 md:ml-[0] mt-[84px] w-[99%] md:w-full">
                <Img
                  className="h-[356px] md:h-auto object-cover w-full"
                  src="images/img_rectangle25.png"
                  alt="rectangleTwentyFive"
                />
                <Img
                  className="h-[356px] md:h-auto object-cover w-full"
                  src="images/img_rectangle26.png"
                  alt="rectangleTwentySix"
                />
                <Img
                  className="h-[356px] md:h-auto object-cover w-full"
                  src="images/img_rectangle27.png"
                  alt="rectangleTwentySeven"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-1 md:ml-[0] mt-12 w-[82%] md:w-full">
                <Text
                  className="text-[17px] text-black-900"
                  size="txtInterBold17Black900"
                >
                  ANALYTICS
                </Text>
                <Text
                  className="md:ml-[0] ml-[438px] text-[17px] text-black-900"
                  size="txtInterBold17Black900"
                >
                  MARKET DATA
                </Text>
                <Text
                  className="md:ml-[0] ml-[415px] text-[17px] text-black-900"
                  size="txtInterBold17Black900"
                >
                  CHAINLINK DATA FEEDS
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-1 md:ml-[0] mt-2 w-full">
                <Text
                  className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                  size="txtInterMedium29"
                >
                  More ways to use Content Block
                </Text>
                <Text
                  className="sm:ml-[0] ml-[90px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                  size="txtInterMedium29"
                >
                  Index the value of available tokens
                </Text>
                <Text
                  className="sm:flex-1 sm:ml-[0] ml-[60px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900 w-[31%] sm:w-full"
                  size="txtInterMedium29"
                >
                  Get up to date asset decentralised price feeds
                </Text>
              </div>
            </div>
            <Img
              className="h-36 sm:h-auto mt-[165px] object-cover w-full"
              src="images/img_frame4.png"
              alt="frameFive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EarnPage;
