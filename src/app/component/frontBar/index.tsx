import React from "react";
import Image from "next/image";
import image from "../../../../public/Illustration.png"
import Link from "next/link";
export default function FrontBar() {
  return (
    <div className="lg:w-full flex flex-col items-center justify-center p-16 bg-aliceblue md:w-[750px]  sm:w-[672px]">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 gap-8  ">
          <h1 className=" font-inter font-bold text-[4rem] leading-[5rem] md:text-4xl sm:text-lg">
            Lessons and insights{" "}
            <span className="text-green-500 "> from 8 years</span>
          </h1>
          <p className="text-gray-600 pl-22 mb-8 ">
           where to go your bussiness as a photographer: site or social media?
          </p>
          <Link href='/' className="bg-green-500 text-white py-4 px-6 mb-8 rounded-lg l" > Register </Link>
        </div>
        <div className="col-span-1">
          <Image src={image} alt="illustration" width={272} height={400}/>
        </div>
      </div>
    </div>
  );
}
