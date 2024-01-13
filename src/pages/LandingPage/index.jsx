import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-nunito sm:gap-10 md:gap-10 gap-[90px] items-center justify-end mx-auto pt-[50px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:pl-[] md:pr-[] sm:px-5 px-[12%] py-2 w-full" />
        <div className="flex flex-col md:gap-10 items-center justify-start w-full">
          <div className="md:h-[11381px] sm:h-[7902px] h-[8500px] md:px-5 relative w-full">
            <Img
              className="h-[301px] mt-[607px] mx-auto object-cover md:w-full"
              src="images/img_group10680.png"
              alt="804191traced"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[184px] h-auto inset-[0] items-center justify-between m-24 w-auto md:w-full">
              <div className="flex flex-col md:gap-10 gap-[106px] items-center justify-start md:px-10 sm:px-5 px-[12%] w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                    <Img
                      className="h-[50px] w-10"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                    <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
                      <Text
                        className="max-w-[1291px] md:max-w-full sm:text-[41px] md:text-[47px] text-[55px] text-center text-gray-800 tracking-[0.55px]"
                        size="txtMontserratBold55"
                      >
                        Raja Roti Group - Produsen Tepung Roti Berkualitas
                        Tinggi No 1 di Indonesia
                      </Text>
                      <Text
                        className="leading-[34.00px] max-w-[828px] md:max-w-full text-center text-gray-600 text-xl tracking-[0.20px]"
                        size="txtNunitoMedium20"
                      >
                        Lorem ipsum dolor sit amet consectetur. Viverra cum
                        risus ultrices gravida diam. Nascetur orci enim sodales
                        scelerisque id vestibulum eleifend in. Eget orci
                        pharetra.
                      </Text>
                    </div>
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
                <Img
                  className="md:h-[570px] h-auto object-cover rounded-[50px] w-auto md:w-full"
                  src="images/img_img20230924195035.png"
                  alt="img202309241950"
                />
              </div>
              <div
                className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-auto md:w-full"
                id="block2"
              >
                <div className="flex flex-col gap-1.5 items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-[39px] items-center justify-start w-auto md:w-full">
                    <div className="flex flex-col font-montserrat gap-5 items-center justify-start w-auto md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-orange-400 sm:text-xl tracking-[0.24px] w-auto"
                        size="txtMontserratRomanSemiBold24"
                      >
                        Tentang Kami
                      </Text>
                      <Text
                        className="max-w-[855px] md:max-w-full sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-800 tracking-[0.15px]"
                        size="txtMontserratSemiBold50"
                      >
                        Dipercaya oleh Brand Terkemuka di Indonesia
                      </Text>
                    </div>
                    <Text
                      className="leading-[34.00px] max-w-[855px] md:max-w-full text-center text-gray-600 text-xl tracking-[0.20px]"
                      size="txtNunitoMedium20"
                    >
                      Apa yang membedakan Raja Roti Group adalah kemitraan kuat
                      dan berkelanjutan kami dengan beberapa merek paling
                      terkemuka di Indonesia. Tepung roti berkualitas tinggi
                      kami telah menjadi bagian penting dari nama-nama rumah
                      tangga terkenal seperti Mamasuka, Kobe, dan banyak lagi.
                      Kemitraan ini menjadi bukti komitmen kami yang teguh dalam
                      menyajikan tepung roti terbaik di industri ini, yang
                      konsisten melampaui harapan.
                    </Text>
                  </div>
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
                <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-center justify-start w-auto md:w-full">
                  <div className="bg-white-A700_bc flex flex-col h-[303px] items-center justify-start p-[46px] md:px-10 sm:px-5 rounded-[26px] w-[303px]">
                    <Img
                      className="h-[85px] md:h-auto my-[63px] object-cover w-full"
                      src="images/img_image15.png"
                      alt="imageFifteen"
                    />
                  </div>
                  <div className="bg-white-A700_bc flex flex-col h-[347px] items-center justify-center p-[70px] md:px-10 sm:px-5 rounded-[26px] w-[347px]">
                    <Img
                      className="h-[194px] md:h-auto my-1.5 object-cover w-full"
                      src="images/img_image19.png"
                      alt="imageNineteen"
                    />
                  </div>
                  <div className="bg-white-A700_bc flex flex-col h-[303px] items-center justify-start p-[37px] sm:px-5 rounded-[26px] w-[303px]">
                    <Img
                      className="h-[46px] md:h-auto my-[91px] object-cover w-full"
                      src="images/img_image18.png"
                      alt="imageEighteen"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-montserrat md:gap-10 gap-[60px] items-center justify-start w-auto md:w-full">
                <Text
                  className="max-w-[1084px] md:max-w-full sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-800 tracking-[0.15px]"
                  size="txtMontserratSemiBold50"
                >
                  Teknologi Inovatif, Kualitas Terbaik, Partner Menuju Sukses
                </Text>
                <div className="flex flex-col font-nunito md:gap-10 gap-[106px] items-center justify-start w-auto md:w-full">
                  <div className="flex md:flex-col flex-row gap-[55px] items-center justify-start w-auto md:w-full">
                    <Img
                      className="h-[406px] sm:h-auto object-cover rounded-[25px] w-[552px] md:w-full"
                      src="images/img_screenshot20230925214358.png"
                      alt="screenshot20230"
                    />
                    <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                      <Text
                        className="leading-[34.00px] max-w-[610px] md:max-w-full text-gray-600 text-xl tracking-[0.20px]"
                        size="txtNunitoMedium20"
                      >
                        Di Raja Roti Group, kami bangga dengan komitmen kami
                        untuk menyajikan hanya tepung roti terbaik kepada
                        pelanggan terhormat kami. Dengan mesin-mesin canggih
                        kami, kami telah menguasai seni produksi tepung roti
                        berkualitas tinggi menggunakan bahan-bahan terbaik dan
                        teknik-teknik tercanggih. Proses produksi modern kami
                        menjamin tekstur yang konsisten, rasa yang luar biasa,
                        dan masa simpan yang maksimal.
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
                  <div className="flex flex-col md:gap-10 gap-[106px] items-start justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-center justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-[25px] items-start justify-start w-auto md:w-full">
                        <div className="flex md:flex-col flex-row font-montserrat gap-8 items-center justify-start w-full">
                          <Text
                            className="bg-gray-800 h-[60px] justify-center sm:pl-5 pl-[27px] pr-2.5 pt-0.5 rounded-[50%] md:text-5xl text-6xl text-gray-100 tracking-[0.18px] w-[60px]"
                            size="txtMontserratSemiBold60"
                          >
                            1
                          </Text>
                          <Text
                            className="flex-1 max-w-[518px] md:max-w-full sm:text-[31px] md:text-[33px] text-[35px] text-gray-800 tracking-[0.11px]"
                            size="txtMontserratSemiBold35"
                          >
                            Inovasi Teknologi untuk Meningkatkan Industri
                          </Text>
                        </div>
                        <Text
                          className="leading-[34.00px] max-w-[610px] md:max-w-full text-gray-600 text-xl tracking-[0.20px]"
                          size="txtNunitoMedium20"
                        >
                          Di Raja Roti Group, kami memegang standar tertinggi
                          dalam hal teknologi produksi Tepung Roti berkualitas
                          tinggi. Kami mengikuti perkembangan terbaru dalam
                          teknologi pembuatan tepung roti dan selalu mencari
                          cara baru untuk meningkatkan efisiensi, kualitas, dan
                          konsistensi produk kami. Kami yakin, dengan kombinasi
                          teknologi inovatif dan tim kami yang berprestasi, Raja
                          Roti Group dapat terus memimpin industri ini dan
                          memberikan tepung roti terbaik bagi pelanggan kami.
                        </Text>
                      </div>
                      <div className="h-[426px] relative w-[47%] md:w-full">
                        <div className="bg-gradient  h-[231px] ml-auto mr-[18px] mt-[15px] rounded-[115px] w-[231px]"></div>
                        <div className="absolute h-[426px] inset-[0] justify-center m-auto w-full">
                          <div className="h-[426px] m-auto w-full">
                            <div className="h-[426px] m-auto w-full">
                              <Img
                                className="h-[426px] m-auto object-cover w-full"
                                src="images/img_image22.png"
                                alt="imageTwentyTwo"
                              />
                              <Img
                                className="absolute h-[116px] left-[33%] top-1/4 w-[116px]"
                                src="images/img_entyponetwork.svg"
                                alt="entyponetwork"
                              />
                            </div>
                            <div className="absolute bg-gray-100 bottom-[7%] h-[231px] left-[5%] rounded-[115px] w-[231px]"></div>
                          </div>
                          <div className="absolute bg-white-A700 flex flex-col h-[150px] inset-x-[0] items-center justify-start mx-auto p-11 md:px-10 sm:px-5 rounded-[50%] shadow-bs1 top-[28%] w-[150px]">
                            <Img
                              className="h-[60px] w-[60px]"
                              src="images/img_group10678.svg"
                              alt="group10678"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-center justify-start w-full">
                      <div className="h-[426px] relative w-[47%] md:w-full">
                        <div className="bg-gradient  h-[231px] ml-auto mr-[18px] mt-[15px] rounded-[115px] w-[231px]"></div>
                        <div className="absolute h-[426px] inset-[0] justify-center m-auto w-full">
                          <div className="h-[426px] m-auto w-full">
                            <div className="h-[426px] m-auto w-full">
                              <Img
                                className="h-[426px] m-auto object-cover w-full"
                                src="images/img_image22.png"
                                alt="imageTwentyTwo_One"
                              />
                              <Img
                                className="absolute h-[116px] left-[33%] top-1/4 w-[116px]"
                                src="images/img_entyponetwork.svg"
                                alt="entyponetwork_One"
                              />
                            </div>
                            <div className="absolute bg-gray-100 bottom-[7%] h-[231px] left-[5%] rounded-[115px] w-[231px]"></div>
                          </div>
                          <div className="absolute bg-white-A700 flex flex-col h-[150px] inset-x-[0] items-center justify-start mx-auto p-11 md:px-10 sm:px-5 rounded-[50%] shadow-bs1 top-[28%] w-[150px]">
                            <Img
                              className="h-[60px] w-[60px]"
                              src="images/img_solarhandstarslineduotone.svg"
                              alt="solarhandstarsl"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[25px] items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row font-montserrat gap-8 items-center justify-start w-full">
                          <Text
                            className="bg-gray-800 h-[60px] justify-center sm:pl-5 pl-[22px] pr-[3px] rounded-[50%] md:text-5xl text-6xl text-gray-100 tracking-[0.18px] w-[60px]"
                            size="txtMontserratSemiBold60"
                          >
                            2
                          </Text>
                          <Text
                            className="flex-1 max-w-[518px] md:max-w-full sm:text-[31px] md:text-[33px] text-[35px] text-gray-800 tracking-[0.11px]"
                            size="txtMontserratSemiBold35"
                          >
                            Kualitas terbaik adalah Suatu Kewajiban
                          </Text>
                        </div>
                        <Text
                          className="leading-[34.00px] max-w-[610px] md:max-w-full text-gray-600 text-xl tracking-[0.20px]"
                          size="txtNunitoMedium20"
                        >
                          Kualitas tidak hanya kata yang tersurat. Kualitas
                          merupakan sebuah prinsip yang terus dipraktikkan tanpa
                          henti oleh Raja Roti Group. Kami memanfaatkan
                          bahan-bahan terbaik dan teknologi produksi canggih
                          kami untuk memastikan bahwa kualitas yang tidak
                          terkalahkan terlihat dan dirasakan pada setiap produk
                          tepung roti yang kami hasilkan. Kami percaya bahwa
                          kualitas harus menjadi sebuah keputusan dan tidak
                          dapat dikompromikan. Dengan memilih Raja Roti Group,
                          Anda memilih untuk memberikan yang terbaik bagi bisnis
                          Anda.
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-center justify-start w-full">
                      <div className="flex flex-1 flex-col gap-[25px] items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row font-montserrat gap-8 items-center justify-start w-full">
                          <Text
                            className="bg-gray-800 h-[60px] justify-center sm:pl-5 pl-6 pt-0.5 rounded-[50%] md:text-5xl text-6xl text-gray-100 tracking-[0.18px] w-[60px]"
                            size="txtMontserratSemiBold60"
                          >
                            3
                          </Text>
                          <Text
                            className="flex-1 max-w-[518px] md:max-w-full sm:text-[31px] md:text-[33px] text-[35px] text-gray-800 tracking-[0.11px]"
                            size="txtMontserratSemiBold35"
                          >
                            Partner Anda Menuju Kesuksesan
                          </Text>
                        </div>
                        <Text
                          className="leading-[34.00px] max-w-[610px] md:max-w-full text-gray-600 text-xl tracking-[0.20px]"
                          size="txtNunitoMedium20"
                        >
                          Kami tidak hanya menjadi produsen tepung roti. Kami
                          menjadi mitra terpercaya dalam kesuksesan bisnis Anda.
                          Kami memahami bahwa setiap mitra bisnis memiliki
                          kebutuhan dan persyaratan yang berbeda-beda. Oleh
                          karena itu, kami menawarkan solusi tepung roti yang
                          disesuaikan dengan setiap kebutuhan khusus, dan selalu
                          siap membantu Anda dalam mencapai kesuksesan bisnis
                          Anda. Kami yakin, dalam kemitraan ini, kesuksesan Anda
                          adalah kesuksesan Raja Roti Group.
                        </Text>
                      </div>
                      <div className="h-[426px] relative w-[47%] md:w-full">
                        <div className="bg-gradient  h-[231px] ml-auto mr-[18px] mt-[15px] rounded-[115px] w-[231px]"></div>
                        <div className="absolute h-[426px] inset-[0] justify-center m-auto w-full">
                          <div className="h-[426px] m-auto w-full">
                            <div className="h-[426px] m-auto w-full">
                              <Img
                                className="h-[426px] m-auto object-cover w-full"
                                src="images/img_image22.png"
                                alt="imageTwentyTwo_Two"
                              />
                              <Img
                                className="absolute h-[116px] left-[33%] top-1/4 w-[116px]"
                                src="images/img_entyponetwork.svg"
                                alt="entyponetwork_Two"
                              />
                            </div>
                            <div className="absolute bg-gray-100 bottom-[7%] h-[231px] left-[5%] rounded-[115px] w-[231px]"></div>
                          </div>
                          <div className="absolute bg-white-A700 flex flex-col h-[150px] inset-x-[0] items-center justify-start mx-auto p-11 md:px-10 sm:px-5 rounded-[50%] shadow-bs1 top-[28%] w-[150px]">
                            <Img
                              className="h-[60px] w-[60px]"
                              src="images/img_solaruserhand.svg"
                              alt="solaruserhand"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-montserrat md:gap-10 gap-20 items-center justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-orange-400 sm:text-xl tracking-[0.24px] w-auto"
                      size="txtMontserratRomanSemiBold24"
                    >
                      Brand Kami
                    </Text>
                    <Text
                      className="max-w-[1084px] md:max-w-full sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-800 tracking-[0.15px]"
                      size="txtMontserratSemiBold50"
                    >
                      Tingkatkan Kreasi Kuliner Anda dengan Tepung Roti
                      Berkualitas Kami
                    </Text>
                    <div className="flex md:flex-col flex-row font-nunito gap-4 items-center justify-center w-full">
                      <Img
                        className="md:flex-1 h-[343px] sm:h-auto object-cover w-[628px] md:w-full"
                        src="images/img_image26.png"
                        alt="imageTwentySix"
                      />
                      <div className="flex sm:flex-1 flex-col gap-[52px] items-start justify-start w-[504px] sm:w-full">
                        <Text
                          className="leading-[34.00px] max-w-[504px] md:max-w-full text-gray-600 text-xl tracking-[0.20px]"
                          size="txtNunitoMedium20"
                        >
                          Raja Roti Group memiliki berbagai merek yang
                          menjangkau berbagai preferensi kuliner. Dari seorang
                          chef profesional hingga ibu rumah tangga, merek-merek
                          kami telah dirancang dengan cermat untuk memenuhi
                          kebutuhan spesifik Anda. Setiap merek mencerminkan
                          semangat kami dalam menciptakan kualitas di setiap
                          serbuk roti.
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
                <div className="bg-gray-200 flex flex-col font-nunito items-start justify-start md:px-10 sm:px-5 px-[346px] py-[72px] w-auto md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center w-auto md:w-full">
                    <div className="flex flex-col gap-10 h-[273px] md:h-auto items-center justify-center w-auto">
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
                    <div className="flex flex-col gap-10 h-[273px] md:h-auto items-center justify-center">
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
              </div>
              <div
                className="flex flex-col font-montserrat md:gap-10 gap-[60px] items-center justify-start w-auto md:w-full"
                id="block1"
              >
                <div className="flex flex-col items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-orange-400 sm:text-xl tracking-[0.24px] w-auto"
                        size="txtMontserratRomanSemiBold24"
                      >
                        Galeri
                      </Text>
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-800 tracking-[0.15px]"
                        size="txtMontserratSemiBold50"
                      >
                        <>
                          Momen Bersama
                          <br />
                          Raja Roti Group
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-center w-full">
                    <div className="flex flex-col gap-12 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-12 gap-[43px] items-center justify-between w-full">
                        <Img
                          className="md:flex-1 h-[400px] sm:h-auto object-cover rounded-[20px] w-[726px] md:w-full"
                          src="images/img_screenshot20230925210243.png"
                          alt="screenshot20230_One"
                        />
                        <Img
                          className="md:flex-1 h-[400px] sm:h-auto object-cover rounded-[20px] w-[455px] md:w-full"
                          src="images/img_screenshot20230926211851.png"
                          alt="screenshot20230_Two"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Img
                          className="md:flex-1 h-[368px] sm:h-auto object-cover rounded-[25px] w-[389px] md:w-full"
                          src="images/img_screenshot20230926214930.png"
                          alt="screenshot20230_Three"
                        />
                        <Img
                          className="md:flex-1 h-[368px] sm:h-auto object-cover rounded-[20px] w-[365px] md:w-full"
                          src="images/img_screenshot20230925214440.png"
                          alt="screenshot20230_Four"
                        />
                        <Img
                          className="md:flex-1 h-[368px] sm:h-auto object-cover rounded-[20px] w-[388px] md:w-full"
                          src="images/img_screenshot20230925210707_368x388.png"
                          alt="screenshot20230_Five"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col font-montserrat h-[572px] items-center justify-end p-24 md:px-10 sm:px-5 rounded-[25px] w-[85%] md:w-full"
                style={{ backgroundImage: "url('images/img_frame11381.png')" }}
              >
                <div className="flex flex-col gap-[45px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="max-w-[764px] md:max-w-full sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-200_01 tracking-[0.15px]"
                    size="txtMontserratSemiBold50Gray20001"
                  >
                    Jadikan Kami Mitra Keberhasilan Anda
                  </Text>
                  <div className="flex flex-col font-nunito gap-10 items-center justify-start w-auto md:w-full">
                    <Text
                      className="leading-[34.00px] max-w-[995px] md:max-w-full text-center text-white-A700_01 text-xl tracking-[0.20px]"
                      size="txtNunitoMedium20WhiteA70001"
                    >
                      Dalam dunia yang terus berkembang, hanya ada satu pilihan
                      yang tak terbantahkan: Raja Roti Group. Dikenal sebagai
                      produsen tepung roti terkemuka dengan teknologi inovatif
                      dan kualitas terbaik, kami menjadi penggerak utama dari
                      kemajuan industri tepung roti.
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
          <Footer className="flex font-montserrat items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
