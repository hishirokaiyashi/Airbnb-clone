import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Switch } from "antd";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Navigation } from "swiper/modules";
import { getAllCategories } from "../../api/categoryApi";
import { Category, SliderCaterogy } from "../../type/sliderCategory.type";
import SliderCaterogySkeleton from "../Skeleton/SliderCategorySkeleton/SliderCaterogySkeleton";

const SliderCategory = () => {
  // Queries
  const {
    data: fetchDataCategories,
    isLoading
  }= useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const [activeCategoryItem, setActiveCategoryItem] = useState<Category>();

  useEffect(() => {
    if (
      !isLoading &&
      fetchDataCategories &&
      fetchDataCategories.data.categories.length > 0
    ) {
      setActiveCategoryItem(fetchDataCategories.data.categories[0]);
    }
  }, [fetchDataCategories, isLoading]);

  const handleSetActiveCategoryItem = (type: Category) => {
    setActiveCategoryItem(type);
  };
  const onChange = (checked:boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="grid grid-cols-[1010px_minmax(0,1fr)] gap-4">
      <div className="max-w-[1010px] relative">
        <div className="relative arrow-left arrow hover:scale-[1.04] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] before:absolute before:content-[''] before:top-[-20px] before:right-[-20px] before:w-[10px] before:h-[78px] before:bg-[linear-gradient(to_left,rgba(255,255,255,1),rgba(255,255,255,0))] before:z-[0] before:rounded-full before:pointer-events-none before:cursor-default">
          <Icon
            icon="material-symbols:keyboard-arrow-left"
            className="text-black"
          />
        </div>
        <div className="relative arrow-right arrow hover:scale-[1.04] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] before:absolute before:content-[''] before:top-[-20px] before:left-[-63px] before:w-[60px] before:h-[78px] before:bg-[linear-gradient(to_left,rgba(255,255,255,1),rgba(255,255,255,0))] before:z-[0] before:rounded-full before:pointer-events-none before:cursor-default">
          <Icon
            icon="material-symbols:keyboard-arrow-right"
            className="text-black"
          />
        </div>

        <Swiper
          slidesPerView={11}
          slidesPerGroup={9}
          spaceBetween={50}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
            disabledClass: "disabled_swiper_button",
          }}
          modules={[Navigation]}
        >
          {isLoading && (
            <div className="flex gap-[50px]">
              {Array.from({ length: 11 }, (_, index) => (
                <SliderCaterogySkeleton key={index} />
              ))}
            </div>
          )}
          {!isLoading &&
            fetchDataCategories?.data?.categories?.map((el, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => handleSetActiveCategoryItem(el)}
                  className={`${
                    el === activeCategoryItem
                      ? "relative font-semibold text-black after:absolute after:content-[''] after:h-[2px] after:left-0 after:w-full after:bottom-0 after:text-black after:bg-black "
                      : ""
                  } cursor-pointer h-[78px] box-border flex flex-col justify-center items-center gap-[8px] text-[#717171] hover:text-black`}
                >
                  <div className="h-[24px] w-[24px]">
                    <Icon icon={el.icon} className="text-[28px]" />
                  </div>
                  <p className="text-[12px] whitespace-nowrap ">{el.label}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="flex h-[48px] text-black font-semibold min-w-[48px] items-center border rounded-[12px] py-[9px] gap-[8px] px-[1rem]">
            <div className="w-[16px] h-[16px]">
              <Icon icon="mi:filter" />
            </div>
            <span className="text-[12px]">Filters</span>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex h-[48px] text-black font-semibold items-center border rounded-[12px] py-[9px] gap-[8px] px-[1rem]">
            <span className="text-[12px] text-nowrap">
              Display total before taxes
            </span>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCategory;
