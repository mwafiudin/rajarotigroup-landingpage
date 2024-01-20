import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div
          className="bg-cover bg-gray-800_01 bg-no-repeat flex flex-col items-center justify-center p-[85px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group48.svg')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start my-[17px]">
            <div className="flex flex-col md:flex-row md:gap-10 gap-[145px] items-start justify-start">
              <Img
                className="h-[130px] md:h-auto object-cover w-[130px]"
                src="images/img_image1.png"
                alt="imageOne_One"
              />
              <div className="flex flex-col md:flex-row md:gap-10 gap-40 items-start justify-start">
                <div className="flex flex-col gap-8 items-start justify-start w-auto">
                  <Text
                    className="text-[22px] text-gray-100 sm:text-lg md:text-xl w-auto"
                    size="txtMontserratRomanSemiBold22"
                  >
                    Company
                  </Text>
                  <ul className="flex flex-col gap-8 items-start justify-start w-full common-column-list">
                    <li>
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtNunitoRegular20"
                      >
                        Beranda
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtNunitoRegular20"
                      >
                        Tentang Kami
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtNunitoRegular20"
                      >
                        Hubungi Kami
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-auto">
                  <Text
                    className="text-[22px] text-gray-100 sm:text-lg md:text-xl w-auto"
                    size="txtMontserratRomanSemiBold22"
                  >
                    Contact
                  </Text>
                  <ul className="flex flex-col gap-[31px] items-start justify-start w-full common-column-list">
                    <li>
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtNunitoRegular20"
                      >
                        (+62) 822-9838-4727
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtNunitoRegular20"
                      >
                        admin@rajarotigroup.com
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtNunitoRegular20"
                      >
                        rajarotigroup.com
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-auto">
                  <Text
                    className="text-[22px] text-gray-100 sm:text-lg md:text-xl w-auto"
                    size="txtMontserratRomanSemiBold22"
                  >
                    Location
                  </Text>
                  <Text
                    className="max-w-[315px] md:max-w-full text-gray-100 text-xl"
                    size="txtNunitoRegular20"
                  >
                    Jl. Mutiara Gading City, Setia Asih, Kec. Tarumajaya,
                    Kabupaten Bekasi, Jawa Barat 17215
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[19px] items-center justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-[22px] items-start justify-start w-auto">
                <Button
                  className="flex h-11 items-center justify-center w-11"
                  shape="circle"
                  color="orange_400"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_facebookf1.svg"
                    alt="facebookfOne"
                  />
                </Button>
                <Button
                  className="flex h-11 items-center justify-center w-11"
                  shape="circle"
                  color="orange_400"
                  size="sm"
                  variant="fill"
                >
                  <Img className="h-5" src="images/img_info.svg" alt="info" />
                </Button>
                <Button
                  className="flex h-11 items-center justify-center w-11"
                  shape="circle"
                  color="orange_400"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_twitter1.svg"
                    alt="twitterOne"
                  />
                </Button>
                <Button
                  className="flex h-11 items-center justify-center w-11"
                  shape="circle"
                  color="orange_400"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_linkedin1.svg"
                    alt="linkedinOne"
                  />
                </Button>
              </div>
              <Line className="bg-gray-100 h-px w-full" />
              <Text
                className="text-gray-100 text-lg w-auto"
                size="txtNunitoRegular18Gray100"
              >
                Copyright @ 2022. All Right Reserved.
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
