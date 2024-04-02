const SliderCaterogySkeleton = () => {
  return (
    <div
      className="animate-pulse cursor-not-allowed h-[78px] box-border flex flex-col justify-center items-center gap-[8px] 
    "
    >
      <div className="bg-gray-200 rounded-lg dark:bg-gray-700 h-[24px] max-w-[50px] w-[50px]"></div>
      <p className="bg-gray-200 rounded-full dark:bg-gray-700 h-2 max-w-[50px] w-[50px]"></p>
    </div>
  );
};

export default SliderCaterogySkeleton;
