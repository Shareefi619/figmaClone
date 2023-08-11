import React from "react";
import Image from "next/image";
import image from "../../../../public/Illustration.png";
import Link from "next/link";
export default function FrontBar() {
  return (
    <div className="flex start my-2 lg:my-2 md:my-2 sm:my-2 w-[100%]  flex-col items-center justify-center p-16 lg:w-full lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-16 md:w-full md:flex md:flex-col md:items-center md:justify-center md:p-16 sm:w-full sm:flex sm:flex-col sm:items-center sm:justify-center sm:p-16 bg-aliceblue ">
      <div className="grid grid-cols-3 gap-4 lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-3 md:gap-4 sm:grid sm:grid-cols-3 sm:gap-4">
        <div className="col-span-3 lg:hidden md:hidden sm:hidden">
          <Image src={image} alt="illustration" width={272} height={400} />
        </div>

        <div className="col-span-3 gap-8 lg:col-span-2 lg:gap-8 md:col-span-2 md:gap-8 sm:col-span-2 sm:gap-8  ">
          <h1 className="font-inter font-semibold lg:text-[4rem] lg:leading-[5rem] lg:font-bold md:text-5xl sm:text-xl">
            Lessons and insights{" "}
            <span className="text-green-500 "> from 8 years</span>
          </h1>
          <p className="text-gray-600 pl-22 mb-8 ">
            where to go your bussiness as a photographer: site or social media?
          </p>
          <Link
            href="/"
            className="bg-green-500 text-white py-4 px-6 mb-8 rounded-lg l"
          >
            {" "}
            Register{" "}
          </Link>
        </div>
        <div className="col-span-1 hidden lg:flex md:flex sm:flex">
          <Image src={image} alt="illustration" width={272} height={400} />
        </div>
      </div>
    </div>
  );
}
