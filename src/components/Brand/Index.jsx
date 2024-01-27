import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img } from "components";

const Brand = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {Array(6)
          .fill("images/brand")
          .map((e, i) => {
            return (
              <div key={i}>
                <Img
                  className={`${i % 2 === 0 ? "w-[360px] p-2" : "p-10"}`}
                  src={`${e}${Number(i + 1)}.png`}
                  alt={`brand${i}`}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Brand;
