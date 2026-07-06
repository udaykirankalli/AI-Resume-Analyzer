import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <video
        src="/Loading.mp4"
        autoPlay
        muted
        loop
        className="w-100 h-104 object-contain"
      />
    </div>
  );
};

export default PageLoader;
