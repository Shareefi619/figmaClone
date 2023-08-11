import React from "react";
import "typeface-inter";
import Image from "next/image";
import image from "../../../../public/Illustration.png"
import Link from "next/link";
export default function FrontBar() {
  return (
    <div className="flex flex-col items-center justify-between p-16 bg-aliceblue w-full lg:w-[90%] 2xl:inline-block 2xl:p-8 xl:w-full xl:inline-block xl:p-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 gap-8 2xl:gap-4 ">
          <h1 className=" font-inter font-bold text-[4rem] leading-[5rem] 2xl:text-5xl 2xl:w-3/4 lg:text-3xl">
            Lessons and insights{" "}
            <span className="text-green-500 "> from 8 years</span>
          </h1>
          <p className="text-gray-600 pl-22 mb-8 2xl:text-xl">
           where to go your bussiness as a photographer: site or social media?
          </p>
          <Link href='/' className="bg-green-700 text-white py-4 px-6 mb-8 rounded-lg 2xl:text-xl" > Register </Link>
        </div>
        <div className="col-span-1">
          <Image src={image} alt="illustration" width={272} height={400}/>
        </div>
      </div>
    </div>
  );
}
