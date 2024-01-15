import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const HubunganInvestorPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-nunito sm:gap-10 md:gap-10 gap-[200px] items-center justify-end mx-auto pt-[50px] w-full">
        <div className="flex flex-col items-start justify-start max-w-[1292px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full" />
          <div className="flex flex-col gap-4 items-start justify-start mt-24 w-auto md:w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-800 tracking-[0.15px] w-auto"
              size="txtMontserratSemiBold50"
            >
              Informasi Keuangan
            </Text>
            <Text
              className="text-center text-gray-600 text-xl tracking-[0.20px] w-auto"
              size="txtNunitoMedium20"
            >
              Informasi keuangan untuk investor yang terbit setiap bulan,
              triwulan, dan tahunan.
            </Text>
          </div>
          <div className="flex flex-col gap-[52px] items-start justify-start mt-[89px] w-auto md:w-full">
            <div className="flex md:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full">
              <Button
                className="!text-gray-900 cursor-pointer font-bold h-10 min-w-[175px] rounded-[20px] text-base text-center tracking-[0.40px]"
                color="orange_400"
                size="xs"
                variant="fill"
              >
                Laporan Tahunan
              </Button>
              <Button
                className="cursor-pointer font-medium h-10 min-w-[182px] rounded-[20px] text-base text-center tracking-[0.40px]"
                color="gray_700"
                size="xs"
                variant="outline"
              >
                Laporan Keuangan
              </Button>
              <Button
                className="cursor-pointer font-medium h-10 min-w-[306px] rounded-[20px] text-base text-center tracking-[0.40px]"
                color="gray_700"
                size="xs"
                variant="outline"
              >
                Ikhtisar Keuangan dan Operasional
              </Button>
              <Button
                className="cursor-pointer font-medium h-10 min-w-[125px] rounded-[20px] text-base text-center tracking-[0.40px]"
                color="gray_700"
                size="xs"
                variant="outline"
              >
                Prospektus
              </Button>
              <Button
                className="cursor-pointer font-medium h-10 min-w-[247px] rounded-[20px] text-base text-center tracking-[0.40px]"
                color="gray_700"
                size="xs"
                variant="outline"
              >
                Presentasi Kepada Investor
              </Button>
              <Button
                className="cursor-pointer font-medium h-10 min-w-[213px] rounded-[20px] text-base text-center tracking-[0.40px]"
                color="gray_700"
                size="xs"
                variant="outline"
              >
                Laporan Keberlanjutan
              </Button>
            </div>
            <List
              className="flex flex-col gap-[33px] items-start w-auto"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-start my-0 w-auto md:w-full">
                <div className="flex flex-row gap-[7px] items-center justify-start max-w-[899px] w-full">
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_documenttextsvgrepocom.svg"
                    alt="documenttextsvg"
                  />
                  <Text
                    className="text-center text-gray-900 text-xl tracking-[0.50px] w-auto"
                    size="txtNunitoSemiBold20"
                  >
                    Laporan Tahunan 2023
                  </Text>
                </div>
                <div className="flex flex-row gap-[29px] items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[130px] rounded-[25px]"
                    leftIcon={
                      <Img
                        className="h-[30px] mr-[11px]"
                        src="images/img_eyesvgrepocom.svg"
                        alt="eye-svgrepo-com"
                      />
                    }
                    shape="round"
                    color="orange_300"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-bold text-left text-lg tracking-[0.18px]">
                      Buka
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[169px] rounded-[25px]"
                    leftIcon={
                      <Img
                        className="h-[30px] mr-[11px]"
                        src="images/img_downloadsvgrepocom.svg"
                        alt="download-svgrepo-com"
                      />
                    }
                    shape="round"
                    color="orange_400"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-bold text-left text-lg tracking-[0.18px]">
                      Download
                    </div>
                  </Button>
                </div>
              </div>
              <Line className="self-center h-px bg-black-900_35 w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-start my-0 w-auto md:w-full">
                <div className="flex flex-row gap-[7px] items-center justify-start max-w-[899px] w-full">
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_documenttextsvgrepocom.svg"
                    alt="documenttextsvg"
                  />
                  <Text
                    className="text-center text-gray-900 text-xl tracking-[0.50px] w-auto"
                    size="txtNunitoSemiBold20"
                  >
                    Laporan Tahunan 2022
                  </Text>
                </div>
                <div className="flex flex-row gap-[29px] items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[130px] rounded-[25px]"
                    leftIcon={
                      <Img
                        className="h-[30px] mr-[11px]"
                        src="images/img_eyesvgrepocom.svg"
                        alt="eye-svgrepo-com"
                      />
                    }
                    shape="round"
                    color="orange_300"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-bold text-left text-lg tracking-[0.18px]">
                      Buka
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[169px] rounded-[25px]"
                    leftIcon={
                      <Img
                        className="h-[30px] mr-[11px]"
                        src="images/img_downloadsvgrepocom.svg"
                        alt="download-svgrepo-com"
                      />
                    }
                    shape="round"
                    color="orange_400"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-bold text-left text-lg tracking-[0.18px]">
                      Download
                    </div>
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
        <Footer className="flex font-montserrat items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default HubunganInvestorPage;
