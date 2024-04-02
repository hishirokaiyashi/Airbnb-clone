import React from "react";

// Import Swiper React components
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { cardImages } from "../../constant/CONSTANT";
const CardDetail = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <Swiper
          slidesPerView={1}
          // spaceBetween={8}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="rounded-2xl group cursor-pointer"
        >
          {cardImages.map((el, index) => (
            <SwiperSlide key={index}>
              <div className="relative px-1 ">
                <img
                  src={el.image}
                  alt={el.image}
                  className=" rounded-2xl h-[320px] w-full object-cover"
                />
                <div className="absolute right-[20px] z-10 top-[20px] text-[1.375rem] rounded-full flex items-center cursor-pointer hover:scale-[1.08]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 72 72"
                  >
                    <path
                      fill="#5e5e5a"
                      d="M59.5 25.48c0-6.903-5.596-12.5-12.5-12.5a12.497 12.497 0 0 0-11 6.56a12.497 12.497 0 0 0-11-6.56c-6.904 0-12.5 5.597-12.5 12.5c0 2.97 1.04 5.694 2.77 7.839l-.004.003L36 59.02l20.734-25.698l-.004-.003a12.44 12.44 0 0 0 2.77-7.839"
                    />
                    <path
                      fill="none"
                      stroke="white"
                      strokeLinejoin="round"
                      strokeWidth="2.8"
                      d="M59.5 25.48c0-6.903-5.596-12.5-12.5-12.5a12.497 12.497 0 0 0-11 6.56a12.497 12.497 0 0 0-11-6.56c-6.904 0-12.5 5.597-12.5 12.5c0 2.97 1.04 5.694 2.77 7.839l-.004.003L36 59.02l20.734-25.698l-.004-.003a12.44 12.44 0 0 0 2.77-7.839Z"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-between">
        <div className="grid grid-rows-4 gap-y-[4px] tracking-wide">
          <span>
            <b>Lipa, Philipines</b>
          </span>
          <span className="text-[14px] text-[#717171]">Taal Lake</span>
          <span className="text-[14px] text-[#717171]">Apr 28 - May 3</span>
          <span className="flex gap-1">
            <b>$495</b>
            night
          </span>
        </div>
        <div className="flex gap-1 item">
          <p>
            <Icon icon="mingcute:star-fill" />
          </p>
          <p className="text-[14px]">4.88</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
