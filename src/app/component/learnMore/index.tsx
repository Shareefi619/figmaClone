import React from "react";
import learnmoreimg from "../../../../public/icon.svg"
import Image from "next/image";
export default function LearnMore() {
  return (
    <div className="grid grid-cols-3 gap-4 mx-12">
      <div className="col-span-1 lg:py-16">
        <Image src={learnmoreimg} alt="learnmore" className="w-full h-[100%]" />
      </div>

      <div className="col-span-2 py-8 px-10">
        <h2 className=" w-10/12 text-4xl font-semibold mb-4 font-inter text-gray-600 md:text-2xl sm:text-lg">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-gray-500 mb-6 sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <a href="#" className="text-white bg-green-500 py-4 px-8 mt-4 rounded-sm hover:underline">
          Learn More
        </a>
      </div>
    </div>
  );
}
