import React from "react";
import Image from "next/image";
import img1 from "../../../../public/m1.png";
import rect from "../../../../public/rect.png";
import peop from "../../../../public/people.png";
import img2 from "../../../../public/m2.png";
import img3 from "../../../../public/m3.png";
export default function ManageSystem() {
  return (
    <div className="w-full flex-col items-center justify-center my-12 lg:flex lg:flex-col lg:items-center lg:justify-center lg:my-12 md:flex-col md:items-center md:justify-center md:my-12 sm:flex-col sm:items-center sm:justify-center sm:my-12 sm:w-full">
      <div className="text-center mb-4 lg:text-center lg:mb-4 md:text-center md:mb-4 sm:text-center sm:mb-4">
        <h2 className="text-xl font-bold font-inter text-gray-700 py-4 px-6 w-2/3 mx-auto md:text-3xl sm:text-2xl">
          Manage your entire community in a single system
        </h2>
        <p className="text-gray-600 text-sm sm:lg:">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className=" grid grid-cols-12 gap-4 ml-[34px] lg:grid lg:grid-cols-12 lg:gap-8 lg:mx-8 md:grid md:grid-cols-12 md:gap-8 md:mx-8 sm:grid sm:grid-cols-12 sm:gap-8 sm:mx-8">
        <div className="col-span-12 py-6 px-4 mx-4 my-4 border rounded-lg shadow-md lg:col-span-4 lg:py-6 lg:px-4 lg:mx-4 lg:my-4 lg:border lg:rounded-lg lg:shadow-md md:col-span-4 md:py-6 md:px-4 md:mx-4 md:my-4 md:border md:rounded-md md:shadow-md sm:col-span-4 sm:py-6 sm:px-4 sm:mx-4 sm:my-4 sm:border sm:rounded-sm sm:shadow-md">
          <div className="relative">
            <Image
              src={rect}
              alt="img1"
              width={50}
              height={50}
              className="mb-2 rounded-lg mx-20 2xl:mx-40 lg:mx-24 md:mx-14 sm:mx-5"
            />
            <Image
              src={peop}
              alt="img1"
              width={50}
              height={50}
              className="mb-2 mx-20 rounded-lg lg:mx-24 2xl:mx-40 absolute top-0 lg:right-0 -left-4 z-10 md:mx-14 sm:mx-5"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-1 font-inter text-gray-800 text-center md:text-xl sm:text-sm">
            Membership Organization
          </h2>

          <p className="text-gray-600 font-inter text-center lg:text-base">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-4 py-6 px-4 mx-4 my-4 border rounded-lg shadow-md">
          <div className="relative">
            <Image
              src={rect}
              alt="img1"
              width={50}
              height={50}
              className="mb-2 mx-20 rounded-lg 2xl:mx-40 lg:mx-24 md:mx-14 sm:mx-5"
            />
            <Image
              src={peop}
              alt="img1"
              width={50}
              height={50}
              className="mb-2 mx-20 rounded-lg lg:mx-24 2xl:mx-40 absolute top-0 lg:right-0 -left-4 z-10 md:mx-14 sm:mx-5"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-1 font-inter text-gray-800 text-center lg:text-2xl lg:leading-6 md:text-xl sm:text-sm">
            Membership Organization
          </h2>

          <p className="text-gray-600 font-inter text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-4 py-6 px-4 mx-4 my-4 border rounded-lg shadow-md">
          <div className="relative">
            <Image
              src={rect}
              alt="img1"
              width={50}
              height={50}
              className="mb-2 mx-20 rounded-lg 2xl:mx-40 lg:mx-24 md:mx-24 sm:mx-5"
            />
            <Image
              src={peop}
              alt="img1"
              width={50}
              height={50}
              className="mb-2 mx-20 rounded-lg 2xl:mx-40 lg:mx-24 absolute lg:right-0 top-0 -left-4 z-10 md:mx-14 sm:mx-5"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-1 font-inter text-gray-800 text-center lg:text-2xl lg:leading-6 md:text-xl sm:text-sm">
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
