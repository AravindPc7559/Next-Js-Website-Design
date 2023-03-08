import React from 'react'

const SlideOne = () => {
  return (
    <>
      <div className="w-full h-auto min-h-[100px] relative">
        <img
          className="min-h-[400px]  md:max-h-[500px] w-full"
          src="https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg"
          alt=""
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-center text-3xl font-extrabold text-white -tracking-tighter">
            Introduction to typescript
          </h1>
          <div className="flex gap-3 justify-center py-2 text-gray-300">
            <p>50 Minute Left</p>
            <p>12 Lessons</p>
          </div>
          <div className="flex gap-6 justify-center">
            <button className="px-6 py-2 border focus:outline-none border-gray-200 hover:bg-white hover:text-black text-white font-semibold rounded-md">
              Edit Profile
            </button>
            <button className="px-6 py-2 border focus:outline-none border-gray-200 text-white font-semibold rounded-md hover:bg-white hover:text-black">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 w-full p-5 flex  gap-16 rounded-md">
        <div className="flex gap-5">
          <div className="w-[80px] h-[50px] object-contain rounded-lg">
            <img
              src="https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg"
              className="w-full h-full rounded-lg"
              alt="CourseImage"
            />
          </div>
          <div>
            <h1 className="text-xl">Angular Fundamentals</h1>
            <p className="text-sm text-gray-500 -tracking-tighter">
              with Aravind pc
            </p>
          </div>
        </div>
        <div className="md:flex items-center hidden">
          <button className="text-xs text-gray-400 flex gap-3">
            <span> Your Rating</span>
            <img
              className="w-[100px] bg-blend-screen"
              src="/assets/Rating.png"
              alt=""
            />
            <span className="">4/5</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default SlideOne
