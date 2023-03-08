import React from 'react'

const Tags = ({ data }) => {
  return (
    <>
      {data.map((data, index) => (
        <div
          key={index}
          className="mt-5 w-full shadow-md p-5 flex justify-between rounded-md"
        >
          <div className="flex gap-5">
            <div className="w-[80px] h-[50px] object-contain rounded-lg">
              <img
                src={data.img}
                className="w-full h-full rounded-lg"
                alt="CourseImage"
              />
            </div>
            <div>
              <h1 className="text-xl">{data.name}</h1>
              <p className="text-sm text-gray-500 -tracking-tighter">
                {data.courses} Courses
              </p>
            </div>
          </div>
          <div className="flex ite">
            <button className="text-xl text-gray-400">Resume</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Tags
