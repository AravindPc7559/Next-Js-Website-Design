import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

const Slider = ({data}) => {


  return (
    <>
      {data.map((obj, index) => (
        <div className="w-full h-auto shadow-xl p-5 mt-10 bg-blue-500 min-h-[300px]" key={index}>
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">{obj.heading}</h1>
              <p className="text-gray-300">{obj.date}</p>
            </div>
            <div className="w-[50px] h-[50px] object-contain rounded-lg">
              <img
                src={obj.headImage}
                className="w-full h-full rounded-lg"
                alt="CourseImage"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 mt-6 relative">
            {obj.isNext && (
              <div className="absolute bg-white p-3 rounded-full -right-10 top-[50%] -translate-y-[50%] cursor-pointer">
                <FaGreaterThan />
              </div>
            )}
            <div className="w-[150px] h-[150px] object-contain rounded-lg bg-transparent">
              <img
                src={obj.bodyImage}
                className="w-full h-full bg-transparent rounded-lg -rotate-12"
                alt="CourseImage"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                {obj.bodyHeading}
              </h1>
              <p className="text-gray-300">{obj.bodyDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Slider
