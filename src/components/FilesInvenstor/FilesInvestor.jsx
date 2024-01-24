import { List, Line } from "components";
import Files from "components/Files/Files";

const LaporanTahunan = () => {
  return (
    <List
      className="flex flex-col gap-[33px] items-start"
      orientation="vertical"
    >
      <Files title={"Laporan Tahunan 2023"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Laporan Tahunan 2022"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Laporan Tahunan 2021"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Laporan Tahunan 2020"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
    </List>
  );
};

const LaporanKeuangan = () => {
  return (
    <List
      className="flex flex-col gap-[33px] items-start"
      orientation="vertical"
    >
      <Files title={"Laporan Keuangan 2023"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Laporan Keuangan 2022"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Laporan Keuangan 2021"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Laporan Keuangan 2020"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
    </List>
  );
};

const IkhtisarKeuanganOperasional = () => {
  return (
    <List
      className="flex flex-col gap-[33px] items-start"
      orientation="vertical"
    >
      <Files title={"Ikhtisar Keuangan 2023"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Ikhtisar Keuangan 2022"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Ikhtisar Keuangan 2021"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Ikhtisar Keuangan 2020"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
    </List>
  );
};

const Prospektus = () => {
  return (
    <List
      className="flex flex-col gap-[33px] items-start"
      orientation="vertical"
    >
      <Files title={"Prospektus 2023"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Prospektus 2022"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Prospektus 2021"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Prospektus 2020"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
    </List>
  );
};

const PresentasiKepadaInvestor = () => {
  return (
    <List
      className="flex flex-col gap-[33px] items-start"
      orientation="vertical"
    >
      <Files title={"Presentasi 2023"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Presentasi 2022"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Presentasi 2021"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Presentasi 2020"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
    </List>
  );
};

const LaporanKberlanjutan = () => {
  return (
    <List
      className="flex flex-col gap-[33px] items-start"
      orientation="vertical"
    >
      <Files title={"Laporan Keberlanjutan 2023"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Laporan Keberlanjutan 2022"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Laporan Keberlanjutan 2021"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
      <Files title={"Laporan Keberlanjutan 2020"} />
      <Line className="self-center h-px bg-black-900_35 w-full" />
    </List>
  );
};

export {
  LaporanTahunan,
  LaporanKeuangan,
  IkhtisarKeuanganOperasional,
  Prospektus,
  PresentasiKepadaInvestor,
  LaporanKberlanjutan,
};
