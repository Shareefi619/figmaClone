import React from "react";
import learnmoreimg from "../../../../public/icon.svg"
import Image from "next/image";
export default function LearnMore() {
  return (
    <div className="flex-initial w-[250px] lg:w-full md:w-full sm:w-full grid grid-cols-3 gap-4 mx-12 lg:grid lg:grid-cols-3 lg:gap-4 lg:mx-12 md:grid md:grid-cols-3 md:gap-4 md:mx-12 sm:grid sm:grid-cols-3 sm:gap-4 sm:mx-12">
      <div className="col-span-3 lg:col-span-1 md:col-span-1 sm:col-span-1 lg:py-16">
        <Image src={learnmoreimg} alt="learnmore" className="w-[90%] h-[100%]" />
      </div>

      <div className="col-span-3 lg:col-span-2 md:col-span-2 sm:col-span-2 py-2 px-2">
        <h2 className="w-full text-lg font-semibold mb-4 font-inter text-gray-600 md:text-2xl sm:text-lg">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-gray-500 mb-6 sm:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis.
        </p>
        <a href="#" className="text-white bg-green-500 py-4 px-8 mt-4 rounded-sm hover:underline">
          Learn More
        </a>
      </div>
    </div>
  );
}
