import React from 'react'
import SubHeader from './SubHeader'

const Header = () => {
  const name = localStorage.getItem('UserName')
  return (
    <>
      <div className="w-full min-h-[120px] bg-blue-500 border-b py-7">
        <div className="container mx-auto flex justify-between pt-7 px-10 md:px-2">
          <div className="flex">
            <img
              src="/assets/NavIcon.png "
              className="hidden md:flex w-[100px] md:w-[100px] p-2 bg-transparent"
              alt=""
            />
            <div className="ml-2 md:mt-4 mt-2">
              <h1
                className="font-extrabold text-white text-xl md:text-2xl -tracking-tight
            "
              >
                {name}
              </h1>
              <p className="text-sm md:text-base  text-gray-300">
                Student 2,300IQ
              </p>
            </div>
          </div>
          <div className="mt-3">
            <button className="px-6 py-2 border focus:outline-none border-gray-200 text-white font-semibold rounded-md">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[50px] bg-blue-500 border-b">
        <SubHeader />
      </div>
    </>
  )
}

export default Header
