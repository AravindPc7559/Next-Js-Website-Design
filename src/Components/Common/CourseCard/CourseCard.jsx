import React from 'react'

const CourseCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          className="max-w-[300px] shadow-lg h-auto relative rounded-md"
          key={index}
        >
          <div
            className={`${item.color} h-[200px] min-w-full absolute z-10 opacity-60 rounded-md`}
          />
          <img
            src={item.img}
            className="h-[200px] rounded-t-md w-full"
            alt=""
          />
          <div className="py-3 flex justify-center items-center">
            <h1>{item.txt}</h1>
          </div>
        </div>
      ))}
    </>
  )
}

export default CourseCard
