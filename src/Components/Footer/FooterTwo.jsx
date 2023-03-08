import React from 'react'
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'

const FooterTwo = () => {
  return (
    <div className="w-full h-auto bg-gray-500">
      <div className="container mx-auto md:flex justify-between px-6 py-16">
        <div className="flex gap-10">
          <div>
            <h1 className="text-xl font-semibold text-gray-300">Follow Us</h1>
            <div className="flex gap-3 text-3xl text-gray-300 rounded-lg mt-2 cursor-pointer">
              <AiFillFacebook />
              <FaTwitterSquare />
              <FaInstagramSquare />
              <FaYoutubeSquare />
            </div>
          </div>
          <div className='mt-5'>
            <button className="px-6 py-2 border focus:outline-none border-gray-200 text-white font-semibold rounded-md">
              English \/
            </button>
          </div>
        </div>
        <div className="text-gray-300 md:mt-0 mt-10">
          <div className="flex gap-5 underline justify-end">
            <p className="cursor-pointer">Terms</p>
            <p className="cursor-pointer">Privacy Policy</p>
          </div>
          <div className="mt-2">
            <p>Copyright 2019@ All Right Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTwo
