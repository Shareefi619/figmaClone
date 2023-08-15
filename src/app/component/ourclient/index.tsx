import React from 'react'
import Image from 'next/image'
import logo1 from "public/Logo1.png"
import logo2 from "public/Logo2.png"
import logo3 from "public/Logo3.png"
import logo4 from "public/Logo4.png"
import logo5 from "public/Logo5.png"
import logo6 from "public/Logo7.png"
export default function Client() {
  return (
    <div className="w-[100%] flex-start justify-center items-center lg:flex-row lg:justify-center lg:items-center lg:my-12 lg:w-full md:flex-row md:justify-center md:items-center md:my-12 md:w-full sm:flex-row sm:justify-center sm:items-center sm:my-12 sm:w-full">
    <div className="text-center">
      <h2 className="text-5xl font-semibold mb-2 font-inter text-gray-700">Our Clients</h2>
      <p className="text-gray-600 mb-2">We have been working with Fortune 500+ clients</p>
    </div>
    <div className="grid grid-cols-12 w-3/4 mx-auto justify-center items-center">
      <Image src={logo1} alt='logo2' width={50} height={50} className=' col-span-2'/>
      <Image src={logo2} alt='logo3' width={50} height={50} className=' col-span-2'/>
      <Image src={logo3} alt='logo4' width={50} height={50} className=' col-span-2'/>
      <Image src={logo4} alt='logo5' width={50} height={50} className=' col-span-2'/>
      <Image src={logo5} alt='logo6' width={50} height={50} className=' col-span-2'/>
      <Image src={logo6} alt='logo7' width={50} height={50} className=' col-span-2'/>
    </div>
  </div>
  )
}
