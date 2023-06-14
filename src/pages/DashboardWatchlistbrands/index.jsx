import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header1 from "components/Header1";

const DashboardWatchlistbrandsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header1 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-end pt-[43px] w-full">
          <div className="flex flex-col justify-start w-full">
            <div className="flex md:flex-col flex-row gap-[45px] items-center justify-center md:ml-[0] ml-[580px] md:px-5 w-auto md:w-full">
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
                onClick={() => navigate("/dashboardanalyticscreators")}
              >
                Analytics Dashboard
              </Text>
              <Button className="bg-teal-900 cursor-pointer font-medium leading-[normal] min-w-[144px] py-4 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                Watchlist
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-end md:ml-[0] ml-[185px] mt-[52px] md:px-5 w-[90%] md:w-full">
              <div className="bg-white-A700 sm:h-[1405px] h-[1510px] md:h-[3435px] p-[30px] sm:px-5 relative rounded-[21px] shadow-bs3 w-[91%] md:w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto w-auto">
                  <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[268px] items-center justify-between w-auto md:w-full">
                      <div className="flex flex-row gap-16 items-center justify-start w-auto">
                        <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                          <Img
                            className="h-6"
                            src="images/img_staroutline.svg"
                            alt="staroutline"
                          />
                        </Button>
                        <div className="flex flex-col items-center justify-start w-[148px]">
                          <div className="flex flex-col items-start justify-center w-[90px]">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-base text-gray-500_01 w-auto"
                                size="txtInterMedium16Gray50001"
                              >
                                Token
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[63%] md:w-full">
                        <Text
                          className="mb-0.5 text-gray-500_01 text-xl"
                          size="txtInterSemiBold20Gray50001"
                        >
                          Price
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[155px] md:mt-0 mt-0.5 text-gray-500_01 text-xl"
                          size="txtInterSemiBold20Gray50001"
                        >
                          1 day
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[122px] md:mt-0 mt-0.5 text-gray-500_01 text-xl"
                          size="txtInterSemiBold20Gray50001"
                        >
                          30 days
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[122px] md:mt-0 mt-0.5 text-gray-500_01 text-xl"
                          size="txtInterSemiBold20Gray50001"
                        >
                          1 year
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[122px] md:mt-0 mt-0.5 text-green-300 text-xl"
                          size="txtInterSemiBold20Green300"
                        >
                          Market cap
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="sm:h-[1306px] h-[1329px] md:h-[2209px] relative w-[87%] md:w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <List
                            className="flex flex-col gap-[41px] items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-[22px] my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[148px]">
                                  <Button className="bg-indigo-A200 flex h-[38px] items-center justify-center p-1 rounded-[50%] w-[38px]">
                                    <Img
                                      src="images/img_arrowdown.svg"
                                      alt="arrowdown"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-3 items-start justify-center w-[90px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      ETH
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        Ethereum
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-center justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  -0.05%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -0.39%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  +2.20%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-5 my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[148px]">
                                  <Button className="bg-teal-400 flex h-[38px] items-center justify-center p-[7px] rounded-[50%] w-[38px]">
                                    <Img
                                      src="images/img_arrowdown_white_a700.svg"
                                      alt="arrowdown"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-3 items-start justify-center w-[90px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      USDT
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        Tether USD
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-center justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +0.02%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  +0.01%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -0.04%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-[25px] my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[148px]">
                                  <Img
                                    className="h-[38px] w-[38px]"
                                    src="images/img_usdc.svg"
                                    alt="usdc"
                                  />
                                  <div className="flex flex-col gap-3 items-start justify-center w-[90px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      USDC
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        USD Coin
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +0.04%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  +0.01%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -0.16%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[148px]">
                                  <Button className="bg-blue-A700 flex h-[38px] items-center justify-center p-[7px] rounded-[50%] w-[38px]">
                                    <Img
                                      src="images/img_bookmark.svg"
                                      alt="bookmark"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-3 items-start justify-center w-[90px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      MATIC
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        Matic
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +2.30%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -10.55%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  +27.48%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-[13px] my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-[57px] items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-[21px] items-center justify-start w-[158px]">
                                  <div className="md:h-10 h-[50px] relative w-[30%]">
                                    <Button className="absolute bg-red-600 bottom-[0] flex h-10 items-center justify-center p-1.5 right-[0] rounded-[50%] w-10">
                                      <Img
                                        src="images/img_avax.svg"
                                        alt="avax"
                                      />
                                    </Button>
                                    <Img
                                      className="absolute h-[23px] left-[0] top-[0]"
                                      src="images/img_avax_red_600.svg"
                                      alt="avax_One"
                                    />
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[90px]">
                                    <div className="flex flex-col gap-3 items-start justify-center w-[90px]">
                                      <Text
                                        className="text-black-900_01 text-xl w-auto"
                                        size="txtInterSemiBold20Black90001"
                                      >
                                        AVAX
                                      </Text>
                                      <div className="flex flex-col items-center justify-start w-auto">
                                        <Text
                                          className="text-base text-gray-500_01 w-auto"
                                          size="txtInterMedium16Gray50001"
                                        >
                                          Avalanche
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -0.61%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -9.89%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -42.40%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-[15px] my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[164px]">
                                  <Button className="bg-gray-900_01 flex h-[38px] items-center justify-center p-[5px] rounded-[50%] w-[38px]">
                                    <Img
                                      className="h-[25px]"
                                      src="images/img_clock_white_a700.svg"
                                      alt="clock"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-3 items-start justify-center w-[106px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      WBTC
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        Wrapped BTC
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +0.27%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -4.31%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -12.46%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-[11px] my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[180px]">
                                  <Button className="bg-blue-700 flex h-[38px] items-center justify-center p-[7px] rounded-[50%] w-[38px]">
                                    <Img src="images/img_user.svg" alt="user" />
                                  </Button>
                                  <div className="flex flex-col gap-3 items-start justify-center w-[122px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      LINK
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        Chainlink Token
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-start w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +0.53%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -8.45%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -30.01%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-[18px] my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[148px]">
                                  <Img
                                    className="h-[38px] md:h-auto object-cover w-[38px]"
                                    src="images/img_aave.png"
                                    alt="aave"
                                  />
                                  <div className="flex flex-col gap-3 items-start justify-center w-[90px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      AAVE
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        Aave
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +0.99%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -7.60%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -38.15%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-1 my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[148px]">
                                  <Button className="bg-light_blue-500 flex h-[38px] items-center justify-center p-[7px] rounded-[50%] w-[38px]">
                                    <Img src="images/img_map.svg" alt="map" />
                                  </Button>
                                  <div className="flex flex-col gap-3 items-start justify-center w-[90px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      FTM
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        FANTOM
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +1.56%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -20.96%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -12.93%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[156px]">
                                  <Img
                                    className="h-[38px] w-[38px]"
                                    src="images/img_1inch.svg"
                                    alt="1inch"
                                  />
                                  <div className="flex flex-col gap-3 items-start justify-center w-[98px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      1INCH
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        1INCH Token
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +0.14%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -22.30%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -60.63%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-[17px] my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[225px]">
                                  <Button className="bg-deep_orange-A400 flex h-[38px] items-center justify-center p-[7px] rounded-[50%] w-[38px]">
                                    <Img
                                      src="images/img_arrowup.svg"
                                      alt="arrowup"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-3 items-start justify-center w-[167px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      BAT
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        Basic Attention Token
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -0.45%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -10.87%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -0.00%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-3 my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[148px]">
                                  <Button className="bg-light_blue-A700 flex h-[38px] items-center justify-center p-1.5 rounded-[50%] w-[38px]">
                                    <Img
                                      src="images/img_rewind.svg"
                                      alt="rewind"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-3 items-start justify-center w-[90px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      VERSE
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        Verse
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +7.38%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -30.64%
                                </Text>
                                <Text
                                  className="text-white-A700 text-xl w-auto"
                                  size="txtInterSemiBold20WhiteA700"
                                >
                                  -0.00%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-3.5 my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[148px]">
                                  <Button className="bg-black-900 flex h-[38px] items-center justify-center p-1.5 rounded-[50%] w-[38px]">
                                    <Img
                                      src="images/img_solana.png"
                                      alt="solana"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-3 items-start justify-center w-[90px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      SOL
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        SOLANA
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-green-800 text-xl w-auto"
                                  size="txtInterSemiBold20Green800"
                                >
                                  +0.53%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -9.39%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -51.83%
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[467px] items-center justify-between mr-[7px] my-0 w-auto md:w-full">
                              <div className="flex flex-row gap-16 items-center justify-start w-auto">
                                <Button className="bg-gray-200 flex h-[34px] items-center justify-center p-[5px] rounded w-[34px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_staroutline_green_300.svg"
                                    alt="staroutline"
                                  />
                                </Button>
                                <div className="flex flex-row gap-5 items-center justify-start w-[164px]">
                                  <Img
                                    className="h-[38px] w-[38px]"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                  <div className="flex flex-col gap-3 items-start justify-center w-[106px]">
                                    <Text
                                      className="text-black-900_01 text-xl w-auto"
                                      size="txtInterSemiBold20Black90001"
                                    >
                                      ADA
                                    </Text>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_01 w-auto"
                                        size="txtInterMedium16Gray50001"
                                      >
                                        CardanoBEP2
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[119px] items-start justify-between w-auto sm:w-full">
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -1.95%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -12.92%
                                </Text>
                                <Text
                                  className="text-red-A700_01 text-xl w-auto"
                                  size="txtInterSemiBold20RedA70001"
                                >
                                  -50.30%
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                        <div className="absolute flex flex-col md:gap-10 gap-[74px] h-max inset-y-[0] items-start justify-start left-[43%] my-auto w-auto">
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $1838.35
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $1.00
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $1.00
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $0.78
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $13.84
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $26515.00
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $5.97
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $59.62
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $0.29
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $0.32
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $0.20
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $0.00
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $18.78
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl w-auto"
                            size="txtInterSemiBold20Black90001"
                          >
                            $0.32
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-[74px] items-start justify-start w-auto">
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          221.02B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          83.34B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          28.44B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          7.28B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          4.78B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          4.16B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          3.09B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          860.06B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          819.65B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          221.02B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          221.02B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          10.18B
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          0
                        </Text>
                        <Text
                          className="text-black-900_01 text-xl w-auto"
                          size="txtInterSemiBold20Black90001"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[1261px] inset-[0] justify-center m-auto"
                  src="images/img_group28.svg"
                  alt="groupTwentyEight"
                />
              </div>
              <div className="bg-teal-900 flex flex-row items-center justify-start mb-[773px] md:mt-0 mt-[681px] p-[15px] w-[8%] md:w-full">
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
              className="h-36 sm:h-auto mt-[146px] object-cover w-full"
              src="images/img_frame4.png"
              alt="frameFour"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardWatchlistbrandsPage;
