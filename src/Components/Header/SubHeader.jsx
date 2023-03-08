import React from 'react'
import { useNavigate } from 'react-router-dom'

const SubHeader = () => {
  const path = window.location.pathname
  const navigate = useNavigate()

  const navigation = [
    {
      name: 'Dashboard',
      href: '/',
    },
    {
      name: 'Courses',
      href: '/Courses',
    },
    {
      name: 'Discussions',
      href: '/discussions',
    },
  ]
  return (
    <div className="container mx-auto flex justify-evenly md:justify-between  px-10 py-3">
      <div>
        <ul className="flex gap-5 font-semibold text-gray-200 ">
          {navigation.map((data, index) => (
            <div key={index}>
              <li
                onClick={() => navigate(data.href)}
                className={`hover:text-white cursor-pointer  rounded-sm ${
                  data.href === path && 'border-b-4'
                }`}
              >
                {data.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <button className="font-semibold text-gray-200 hover:text-white cursor-pointer">
          Profile
        </button>
      </div>
    </div>
  )
}

export default SubHeader
