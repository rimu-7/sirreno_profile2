import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white bg-[#212121]">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;
