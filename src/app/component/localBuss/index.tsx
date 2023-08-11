import React from "react";
import Image from "next/image";
import icon1 from "../../../../public/Icon1.svg";
import icon2 from "../../../../public/Icon2.svg";
import icon3 from "../../../../public/Icon3.svg";
import icon4 from "../../../../public/Icon4.svg";
export default function LocalBuss() {
  return (
    <div className="flex flex-col items-center justify-between p-16 bg-aliceblue my-8 w-full  lg:w-[90%]">
      <div className="grid grid-cols-2 gap-4 mx-8">
        {/* Column 1 */}
        <div className="col-span-1">
          <div className=" p-4">
            <h1 className="font-semibold text-5xl text-gray-600">
              Helping a local{" "}
              <span className="text-green-500">business reinvent itself</span>
            </h1>
            <p className="font-inter text-gray-500">
              We reached here with our hard work and dedication
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1 flex flex-auto mx-10">
        
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1 flex items-center mx-6">
              <Image src={icon1} alt="icon1" width={70} height={70} className="xl:h-10"/>
              <div className="flex-col ml-6">
                <h2 className="font-inter text-lg font-semibold text-gray-700">
                  2,245,341
                </h2>
                <p className="font-inter text-sm text-gray-500">Member</p>
              </div>
            </div>

            <div className="col-span-1 flex items-center mx-6">
              <Image src={icon2} alt="icon1" width={70} height={70} className="xl:h-10"/>
              <div className="flex-col ml-6">
                <h2 className="font-inter text-lg font-semibold text-gray-700">
                  2,245,341
                </h2>
                <p className="font-inter text-sm text-gray-500">Member</p>
              </div>
            </div>

            <div className="col-span-1 flex items-center mx-6">
              <Image src={icon3} alt="icon1" width={70} height={70} className="xl:h-10"/>
              <div className="flex-col ml-6">
                <h2 className="font-inter text-lg font-semibold text-gray-700">
                  2,245,341
                </h2>
                <p className="font-inter text-sm text-gray-500">Member</p>
              </div>
            </div>

            <div className="col-span-1 flex items-center mx-6">
              <Image src={icon4} alt="icon1" width={70} height={70} className="xl:h-10"/>
              <div className="flex-col ml-6">
                <h2 className="font-inter text-lg font-semibold text-gray-700">
                  2,245,341
                </h2>
                <p className="font-inter text-sm text-gray-500">Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
