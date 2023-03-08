import React from 'react'
import { BiUpArrow } from 'react-icons/bi'

const FooterThree = () => {
  const items = [
    'Catalog',
    'Student',
    'Instructor',
    'Community',
    'Account',
    'Components',
  ]
  return (
    <div className="bg-black w-full h-auto px-10 py-2">
      <ul className="flex gap-10 text-gray-400">
        {items.map((data, index) => (
          <li
            className="hover:text-white cursor-pointer flex gap-1"
            key={index}
          >
            <p>{data} </p>
            <span>
              <BiUpArrow className="mt-1 text-xs" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterThree
