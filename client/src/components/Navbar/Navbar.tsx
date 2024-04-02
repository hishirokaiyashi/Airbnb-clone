import { GlobalOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Airbnb from "../../assets/Airbnb.svg";
import { resetUserDataStart } from "../../redux/user/userSlice.js";
import NavSearch from "./NavSearch/NavSearch.jsx";
import type { MenuProps } from 'antd';
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">Account</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      key: "3",
      onClick: () => {
        dispatch(resetUserDataStart());
        toast.success("Logout successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      },
    },
  ];

  // useEffect(() => {
  //   const delayInputTimeoutId = setTimeout(() => {
  //     setDebouncedInputValue(search);
  //   }, 500);
  //   return () => clearTimeout(delayInputTimeoutId);
  // }, [search, 500]);

  // useEffect(() => {
  //   if (debouncedInputValue) {
  //     const fetchPostByTitle = async () => {
  //       try {
  //         dispatch(
  //           fetchFilterPostsStart({
  //             title: debouncedInputValue,
  //             page: 1,
  //             limit: 5,
  //           })
  //         ); // Dispatch action để fetch posts từ API khi component được mount
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchPostByTitle();
  //   } else {
  //     dispatch(resetFilterData()); // Dispatch action để fetch posts từ API khi component được mount
  //   }
  // }, [debouncedInputValue]);

  return (
    <div className=" px-[80px] pb-[2rem]">
      <div className=" grid grid-cols-3 gap-4 items-center justify-between h-[80px]">
        <div>
          <img src={Airbnb} alt="AirbnbLogo" />
        </div>
        <ul className="text-black flex px-[24px] ">
          <li className="h-[44px] cursor-pointer flex items-center textHeightNav p-4 hover:rounded-full hover:bg-zinc-100">
            <button type="button" className="text-[1rem] ">
              Stays
            </button>
          </li>
          <li className="h-[44px] cursor-pointer flex items-center textHeightNav p-4 hover:rounded-full hover:bg-zinc-100">
            <button type="button" className="text-[1rem]">
              Experiences
            </button>
          </li>
          <li className="h-[44px] cursor-pointer flex items-center textHeightNav p-4 hover:rounded-full hover:bg-zinc-100">
            <button type="button" className="text-[1rem] text-nowrap">
              Online Experiences
            </button>
          </li>
        </ul>
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="p-[0.75rem] font-medium text-[0.875rem] hover:rounded-full hover:bg-zinc-100"
          >
            Airbnb your home
          </button>
          <GlobalOutlined className="p-[0.75rem] mr-1 cursor-pointer hover:rounded-full hover:bg-zinc-100" />
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="topRight"
            className=" border rounded-full gap hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
          >
            <button
              type="button"
              className="pt-[0.5rem] pr-[0.5rem] pl-[0.875rem] pb-[0.5rem] "
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                <MenuOutlined />
                <Avatar className="ml-[0.875rem]" icon={<UserOutlined />} />
              </Space>
            </button>
          </Dropdown>
        </div>
      </div>
      <NavSearch />
    </div>
  );
};

export default Navbar;
