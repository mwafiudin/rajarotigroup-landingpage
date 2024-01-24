import React, { useState } from "react";

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
  const ButtonTab = ({ title, index }) => {
    return (
      <Button
        className="cursor-pointer font-medium h-10 min-w-[306px] rounded-[20px] text-base text-center tracking-[0.40px]"
        color="gray_700"
        size="xs"
        variant="outline"
        onClick={() => setTab(index)}
      >
        {title}
      </Button>
    );
  };

  return (
    <>
      <div className="bg-gray-100 font-nunito sm:gap-10 md:gap-10 gap-[200px] items-center w-full">
        <Header className="flex relative mx-auto w-full items-center px-4 md:px-24 py-12" />
        <div className="flex flex-col p-4 md:p-24">
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
          <div className="flex flex-col gap-[52px] items-start mt-[89px] w-full">
            <div className="flex overflow-scroll w-full gap-2 items-start">
              {page.map((title, i) => (
                <ButtonTab title={title} index={i + 1} />
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
