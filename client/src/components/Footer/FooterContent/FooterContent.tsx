import { DownOutlined } from "@ant-design/icons";
import { FooterDetailsPopular } from "../../../type/footer.type";
export interface FooterContentProps {
  footerDetailItems: FooterDetailsPopular;
}
const FooterContent = ({ footerDetailItems }: FooterContentProps) => {
  return (
    <ul className="grid grid-cols-6 grid-rows-3 gap-x-[8px] gap-y-[24px] pt-[32px]">
      {footerDetailItems.map((footerDetailItem, index) => {
        return (
          <li key={index} className="flex flex-col">
            <span>{footerDetailItem.key}</span>
            <span>{footerDetailItem.content}</span>
          </li>
        );
      })}
      <li className="cursor-pointer ">
        <span className="hover:underline pr-[2px]">Show more</span>
        <DownOutlined className="text-[12px]" />
      </li>
    </ul>
  );
};

export default FooterContent;
