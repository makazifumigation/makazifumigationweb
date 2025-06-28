import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-80">
      <Image
        className="animate-spin h-6 w-6"
        src="loading.svg"
        height={48}
        width={48}
        alt="loading"
      />
    </div>
  );
};

export default Loader;
