import { MinusOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Divider,
  Dropdown,
  Form
} from "antd";
import { useState } from "react";

import Australia from "../../../assets/Australia.jpg";
import Europe from "../../../assets/Europe.jpg";
import Flexible from "../../../assets/Flexible.jpg";
import Korean from "../../../assets/Korean.jpg";
import ThaiLand from "../../../assets/ThaiLan.jpg";
import UnitedStates from "../../../assets/United-States.jpg";


const NavSearch = () => {
  const [changeIconSearch, setChangeIconSearch] = useState<boolean>(false);
  // const [focusInput, se]
  // const { RangePicker } = DatePicker;
  // const [value, setValue] = useState(null);
  // const disabledDate = (current, { from }) => {
  //   if (from) {
  //     return Math.abs(current.diff(from, "days")) >= 7;
  //   }
  //   return false;
  // };
  // const onClick = ({ key }) => {
  //   message.info(`Click on item ${key}`);
  // };
  const items = [
    {
      label: "Search by region",
      image: Flexible,
      key: "1",
    },
    {
      label: "Europe",
      image: Europe,
      key: "2",
    },
    {
      label: "ThaiLand",
      image: ThaiLand,
      key: "3",
    },
    {
      label: "Australia",
      image: Australia,
      key: "4",
    },
    {
      label: "South Korea",
      image: Korean,
      key: "5",
    },
    {
      label: "United States",
      image: UnitedStates,
      key: "6",
    },
  ];

  const guestItems = [
    {
      type: "Adults",
      description: "Ages 13 or above",
      isLink: false,
    },
    {
      type: "Children",
      description: "Ages 2–12",
      isLink: false,
    },
    {
      type: "Infants",
      description: "Under 2",
      isLink: false,
    },
    {
      type: "Pets",
      description: "Bringing a service animal?",
      isLink: true,
    },
  ];
  const onFinish = (value:string) => {
    console.log(value);
  };
  return (
    <Form
      name="form_item_path"
      className="flex justify-center items-center w-fit m-auto h-[66px] shadow-md rounded-full"
      layout="vertical"
      onFinish={onFinish}
    >
      <Dropdown
        trigger={["click"]}
        dropdownRender={() => (
          <div className="mt-[0.75rem] max-w-[466px] pt-[1rem] pb-[2.5rem] px-[1.25rem] shadow-[0_3px_12px_0_rgba(0,0,0,0.15)] rounded-lg bg-white">
            <span className="">Search by region</span>
            <div className="grid grid-cols-3 grid-rows-2 gap-x-[5px] gap-y-[1.25rem] mt-[20px]">
              {items.map((item) => (
                <div key={item.key} className="flex flex-col h-full">
                  <button className="p-0">
                    <img
                      className="w-[124px] h-[124px] rounded-lg hover:outline hover:outline-offset-2 hover:outline-1"
                      src={item.image}
                      alt={item.label}
                    />
                  </button>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      >
        <div className="hover:bg-gray-300 flex flex-col group px-8 py-2 rounded-full ease duration-250">
          <label>Where</label>
          <input
            type="text"
            placeholder="Search Destionation"
            className="border-none outline-none  active:border-none text-md py-1 group-hover:bg-gray-300 ease duration-250"
          />
        </div>
      </Dropdown>

      <Dropdown
        trigger={["click"]}
        dropdownRender={() => (
          <div>
            <span>AA</span>
          </div>
        )}
      >
        <div className="h-full flex justify-center cursor-pointer hover:bg-gray-300 flex-col group px-8 py-2 rounded-full ease duration-250">
          <label className="cursor-pointer">Check-in</label>
        </div>
      </Dropdown>

      <Dropdown dropdownRender={() => <div></div>}>
        <div className="h-full flex justify-center cursor-pointer hover:bg-gray-300 flex-col group px-8 py-2 rounded-full ease duration-250">
          <label className="cursor-pointer">Check-out</label>
        </div>
      </Dropdown>

      <Dropdown
        open={changeIconSearch}
        onOpenChange={() => setChangeIconSearch(!changeIconSearch)}
        trigger={["click"]}
        dropdownRender={() => (
          <div className="mt-[0.75rem] max-w-[466px] px-[1.25rem] shadow-[0_3px_12px_0_rgba(0,0,0,0.15)] rounded-lg bg-white">
            <div className="py-[1.25rem]">
              {guestItems.map((el, index) => {
                return (
                  <div
                    className="flex items-center justify-between"
                    key={index}
                  >
                    <div>
                      <div className="py-[1.25rem]">
                        <p className="font-medium">{el.type}</p>
                        {el.isLink ? (
                          <p className="underline decoration-solid underline-offset-1 cursor-pointer">
                            {el.description}
                          </p>
                        ) : (
                          <>
                            <p>{el.description}</p>
                          </>
                        )}
                      </div>
                      {el.type !== "Pets" && (
                        <Divider
                          style={{
                            margin: 0,
                          }}
                        />
                      )}
                    </div>
                    <div className="flex gap-[1rem] ml-[3rem]">
                      <button className="p-1 border flex justify-center items-center rounded-full w-[2rem] h-[2rem]">
                        <PlusOutlined />
                      </button>
                      <span className="p-1 flex justify-center items-center">
                        1
                      </span>
                      <button className="p-1 border flex justify-center items-center rounded-full w-[2rem] h-[2rem]">
                        <MinusOutlined />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      >
        <div className="flex justify-between items-center hover:bg-gray-300 group rounded-full h-full cursor-pointer relative max-w-[300px] w-[280px] px-8 py-2 ">
          <div className="flex flex-col w-[70%]">
            <label htmlFor="guest">who</label>
            <span className="text-nowrap">Add guests</span>
          </div>
          {!changeIconSearch ? (
            <div className="w-[30%] absolute right-[1rem] flex justify-end">
              <button className="text-right w-[1.25rem] h-[1.25rem] p-[1rem] flex justify-center items-center rounded-full bg-red-500">
                <SearchOutlined
                  style={{
                    fontSize: "1.25rem",
                    color: "white",
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                />
              </button>
            </div>
          ) : (
            <button className="absolute right-[1rem] px-[1.25rem] py-[0.875rem] font-medium  rounded-full flex justify-center items-center bg-red-500">
              <SearchOutlined style={{ fontSize: "1.25rem", color: "white" }} />
              <span className="pl-[0.5rem] pr-[0.25rem] text-white">
                Search
              </span>
            </button>
          )}
        </div>
      </Dropdown>
    </Form>
  );
};

export default NavSearch;
