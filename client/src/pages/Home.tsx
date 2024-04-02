import { useState } from "react";
// import Button from "../components/Button/Button.js";
import Button from "../components/Button/Button.tsx";
import CardDetail from "../components/CardDetail/CardDetail.tsx";
import SliderCategory from "../components/SliderCategory/SliderCategory";

import InfiniteScroll from "react-infinite-scroll-component";
import MainLayout from "../components/Layout/MainLayout";
import { ButtonType } from "../type/button.type.ts";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/categoryApi.ts";

// import Post2 from "../components/Posts/Post2";

const Home = () => {
  const [showMoreCards, setShowMoreCards] = useState(false);
  const [totalData, setTotalData] = useState(20);
  const handleMoreCards = () => {
    setShowMoreCards(true);
  };
  const fetchMoreData = () => {


    setTotalData(totalData + 20);

  };
  const {
    data: fetchDataCategories,
    isLoading,
    refetch 
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  const handleTest = () => {
    console.log("do")
    refetch();
  };
  return (
    <MainLayout>
      <button type="button" onClick= {handleTest} >Click</button>
      {/* <Navbar /> */}
      <div className="max-w-[1760px] px-[80px] flex flex-col pb-[2rem]">
        <div>
          <SliderCategory />
        </div>
        <div className="mt-[16px] mb-[48px] grid grid-cols-4 gap-y-[48px] gap-x-[24px]">
          {showMoreCards
            ? Array.from({ length: 24 }, (_, index) => (
                <CardDetail key={index} />
              ))
            : Array.from({ length: 12 }, (_, index) => (
                <CardDetail key={index} />
              ))}
        </div>
        {!showMoreCards && (
          <div className="mt-[56px] flex justify-center flex-col items-center gap-3">
            <p>Continue exploring cabins</p>

            <div>
              <Button
                type={ButtonType.Button}
                onClick={handleMoreCards}
                text="Show more"
                className="bg-black text-white rounded-lg"
              />
            </div>
          </div>
        )}
        {showMoreCards && (
          <InfiniteScroll
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            dataLength={totalData}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            <div className="mt-[16px] mb-[48px] grid grid-cols-4 gap-y-[48px] gap-x-[24px]">
              {Array.from({ length: totalData }, (_, index) => (
                <CardDetail key={index} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>

    </MainLayout>
  );
};

export default Home;
