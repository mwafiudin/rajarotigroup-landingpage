import React, { useCallback, useState } from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Files from "components/Files/Files";
import {
  LaporanTahunan,
  LaporanKeuangan,
  IkhtisarKeuanganOperasional,
  Prospektus,
  PresentasiKepadaInvestor,
  LaporanKberlanjutan,
} from "components/FilesInvenstor/FilesInvestor";

const HubunganInvestorPage = () => {
  const [tab, setTab] = useState(1);
  const page = [
    "Laporan Tahunan",
    "Informasi Keuangan",
    "Ikhtisar Keuangan dan Operasional",
    "Prospektus",
    "Presentasi Kepada Investor",
    "Laporan Keberlanjutan",
  ];

  const ButtonTab = useCallback(
    ({ title, index }) => {
      return (
        <Button
          className={`${
            index === tab ? "bg-[#FFA132]" : ""
          } cursor-pointer font-medium h-10 min-w-max px-[20px] rounded-[20px] text-base text-center tracking-[0.40px]`}
          color="gray_700"
          size="xs"
          variant="outline"
          onClick={() => setTab(index)}
        >
          {title}
        </Button>
      );
    },
    [tab]
  );

  return (
    <>
      <div className="bg-gray-100 font-nunito">
        <Header className="flex sticky top-0 bg-gray-100 z-10 mx-auto w-full items-center px-[12%] pt-8" />
        <div className="flex flex-col px-[12%] pt-16 md:pt-20">
          <div className="flex flex-col gap-4 items-start">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-800 tracking-[0.15px]"
              size="txtMontserratSemiBold50"
            >
              Informasi Keuangan
            </Text>
            <Text
              className="text-center text-gray-600 text-xl tracking-[0.20px]"
              size="txtNunitoMedium20"
            >
              Informasi keuangan untuk investor yang terbit setiap bulan,
              triwulan, dan tahunan.
            </Text>
          </div>
          <div className="flex flex-col gap-[52px] items-start mt-[89px]">
            <div className="flex overflow-scroll w-full gap-2 items-start w-screen">
              {page.map((title, i) => (
                <ButtonTab key={title} title={title} index={i + 1} />
              ))}
            </div>
            {tab === 1 ? (
              <LaporanTahunan />
            ) : tab === 2 ? (
              <LaporanKeuangan />
            ) : tab === 3 ? (
              <IkhtisarKeuanganOperasional />
            ) : tab === 4 ? (
              <Prospektus />
            ) : tab === 5 ? (
              <PresentasiKepadaInvestor />
            ) : (
              tab === 6 && <LaporanKberlanjutan />
            )}
          </div>
        </div>
        <Footer className="flex font-montserrat items-center justify-center w-full" />
      </div>
    </>
  );
};

export default HubunganInvestorPage;
