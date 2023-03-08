import React from 'react'

const FooterOne = () => {
  const options = [
    {
      heading: 'Learn',
      option1: ['Library', 'Featured', 'Explore', 'Learning Paths'],
    },
    {
      heading: 'Join Us',
      option1: ['Pricing', 'Login', 'Sign Up', 'Learning Paths'],
    },
    {
      heading: 'Community',
      option1: [
        'Discussions',
        'Ask Questions',
        'Student Profile',
        'Instructor Profile',
      ],
    },
  ]
  return (
    <div className="w-full h-auto bg-white">
      <div className="container mx-auto md:flex justify-between px-6 py-10">
        {options.map((data, index) => {
          return (
            <div key={index} className="md:mt-0 mt-10">
              <h1 className="text-3xl text-gray-500 font-extrabold">
                {data.heading}
              </h1>
              {data.option1.map((value, index) => (
                <ul
                  className="text-md  flex-col text-gray-500 mt-3 ml-1"
                  key={index}
                >
                  <li className="font-semibold">{value}</li>
                </ul>
              ))}
            </div>
          )
        })}
        <div className="max-w-[500px]">
          <h1 className="text-3xl text-gray-500 text-start md:text-end md:mt-0  mt-6 font-extrabold">
            Tutorio
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            laborum eos sit quam nisi facilis dolores doloremque qui! Pariatur,
            eius!
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterOne
