import React from "react";
import Image from "next/image";
import icon1 from "public/Icon1.svg";
import icon2 from "public/Icon2.svg";
// import icon3 from "public/Icon3.svg";
import icon4 from "public/Icon4.svg";
export default function LocalBuss() {
  return (
    <div className=" w-full flex flex-col items-center justify-between p-4 lg:flex-col lg:items-center lg:justify-between lg:p-16 md:flex-col md:items-center md:justify-between md:p-16 sm:flex-col sm:items-center sm:justify-between sm:p-16 bg-aliceblue my-8">
      <div className="grid grid-cols-2 gap-4 mx-8 lg:grid lg:grid-cols-2 lg:gap-4 lg:mx-8 md:grid md:grid-cols-2 md:gap-4 md:mx-8 sm:grid sm:grid-cols-2 sm:gap-4 sm:mx-8">
        {/* Column 1 */}
        <div className="col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-1">
          <div className="">
            <h1 className="font-semibold text-2xl lg:font-semibold lg:text-5xl md:font-semibold md:text-5xl sm:font-semibold  text-gray-600 sm:text-xl">
              Helping a local{" "}
              <span className="text-green-500">business reinvent itself</span>
            </h1>
            <p className="font-inter text-gray-500 sm:text-sm">
              We reached here with our hard work and dedication
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full -ml-10 col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-1 lg:flex lg:flex-auto lg:mx-10 md:flex md:flex-auto md:mx-10 sm:flex sm:flex-auto sm:mx-10">
          <div className="grid grid-cols-2 gap-10 lg:grid lg:grid-cols-2 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 sm:grid sm:grid-cols-2 sm:gap-10">
            <div className="col-span-1 flex items-center mx-6 lg:col-span-1 lg:flex lg:items-center lg:mx-6 md:col-span-1 md:flex md:items-center md:mx-6 sm:col-span-1 sm:flex sm:items-center sm:mx-6">
              <Image
                src={icon1}
                alt="icon1"
                width={70}
                height={70}
                className="xl:h-20"
              />
              <div className="flex-col ml-6">
                <h2 className="font-inter text-lg font-semibold text-gray-700 sm:text-sm">
                  2,245,341
                </h2>
                <p className="font-inter text-sm text-gray-500 sm:text-sm">
                  Member
                </p>
              </div>
            </div>

            <div className="col-span-1 flex items-center mx-6">
              <Image
                src={icon2}
                alt="icon1"
                width={70}
                height={70}
                className="xl:h-20"
              />
              <div className="flex-col ml-6">
                <h2 className="font-inter text-lg font-semibold text-gray-700 sm:text-sm">
                  2,245,341
                </h2>
                <p className="font-inter text-sm text-gray-500 sm:text-sm">
                  Member
                </p>
              </div>
            </div>

            <div className="col-span-1 flex items-center mx-6">
              <Image
                src={icon4}
                alt="icon1"
                width={70}
                height={70}
                className="xl:h-20"
              />
              <div className="flex-col ml-6">
                <h2 className="font-inter text-lg font-semibold text-gray-700 sm:text-sm">
                  2,245,341
                </h2>
                <p className="font-inter text-sm text-gray-500 sm:text-sm">
                  Member
                </p>
              </div>
            </div>

            <div className="col-span-1 flex items-center mx-6">
              <Image
                src={icon4}
                alt="icon1"
                width={70}
                height={70}
                className="xl:h-20"
              />
              <div className="flex-col ml-6">
                <h2 className="font-inter text-lg font-semibold text-gray-700 sm:text-sm">
                  2,245,341
                </h2>
                <p className="font-inter text-sm text-gray-500 sm:text-sm">
                  Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
