import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Brand from "components/Brand/Index";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-gray-100 font-nunito items-center justify-end w-full text-center">
        <Header className="flex sticky top-0 bg-gray-100 z-10 w-full mx-auto px-[12%] items-center pt-8" />
        <div className="px-[12%] space-y-12 md:space-y-24 pt-20">
          <div className="space-y-6">
            <div className="flex justify-center">
              <Img className="" src="images/img_lock.svg" alt="lock" />
            </div>
            <div className="flex flex-col gap-8 items-center justify-start md:">
              <Text
                className="text-3xl md:text-4xl lg:text-5xl text-center text-gray-800 tracking-[0.55px]"
                size="txtMontserratBold55"
              >
                Raja Roti Group - Produsen Tepung Roti Berkualitas Tinggi No 1
                di Indonesia
              </Text>
              <Text
                className="leading-[34.00px] max-w-[828px] md:max- text-center text-gray-600 text-xl tracking-[0.20px]"
                size="txtNunitoMedium20"
              >
                Lorem ipsum dolor sit amet consectetur. Viverra cum risus
                ultrices gravida diam. Nascetur orci enim sodales scelerisque id
                vestibulum eleifend in. Eget orci pharetra.
              </Text>
            </div>
            <Button
              className="font-bold text-center tracking-[0.18px] mainButton"
              shape="round"
              color="orange_400"
              size="sm"
              variant="fill"
            >
              Tentang Kami
            </Button>
          </div>
          {/*  */}
          <Img
            className="md:px-28 rounded-xl md:w-full"
            src="images/img_img20230924195035.png"
            alt="img202309241950"
          />
          {/*  */}
          <div id="block1" className="w-full space-y-12">
            <Text
              className="text-2xl text-center text-orange-400 sm:text-xl tracking-[0.24px]"
              size="txtMontserratRomanSemiBold24"
            >
              Tentang Kami
            </Text>
            <Text
              className="md:w-1/2 mx-auto text-3xl lg:text-4xl text-center text-gray-800 tracking-[0.15px]"
              size="txtMontserratSemiBold50"
            >
              Dipercaya oleh Brand Terkemuka di Indonesia
            </Text>
            <Text
              className="md:w-3/4 mx-auto leading-[34.00px] text-center text-gray-600 text-xl tracking-[0.20px]"
              size="txtNunitoMedium20"
            >
              Apa yang membedakan Raja Roti Group adalah kemitraan kuat dan
              berkelanjutan kami dengan beberapa merek paling terkemuka di
              Indonesia. Tepung roti berkualitas tinggi kami telah menjadi
              bagian penting dari nama-nama rumah tangga terkenal seperti
              Mamasuka, Kobe, dan banyak lagi. Kemitraan ini menjadi bukti
              komitmen kami yang teguh dalam menyajikan tepung roti terbaik di
              industri ini, yang konsisten melampaui harapan.
            </Text>
            <Button
              className="font-bold text-center mainButton"
              shape="round"
              color="orange_400"
              size="sm"
              variant="fill"
            >
              Hubungi Kami
            </Button>
          </div>
          {/* BRAND */}
          <div>
            <Brand />
          </div>
          {/* */}
          <div className="space-y-16">
            <Text
              className="md:w-2/3 mx-auto text-3xl lg:text-4xl text-center text-gray-800 tracking-[0.15px]"
              size="txtMontserratSemiBold50"
            >
              Teknologi Inovatif, Kualitas Terbaik, Partner Menuju Sukses
            </Text>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8">
              <Img
                className="rounded-[25px] w-full md:w-[47%]"
                src="images/img_screenshot20230925214358.png"
                alt="screenshot20230"
              />
              <div className="flex flex-col w-full md:w-[50%] gap-[30px] items-center md:items-start justify-start">
                <Text
                  className="leading-[34.00px] text-center md:text-left text-gray-600 text-xl tracking-[0.20px]"
                  size="txtNunitoMedium20"
                >
                  Di Raja Roti Group, kami bangga dengan komitmen kami untuk
                  menyajikan hanya tepung roti terbaik kepada pelanggan
                  terhormat kami. Dengan mesin-mesin canggih kami, kami telah
                  menguasai seni produksi tepung roti berkualitas tinggi
                  menggunakan bahan-bahan terbaik dan teknik-teknik tercanggih.
                  Proses produksi modern kami menjamin tekstur yang konsisten,
                  rasa yang luar biasa, dan masa simpan yang maksimal.
                </Text>
                <Button
                  className="font-bold text-center mainButton"
                  shape="round"
                  color="orange_400"
                  size="sm"
                  variant="fill"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
            {/*POINt*/}
            <div className="flex items-center justify-between">
              <div className="md:w-[47%]">
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row font-montserrat gap-8 items-center justify-start">
                    <Img className="" src="images/n1.png" alt="p1" />
                    <Text
                      className="flex-1 text-center text-3xl md:text-2xl lg:text-3xl text-gray-800 tracking-[0.11px]"
                      size="txtMontserratSemiBold35"
                    >
                      Inovasi Teknologi untuk Meningkatkan Industri
                    </Text>
                  </div>
                  <div className="flex md:hidden">
                    <Img className="w-full" src="images/point1.png" alt="p1" />
                  </div>
                  <Text
                    className="leading-[34.00px] text-center md:text-left text-gray-600 text-xl tracking-[0.20px]"
                    size="txtNunitoMedium20"
                  >
                    Di Raja Roti Group, kami memegang standar tertinggi dalam
                    hal teknologi produksi Tepung Roti berkualitas tinggi. Kami
                    mengikuti perkembangan terbaru dalam teknologi pembuatan
                    tepung roti dan selalu mencari cara baru untuk meningkatkan
                    efisiensi, kualitas, dan konsistensi produk kami. Kami
                    yakin, dengan kombinasi teknologi inovatif dan tim kami yang
                    berprestasi, Raja Roti Group dapat terus memimpin industri
                    ini dan memberikan tepung roti terbaik bagi pelanggan kami.
                  </Text>
                </div>
              </div>
              <div className="hidden md:flex w-[47%]">
                <Img className="" src="images/point1.png" alt="p1" />
              </div>
            </div>
            {/*  */}
            <div className="flex items-center justify-between md:flex-row-reverse">
              <div className="space-y-8 w-full md:w-[47%]">
                <div className="flex flex-col md:flex-row font-montserrat gap-8 items-center justify-start">
                  <Img className="" src="images/n2.png" alt="p1" />
                  <Text
                    className="flex-1 text-center text-3xl md:text-2xl lg:text-3xl text-gray-800 tracking-[0.11px]"
                    size="txtMontserratSemiBold35"
                  >
                    Kualitas terbaik adalah Suatu Kewajiban
                  </Text>
                </div>
                <div className="flex md:hidden">
                  <Img className="w-full" src="images/point2.png" alt="p2" />
                </div>
                <Text
                  className="leading-[34.00px] text-center md:text-left text-gray-600 text-xl tracking-[0.20px]"
                  size="txtNunitoMedium20"
                >
                  Kualitas tidak hanya kata yang tersurat. Kualitas merupakan
                  sebuah prinsip yang terus dipraktikkan tanpa henti oleh Raja
                  Roti Group. Kami memanfaatkan bahan-bahan terbaik dan
                  teknologi produksi canggih kami untuk memastikan bahwa
                  kualitas yang tidak terkalahkan terlihat dan dirasakan pada
                  setiap produk tepung roti yang kami hasilkan. Kami percaya
                  bahwa kualitas harus menjadi sebuah keputusan dan tidak dapat
                  dikompromikan. Dengan memilih Raja Roti Group, Anda memilih
                  untuk memberikan yang terbaik bagi bisnis Anda.
                </Text>
              </div>
              <div className="hidden md:flex w-[47%]">
                <Img className="" src="images/point2.png" alt="p2" />
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="space-y-8 w-full md:w-[47%]">
                <div className="flex flex-col md:flex-row font-montserrat gap-8 items-center justify-start w-full">
                  <Img className="" src="images/n3.png" alt="p1" />
                  <Text
                    className="flex-1 text-center text-3xl md:text-2xl lg:text-3xl md:text-left text-gray-800 tracking-[0.11px]"
                    size="txtMontserratSemiBold35"
                  >
                    Partner Anda Menuju Kesuksesan
                  </Text>
                </div>
                <div className="flex md:hidden">
                  <Img className="w-full" src="images/point3.png" alt="p3" />
                </div>
                <Text
                  className="leading-[34.00px] text-center md:text-left text-gray-600 text-xl tracking-[0.20px]"
                  size="txtNunitoMedium20"
                >
                  Kami tidak hanya menjadi produsen tepung roti. Kami menjadi
                  mitra terpercaya dalam kesuksesan bisnis Anda. Kami memahami
                  bahwa setiap mitra bisnis memiliki kebutuhan dan persyaratan
                  yang berbeda-beda. Oleh karena itu, kami menawarkan solusi
                  tepung roti yang disesuaikan dengan setiap kebutuhan khusus,
                  dan selalu siap membantu Anda dalam mencapai kesuksesan bisnis
                  Anda. Kami yakin, dalam kemitraan ini, kesuksesan Anda adalah
                  kesuksesan Raja Roti Group.
                </Text>
              </div>
              <div className="hidden md:flex md:w-[47%]">
                <Img className="" src="images/point3.png" alt="p3" />
              </div>
            </div>
            {/*PRODUCT*/}
            <div className="flex flex-col gap-5 items-center justify-start md:w-full">
              <Text
                className="hidden md:flex text-2xl md:text-[22px] text-center text-orange-400 sm:text-xl tracking-[0.24px]"
                size="txtMontserratRomanSemiBold24"
              >
                Brand Kami
              </Text>
              <Text
                className="hidden w-2/3 mx-auto md:flex text-3xl lg:text-4xl text-center text-gray-800 tracking-[0.15px]"
                size="txtMontserratSemiBold50"
              >
                Tingkatkan Kreasi Kuliner Anda dengan Tepung Roti Berkualitas
                Kami
              </Text>
              <div className="flex flex-col md:flex-row font-nunito items-center justify-between space-y-8 md:space-x-8 w-full py-24">
                <Img
                  className="md:w-[50%]"
                  src="images/img_image26.png"
                  alt="imageTwentySix"
                />
                <Text
                  className="flex md:hidden text-3xl lg:text-4xl sm:text-[40px] md:text-[46px] text-center text-gray-800 tracking-[0.15px]"
                  size="txtMontserratSemiBold50"
                >
                  Melayani Setiap Kebutuhan Kuliner
                </Text>
                <div className="flex flex-col md:w-[46%] text-center gap-[52px] items-center md:items-start md:justify-start">
                  <Text
                    className="leading-[34.00px] text-center md:text-left text-gray-600 text-xl tracking-[0.20px]"
                    size="txtNunitoMedium20"
                  >
                    Raja Roti Group memiliki berbagai merek yang menjangkau
                    berbagai preferensi kuliner. Dari seorang chef profesional
                    hingga ibu rumah tangga, merek-merek kami telah dirancang
                    dengan cermat untuk memenuhi kebutuhan spesifik Anda. Setiap
                    merek mencerminkan semangat kami dalam menciptakan kualitas
                    di setiap serbuk roti.
                  </Text>
                  <Button
                    className="font-bold text-center mainButton"
                    shape="round"
                    color="orange_400"
                    size="sm"
                    variant="fill"
                  >
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*PRODUCT*/}
        <div className="flex py-12 bg-[#EBEBEB]">
          <div className="flex flex-col md:flex-row md:gap-10 gap-20 items-center justify-center">
            <div className="flex flex-col w-1/2 md:w-1/4 gap-10 h-[273px] md:h-auto items-center justify-center">
              <Img
                className="md:h-auto object-cover"
                src="images/img_logoroyalbreadcumb03.png"
                alt="logoroyalbreadc"
              />
              <Button
                className="cursor-pointer font-bold min-w-[262px] text-center text-lg tracking-[0.18px]"
                shape="round"
                color="gray_600"
                size="sm"
                variant="outline"
              >
                Lihat Selengkapnya
              </Button>
            </div>
            <div className="flex flex-col w-1/2 md:w-1/4 gap-10 h-[273px] md:h-auto items-center justify-center">
              <Img
                className="md:h-auto object-cover"
                src="images/img_logoecoryal02.png"
                alt="logoecoryalTwo"
              />
              <Button
                className="cursor-pointer font-bold min-w-[262px] text-center text-lg tracking-[0.18px]"
                shape="round"
                color="gray_600"
                size="sm"
                variant="outline"
              >
                Lihat Selengkapnya
              </Button>
            </div>
          </div>
        </div>

        {/*  */}
        <div id="block2" className="px-4 md:px-24 ">
          <div className="hidden md:flex flex-col gap-5 items-center justify-start md:w-full md:pt-24">
            <Text
              className="text-2xl md:text-[22px] text-center text-orange-400 sm:text-xl tracking-[0.24px] w-auto"
              size="txtMontserratRomanSemiBold24"
            >
              Galeri
            </Text>
            <Text
              className="text-4xl md:w-2/3 mx-auto text-center text-gray-800 tracking-[0.15px]"
              size="txtMontserratSemiBold50"
            >
              <>
                Momen Bersama
                <br />
                Raja Roti Group
              </>
            </Text>
          </div>

          <div className="hidden md:flex flex-wrap">
            <Img
              src="images/img_screenshot20230925210243.png"
              className="w-3/5 p-4"
            />
            <Img
              src="images/img_screenshot20230926211851_400x447.png"
              className="w-2/5 p-4"
            />
            <Img
              src="images/img_screenshot20230926214930.png"
              className="w-1/3 p-4"
            />
            <Img
              src="images/img_screenshot20230925214440.png"
              className="w-1/3 p-4"
            />
            <Img
              src="images/img_screenshot20230925210707.png"
              className="w-1/3 p-4"
            />
          </div>
          <div className="py-24 md:py-36">
            <div
              className="mx-auto bg-cover bg-no-repeat flex flex-col font-montserrat items-center justify-end p-12 md:p-24 md:pt-16 rounded-[25px] md:w-[85%]"
              style={{ backgroundImage: "url('images/img_frame11381.png')" }}
            >
              <div className="flex flex-col gap-[45px] items-center justify-start md:w-full">
                <Text
                  className="text-4xl md:w-1/2 text-center text-gray-200_01 tracking-[0.15px]"
                  size="txtMontserratSemiBold50Gray20001"
                >
                  Jadikan Kami Mitra Keberhasilan Anda
                </Text>
                <div className="flex flex-col font-nunito gap-10 items-center justify-start md:w-full">
                  <Text
                    className="leading-[34.00px] max-w-[995px] md:max-w-full text-center text-white-A700_01 text-xl tracking-[0.20px]"
                    size="txtNunitoMedium20WhiteA70001"
                  >
                    Dalam dunia yang terus berkembang, hanya ada satu pilihan
                    yang tak terbantahkan: Raja Roti Group. Dikenal sebagai
                    produsen tepung roti terkemuka dengan teknologi inovatif dan
                    kualitas terbaik, kami menjadi penggerak utama dari kemajuan
                    industri tepung roti.
                  </Text>
                  <Button
                    className="cursor-pointer font-bold min-w-[215px] text-center text-lg tracking-[0.18px]"
                    shape="round"
                    color="orange_400"
                    size="sm"
                    variant="fill"
                  >
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex font-montserrat items-center justify-center w-full" />
      </div>
    </>
  );
};

export default LandingPagePage;
