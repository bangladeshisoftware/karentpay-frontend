const SkeletonPriceCard = () => {
  return (
    <div className="border shadow-md rounded-md hover:scale-105 hover:shadow-lg animate-pulse">
      <div className="bg-gradient-2 rounded-md py-10">
        <div className="border rounded-full flex justify-center mx-auto bg-gray-300 mt-2 mb-10 w-1/2 p-3"></div>
        <div className="px-4 break-words">
          <div className="h-6 bg-gray-300 rounded mb-2 mx-auto w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded mx-auto w-1/2"></div>
        </div>
      </div>
      <div className="flex flex-col bg-white">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`flex pl-4 py-4 transition-colors duration-300 ${
              index !== 3 ? "border-b-2 border-gray-500" : ""
            }`}
          >
            <div className="pt-1 pr-2">
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-full"></div>
          </div>
        ))}
      </div>
      <div className="text-center py-10 bg-white">
        <div className="bg-gray-300 rounded-md h-10 w-32 mx-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonPriceCard;
