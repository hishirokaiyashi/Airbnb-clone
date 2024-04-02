import React from "react";
import { Icon } from "@iconify/react";
import DetailLayout from "../components/Layout/DetailLayout";

const Booking = () => {
  return (
    <section>
      <DetailLayout>
        <div className="px-[160px]">
          <div>
            <div className="flex justify-between py-[24px] tracking-wide">
              <h2 className="text-[26px] font-semibold ">
                Cabin 1 - Mountainside luxury cabin w Batulao view
              </h2>
              <div className="flex gap-4 ">
                <div className="flex items-center gap-2">
                  <span>
                    <Icon
                      icon="material-symbols:upload"
                      width="1.4em"
                      height="1.4em"
                    />
                  </span>
                  <span className="underline font-semibold text-[14px]">
                    Share
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <Icon icon="ph:heart-light" width="1.4em" height="1.4em" />
                  </span>
                  <span className="underline font-semibold text-[14px]">
                    Save
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <img
                  className="h-[373px] w-full object-cover rounded-tl-lg rounded-bl-lg"
                  src="https://a0.muscache.com/im/pictures/13ee20e4-8255-4e9b-9252-cf5146fc4599.jpg?im_w=1200"
                  alt="Card-Detail-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-x-2 ">
                <div>
                  <img
                    className="h-[186px] w-full object-cover "
                    src="https://a0.muscache.com/im/pictures/29a0069a-28d9-4fa9-914c-0cffa6bca754.jpg?im_w=720"
                    alt="Card-Detail-2"
                  />
                  <img
                    className="pt-[0.5rem] h-[186px] w-full object-cover rounded-tr-lg"
                    src="https://a0.muscache.com/im/pictures/aa766fff-6122-4367-be1a-5025bd1c2a10.jpg?im_w=720"
                    alt="Card-Detail-3"
                  />
                </div>
                <div>
                  <img
                    className="h-[186px] w-full object-cover"
                    src="https://a0.muscache.com/im/pictures/6c49f73e-284c-4e69-8012-9870e122f086.jpg?im_w=720"
                    alt="Card-Detail-4"
                  />
                  <img
                    className="pt-[0.5rem] h-[186px] w-full object-cover rounded-br-lg"
                    src="https://a0.muscache.com/im/pictures/bb73291d-0da5-44ca-898d-ee35db1ce6d5.jpg?im_w=720"
                    alt="Card-Detail-5"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 py-[32px] tracking-wide">
              <div className="flex flex-col gap-[8px]">
                <div className="pb-[32px]">
                  <h3 className="text-[22px] font-semibold">
                    Entire cabin in Calaca, Philippines
                  </h3>
                  <ul className="flex gap-1">
                    <li>8 guests</li>
                    <li>.</li>
                    <li>2 bedrooms</li>
                    <li>.</li>
                    <li>3 beds</li>
                    <li>.</li>
                    <li>2 baths</li>
                  </ul>
                  <ul className="flex gap-1 items-center">
                    <li className="flex items-center gap-1">
                      <span>
                        <Icon
                          icon="tabler:star-filled"
                          width="1em"
                          height="1em"
                        />
                      </span>
                      <span className="font-semibold">4.83</span>
                    </li>
                    <li className="flex flex-col justify-center">
                      <span>.</span>
                    </li>
                    <li className="underline font-semibold">169 reviews</li>
                  </ul>
                </div>
                <div className="flex gap-4 border-t-2 border-b-2 py-[32px]">
                  <div className="relative">
                    <img
                      className="h-[40px] w-[40px] rounded-full"
                      src="https://a0.muscache.com/im/pictures/user/84d63cb0-42a9-4e68-a7d9-10d2b29f95ee.jpg?im_w=240"
                      alt="Camper And Cabin"
                    />
                    <span className="absolute bottom-0 right-0">
                      <Icon
                        icon="tabler:paint-filled"
                        width="1.2em"
                        height="1.2em"
                        className="icon-with-border"
                        style={{
                          color: "#e84576",
                        }}
                      />
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      Hosted by Camper And Cabin
                    </span>
                    <ul className="flex gap-1 text-[14px] text-[#717171]">
                      <li>Superhost</li>
                      <li>.</li>
                      <li>3 years hosting</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-8 py-[32px] border-b-2">
                  <div className="flex items-center gap-4">
                    <span>
                      <Icon
                        icon="radix-icons:calendar"
                        width="1.8em"
                        height="1.8em"
                      />
                    </span>
                    <span className="font-semibold">
                      Free cancellation for 48 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>
                      <Icon icon="cil:pool" width="1.8em" height="1.8em" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold">Dive right in</span>
                      <span>
                        This is one of the few places in the area with a pool.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>
                      <Icon
                        icon="clarity:design-line"
                        width="1.8em"
                        height="1.8em"
                      />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold">Designed by</span>
                      <span>Dennis Canonizado</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 py-[32px] border-b-2">
                  <span className="leading-6 tracking-wide">
                    The newly built two-bedroom cabin is a mid-century modern
                    piece of architecture. Perched on top of a hill, the
                    property offers a sweeping 360-degree view of the stunning
                    Mount Batulao sunset, calming Balayan Bay, and lush Nasugbu
                    farmlands. Its unique terrain and elevation allow guests to
                    embrace fresh mountain breeze and cool weather practically
                    all year round. By combining the raw beauty of the
                    countryside and the comforts of a boutique hotel, the cabin
                    offers a redefined R&R experience.
                  </span>
                  <div className="flex items-center">
                    <span className="underline font-semibold">Show more</span>
                    <span>
                      <Icon
                        icon="mdi:keyboard-arrow-right"
                        width="1.2em"
                        height="1.2em"
                      />
                    </span>
                  </div>
                </div>
                <div className="py-[48px] border-b-2">
                  <span className="text-[22px] font-semibold">
                    Where you&apos;ll sleep
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-3">
                      <img
                        className="rounded-[8px] h-[212px] object-cover"
                        src="https://a0.muscache.com/im/pictures/a3e72b7e-d638-4f0e-ac20-bc307dc5ad74.jpg?im_w=480"
                        alt="bed-room"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold">Bedroom 1</p>
                        <p>2 double beds, 1 floor mattress</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <img
                        className="rounded-[8px] h-[212px] object-cover"
                        src="https://a0.muscache.com/im/pictures/18d7d831-9fe6-48a6-96cf-0f3bc9513d04.jpg?im_w=480"
                        alt="bed-room"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold">Bedroom 2</p>
                        <p>1 king bed, 1 floor mattress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>aaaa</div>
            </div>
          </div>
        </div>
      </DetailLayout>
    </section>
  );
};

export default Booking;
