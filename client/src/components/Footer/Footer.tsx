import { Icon } from "@iconify/react";
import { useState } from "react";

import {
  footerCategoryContent,
  footerConstantListLi,
} from "../../constant/CONSTANT.js";
import { FooterDetailsPopular } from "../../type/footer.type.js";
import FooterContent from "./FooterContent/FooterContent.jsx";
const Footer = () => {
  const [activeTab, setActiveTab] = useState<string>("Popular");
  const [activeContentOfTab, setActiveContentOfTab] = useState<FooterDetailsPopular>(
    footerCategoryContent[0].content
  );

  const handleSetActiveTab = (type:string) => {
    const contentByType = footerCategoryContent.find((item) => item.key === type);
    const newActiveContent = contentByType
      ? contentByType.content
      : footerCategoryContent[0].content;
    setActiveTab(type);
    setActiveContentOfTab(newActiveContent);
  };
  return (
    <section>
      <div className=" py-[48px]  border-b-2 border-[#DDDDDD] ">
        <div>
          <h2 className="font-semibold text-[1.375rem] tracking-[.0.01375rem] mb-[8px]">
            Inspiration for future getaways
          </h2>
          <div>
            {footerCategoryContent.map((el) => {
              return (
                <button
                  key={el.key}
                  // onClick={handleSetActiveTab(el)}
                  onClick={() => handleSetActiveTab(el.key)}
                  // className="p-[10px] ml-[-10px] text-textColorFooter mr-[6px]"
                  className={`${
                    el.key === activeTab
                      ? "font-semibold relative after:absolute after:content-[''] after:h-[2px] after:left-[10px] after:w-[calc(100%_-_20px)] after:bottom-[-2px] after:text-black after:bg-black "
                      : ""
                  } p-[10px] ml-[-10px] text-textColorFooter mr-[6px]`}
                >
                  {el.key}
                </button>
              );
            })}
            <div className="bg-[#DDDDDD] h-[1px]"></div>
          </div>

          <FooterContent footerDetailItems={activeContentOfTab} />
        </div>
      </div>
      <div >
        <div className=" py-[48px] grid grid-cols-3 border-b-1 border-[#DDDDDD]">
          <ul className="grid grid-cols-1 grid-rows-7 gap-2 ">
            <li className="cursor-pointer text-[0.875rem] font-semibold text-[#717171]  hover:underline">
              {footerConstantListLi[0].keys}
            </li>
            {footerConstantListLi[0].content.map((el, index) => (
              <li
                key={index}
                className="cursor-pointer text-[0.875rem] text-[#717171] hover:underline"
              >
                {el}
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-1 grid-rows-7 gap-2 ">
            <li className="cursor-pointer text-[0.875rem] font-semibold text-[#717171]  hover:underline">
              {footerConstantListLi[1].keys}
            </li>
            {footerConstantListLi[1].content.map((el, index) => (
              <li
                key={index}
                className="cursor-pointer text-[0.875rem] text-[#717171] hover:underline"
              >
                {el}
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-1 grid-rows-7 gap-2 ">
            <li className="cursor-pointer text-[0.875rem] font-semibold text-[#717171]  hover:underline">
              {footerConstantListLi[2].keys}
            </li>
            {footerConstantListLi[2].content.map((el, index) => (
              <li
                key={index}
                className="cursor-pointer text-[0.875rem] text-[#717171] hover:underline"
              >
                {el}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between py-[24px] border-t-2 border-[#DDDDDD]">
          <ul className="flex gap-1 flex-1 w-[80%] text-[14px] text-[#717171]">
            <li>© 2024 Airbnb, Inc.</li>
            <li>.</li>
            <li className="cursor-pointer hover:underline">Terms</li>
            <li>.</li>
            <li className="cursor-pointer hover:underline">Sitemap</li>
            <li>.</li>
            <li className="cursor-pointer hover:underline">Privancy</li>
            <li>.</li>
            <li className="cursor-pointer hover:underline">
              Your Privancy Choices
            </li>
          </ul>
          <ul className="grid grid-cols-3 w-[20%] text-[14px]">
            <li className="flex items-center gap-1">
              <span>
                <Icon icon="tabler:world" width="1.2em" height="1.2em" />
              </span>
              <span className="text-nowrap">English (US)</span>
            </li>
            <li className="text-center font-semibold">$ USD</li>
            <li className="grid grid-cols-3">
              <span>
                <Icon
                  icon="streamline:facebook-1-solid"
                  width="1.2em"
                  height="1.2em"
                />
              </span>
              <span>
                <Icon icon="fa:twitter-square" width="1.2em" height="1.2em" />
              </span>
              <span>
                <Icon
                  icon="mage:instagram-circle"
                  width="1.2em"
                  height="1.2em"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
