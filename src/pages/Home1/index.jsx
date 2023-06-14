import React from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { updateUserProfile } from "service/api";

import { Button, Img, Text } from "components";
import Header from "components/Header";

import "react-toastify/dist/ReactToastify.css";

const Home1Page = () => {
  const [updateprofile, setUpdateprofile] = React.useState();
  const navigate = useNavigate();

  function connectwallet() {
    const req = {};

    updateUserProfile(req)
      .then((res) => {
        setUpdateprofile(res?.data);

        navigate("/browserextension");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Connect Your Wallet to kick start");
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header
          className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full"
          connectWallet={updateprofile?.data?.profile}
          onClick={() => connectwallet()}
        />
        <div className="h-[3765px] md:h-[4518px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-4/5">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-2 items-start justify-start md:mt-0 mt-64">
                <Text
                  className="text-base text-green-300"
                  size="txtInterSemiBold16"
                >
                  CREATE YOUR CRYPTO WALLET
                </Text>
                <Text
                  className="md:text-5xl text-[76px] text-black-900 w-full"
                  size="txtInterSemiBold76"
                >
                  <span className="text-black-900 font-inter text-left font-semibold">
                    Get{" "}
                  </span>
                  <span className="text-green-300 font-inter text-left font-semibold">
                    paid
                  </span>
                  <span className="text-black-900 font-inter text-left font-semibold">
                    {" "}
                    in crypto for the work you do for your community
                  </span>
                </Text>
              </div>
              <Img
                className="h-[795px] md:h-auto object-cover"
                src="images/img_rectangle4.png"
                alt="rectangleFour"
              />
            </div>
          </div>
          <Img
            className="absolute h-[414px] object-cover right-[33%] top-[7%] w-[18%]"
            src="images/img_rectangle6.png"
            alt="rectangleSix"
          />
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pt-[1191px] w-full">
            <div className="flex flex-col md:gap-10 gap-[316px] items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-[81%] md:w-full">
                <Text
                  className="sm:text-[31px] md:text-[37px] text-[41px] text-black-900"
                  size="txtInterMedium41"
                >
                  Make some crypto making what you love
                </Text>
                <Text
                  className="mt-8 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtInterMedium28"
                >
                  We’ve got all the tips for getting paid while staying true to
                  your brand.
                </Text>
                <div className="flex md:flex-col flex-row gap-[29px] items-start justify-end md:ml-[0] ml-[153px] mt-[158px] w-[91%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[613px] justify-start mb-[161px] w-[52%] md:w-full">
                    <div className="h-[729px] relative w-[66%] sm:w-full">
                      <div className="absolute h-[729px] inset-[0] justify-center m-auto w-[72%]">
                        <Img
                          className="h-[729px] m-auto object-cover rounded-[37px] w-full"
                          src="images/img_rectangle109.png"
                          alt="rectangle109"
                        />
                        <div className="absolute flex flex-row gap-3.5 items-center justify-center left-[7%] top-[4%] w-[36%]">
                          <div className="bg-blue_gray-100 h-[34px] rounded-[50%] w-[34px]"></div>
                          <div className="bg-blue_gray-100 h-[11px] my-[11px] w-3/5"></div>
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[8%] flex flex-col h-[104px] inset-x-[0] items-center justify-start mx-auto p-[34px] sm:px-5 rounded-[10px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group24.svg')",
                        }}
                      >
                        <div className="flex sm:flex-col flex-row gap-[17px] items-center justify-start my-[3px] w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtInterMedium24"
                          >
                            Paid partnership with
                          </Text>
                          <div className="bg-blue_gray-100 h-[22px] sm:mt-0 my-[3px] w-[34%]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[34px] w-[96%] md:w-full">
                      <Text
                        className="text-[17px] text-green-300"
                        size="txtInterBold17"
                      >
                        WORKING WITH CREATORS
                      </Text>
                      <Text
                        className="mt-[7px] sm:text-[31px] md:text-[37px] text-[41px] text-black-900 w-full"
                        size="txtInterMedium41"
                      >
                        Partner with creators that connect with your brand
                      </Text>
                      <Text
                        className="mt-[22px] text-[22px] text-black-900 sm:text-lg md:text-xl w-[96%] sm:w-full"
                        size="txtInterMedium22"
                      >
                        Only work with the best content creators to promote your
                        brand to newer audiences that will enjoy having your
                        products or services.{" "}
                      </Text>
                      <Button
                        className="common-pointer border-2 border-green-300 border-solid cursor-pointer font-medium leading-[normal] min-w-[308px] mt-[42px] py-[22px] rounded-[32px] text-base text-center text-green-300"
                        onClick={() => navigate("/brandaccount")}
                      >
                        PARTNER WITH CREATORS
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[267px] w-[47%] md:w-full">
                    <Text
                      className="text-[17px] text-green-300"
                      size="txtInterBold17"
                    >
                      WORKING WITH BRANDS
                    </Text>
                    <Text
                      className="mt-[7px] sm:text-[31px] md:text-[37px] text-[41px] text-black-900"
                      size="txtInterMedium41"
                    >
                      Partner with your favorite brands
                    </Text>
                    <Text
                      className="mt-5 text-[22px] text-black-900 sm:text-lg md:text-xl w-full"
                      size="txtInterMedium22"
                    >
                      By creating branded content that fits your style, you have
                      the power to earn your way and grow your following.{" "}
                    </Text>
                    <Button
                      className="common-pointer border-2 border-green-300 border-solid cursor-pointer font-medium leading-[normal] min-w-[372px] sm:min-w-full mt-[51px] py-[22px] rounded-[32px] text-base text-center text-green-300"
                      onClick={() => navigate("/creatoraccount")}
                    >
                      EARN WITH BRANDED CONTENT
                    </Button>
                    <div className="md:h-[1306px] h-[729px] md:ml-[0] ml-[88px] mt-[577px] relative w-[52%]">
                      <Img
                        className="h-[729px] m-auto object-cover rounded-[37px] w-full"
                        src="images/img_rectangle7.png"
                        alt="rectangleSeven"
                      />
                      <div className="absolute flex flex-col md:gap-10 gap-[550px] h-max inset-y-[0] justify-start left-[7%] my-auto w-[63%]">
                        <div className="flex flex-row gap-3.5 items-center justify-start w-[57%] md:w-full">
                          <div className="bg-blue_gray-100 h-[34px] rounded-[50%] w-[34px]"></div>
                          <div className="bg-blue_gray-100 h-[11px] my-[11px] w-3/5"></div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[77px] items-start justify-end md:ml-[0] ml-[49px] p-4 w-[77%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group25.svg')",
                          }}
                        >
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] mt-3.5 w-[76%] md:w-full">
                            <div className="bg-blue_gray-100 h-[9px] w-full"></div>
                            <div className="flex flex-row gap-[9px] items-end justify-start w-[83%] md:w-full">
                              <Text
                                className="text-[17px] text-white-A700"
                                size="txtInterMedium17"
                              >
                                $
                              </Text>
                              <div className="bg-blue_gray-100 h-[9px] mb-1 mt-2 w-3/4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-36 sm:h-auto object-cover w-full"
                src="images/img_frame4.png"
                alt="frameFour"
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home1Page;
