import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

import { handleSectionNavigation } from "utils";

const Header = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  function handleNavigate() {
    const win = window.open("www.wa.me/081336020195", "_blank");
    win.focus();
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize[0] > 1024) {
      setOpen(false);
    }
  }, [windowSize]);

  const Link = (props) => {
    return (
      <ul className={props.className}>
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
                handleSectionNavigation("block1");
              }}
            >
              Tentang Kami
            </Text>
          </a>
        </li>
        <li>
          <a className="hidden lg:flex capitalize hover:font-bold hover:text-gray-800 text-gray-900 text-lg tracking-[0.18px]">
            <Text
              className="common-pointer"
              size="txtNunitoRegular18"
              onClick={() => {
                handleSectionNavigation("block2");
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
    );
  };

  return (
    <>
      <header className={props.className}>
        <div>
          <Img
            className="h-[83px] p-4 md:p-2 md:h-auto object-cover w-[83px] hover:cursor-pointer"
            src="images/img_image1.png"
            alt="imageOne"
            onClick={() => navigate("/landingpage")}
          />
        </div>

        <div className="mx-auto">
          <Link className="hidden lg:flex flex-col lg:flex-row gap-[50px] items-center common-row-list" />
        </div>

        <div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-[#1D1D1D]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <Link
            className={`${
              open ? "" : "hidden"
            } space-y-4 absolute right-0 lg:hidden`}
          />
        </div>

        <div className="hidden lg:flex">
          <Button
            className="common-pointer !text-gray-800 font-bold px-8 py-2.5 text-base text-center tracking-[0.16px] secondButton"
            onClick={handleNavigate}
            color="lime_900"
            size="sm"
            variant="outline"
          >
            Hubungi Kami
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
