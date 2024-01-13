import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

import { handleSectionNavigation } from "utils";

const Header = (props) => {
  const navigate = useNavigate();

  function handleNavigate() {
    const win = window.open("www.wa.me/081336020195", "_blank");
    win.focus();
  }

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[83px] md:h-auto object-cover w-[83px]"
          src="images/img_image1.png"
          alt="imageOne"
        />
        <ul className="flex sm:flex-col flex-row gap-[50px] sm:hidden items-center justify-center w-auto common-row-list">
          <li>
            <a className="capitalize hover:font-bold text-gray-800 text-lg tracking-[0.18px]">
              <Text
                className="common-pointer"
                size="txtNunitoBold18"
                onClick={() => navigate("/landingpage")}
              >
                Beranda
              </Text>
            </a>
          </li>
          <li>
            <a className="capitalize hover:font-bold hover:text-gray-800 text-gray-900 text-lg tracking-[0.18px]">
              <Text
                className="common-pointer"
                size="txtNunitoRegular18"
                onClick={() => {
                  handleSectionNavigation("block2");
                }}
              >
                Tentang Kami
              </Text>
            </a>
          </li>
          <li>
            <a className="capitalize hover:font-bold hover:text-gray-800 text-gray-900 text-lg tracking-[0.18px]">
              <Text
                className="common-pointer"
                size="txtNunitoRegular18"
                onClick={() => {
                  handleSectionNavigation("block1");
                }}
              >
                Galeri
              </Text>
            </a>
          </li>
          <li>
            <a className="capitalize hover:font-bold hover:text-gray-800 text-gray-900 text-lg tracking-[0.18px]">
              <Text
                className="common-pointer"
                size="txtNunitoRegular18"
                onClick={() => navigate("/hubunganinvestor")}
              >
                Hubungan Investor
              </Text>
            </a>
          </li>
        </ul>
        <Button
          className="common-pointer !text-gray-800 font-bold md:hidden px-8 py-2.5 text-base text-center tracking-[0.16px] secondButton"
          onClick={handleNavigate}
          color="lime_900"
          size="sm"
          variant="outline"
        >
          Hubungi Kami
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
