import React, { useCallback, useState } from 'react'

const Discussion = ({ data, limit }) => {
  const [discussionLimit, setDiscussionLimit] = useState(limit)

  const handleNextDiscussion = useCallback(() => {
    if (data.length <= limit) {
      setDiscussionLimit(discussionLimit + 1)
    }
  }, [data.length, discussionLimit, limit])

  return (
    <div className="`w-full h-auto bg-white mt-4 shadow-xl">
      <div className="p-6 md:flex justify-between border-b">
        <div>
          <input
            type="search"
            className="p-5 md:w-[500px] w-full border bg-gray-100 rounded-lg"
            placeholder="Search Discussions...."
          />
        </div>
        <div className="flex gap-5 mt-6 md:mt-0">
          <select className="bg-transparent">
            <option value="">My Post</option>
          </select>
          <button className="px-6 py-2 border focus:outline-none border-gray-200 text-gray-600 font-semibold rounded-md">
            Ask Me A Question
          </button>
        </div>
      </div>

      {data.slice(0, discussionLimit).map((obj, index) => (
        <div
          className="mt-5 w-full h-auto md:flex justify-between px-5 border-b-4 py-3"
          key={index}
        >
          <div className="md:flex gap-4">
            <div className="w-[60px] h-[60px] object-contain">
              <img
                className="rounded-full w-full h-full object-fill"
                src={obj.img}
                alt="UserImage"
              />
            </div>
            <div className="mt-1">
              <p className="text-gray-400">2 day ago</p>
              <h3>{obj.name}</h3>
            </div>
          </div>
          <div className="md:mt-0 mt-6">
            <h1 className="text-start">{obj.heading}</h1>
            {obj.btn && (
              <button className="rounded-3xl p-3 border">{obj.btn}</button>
            )}
          </div>
          <div className="mt-6 md:mt-0">
            <h1 className="text-center">1</h1>
            <p className="text-center">answers</p>
          </div>
        </div>
      ))}

      <div className="py-3 flex justify-center">
        <button
          className="underline cursor-pointer focus:outline-none"
          onClick={handleNextDiscussion}
        >
          View More Discussions
        </button>
      </div>
    </div>
  )
}

export default Discussion
