import React from "react";
import Image from "next/image";
import img1 from "../../../../public/m1.png";
import rect from "../../../../public/rect.png";
import peop from "../../../../public/people.png";
import img2 from "../../../../public/m2.png";
import img3 from "../../../../public/m3.png";
export default function ManageSystem() {
  return (
    <div className="flex flex-col items-center justify-center my-12 w-full lg:w-5/4 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center">
      <div className="text-center mb-4">
        <h2 className="text-5xl font-bold font-inter text-gray-700 py-4 px-6 w-2/3 mx-auto xl:text-4xl">
          Manage your entire community in a single system
        </h2>
        <p className="text-gray-600 text-lg">Who is Nextcent suitable for?</p>
      </div>
      <div className="grid grid-cols-12 gap-8 mx-8 xl:gap-2 xl:mx-3">
        <div className="col-span-4 py-6 px-4 mx-4 my-4 border rounded-lg shadow-md">
         <div className="relative">
         <Image
            src={rect}
            alt="img1"
            width={50}
            height={50}
            className="mb-2 rounded-lg mx-40 xl:mx-28 lg:mx-10"
          />
          <Image
            src={peop}
            alt="img1"
            width={50}
            height={50}
            className="mb-2 rounded-lg mx-40 absolute top-0 -left-4 z-10 xl:mx-24 lg:mx-10"
          />
         </div>
          <h2 className="text-4xl font-semibold mb-1 font-inter text-gray-800 text-center lg:text-2xl lg:leading-6">
            Membership Organization
          </h2>

          <p className="text-gray-600 font-inter text-center lg:text-base">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="col-span-4 py-6 px-4 mx-4 my-4 border rounded-lg shadow-md">
         <div className="relative">
         <Image
            src={rect}
            alt="img1"
            width={50}
            height={50}
            className="mb-2 rounded-lg mx-40 xl:mx-28 lg:mx-10"
          />
          <Image
            src={peop}
            alt="img1"
            width={50}
            height={50}
            className="mb-2 rounded-lg mx-40 absolute top-0 -left-4 z-10 xl:mx-24 lg:mx-10"
          />
         </div>
          <h2 className="text-4xl font-semibold mb-1 font-inter text-gray-800 text-center lg:text-2xl lg:leading-6">
            Membership Organization
          </h2>

          <p className="text-gray-600 font-inter text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="col-span-4 py-6 px-4 mx-4 my-4 border rounded-lg shadow-md">
         <div className="relative">
         <Image
            src={rect}
            alt="img1"
            width={50}
            height={50}
            className="mb-2 rounded-lg mx-40 xl:mx-28 lg:mx-10"
          />
          <Image
            src={peop}
            alt="img1"
            width={50}
            height={50}
            className="mb-2 rounded-lg mx-40 absolute top-0 left-4 z-10 xl:mx-24 lg:mx-2"
          />
         </div>
          <h2 className="text-4xl font-semibold mb-1 font-inter text-gray-800 text-center lg:text-2xl lg:leading-6">
            Membership Organization
          </h2>

          <p className="text-gray-600 font-inter text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
