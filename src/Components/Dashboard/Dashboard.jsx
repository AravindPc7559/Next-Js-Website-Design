import React from 'react'
import RadarGraph from '../Graph/Radargraph'
import AreaGraph from '../Graph/AreaGraph'
import { BsGraphUpArrow } from 'react-icons/bs'
import Slider from '../Common/Slider/Slider'
import Tags from '../Common/Tags/Tags'
import CourseCard from '../Common/CourseCard/CourseCard'
import Discussion from '../Common/Discussion/Discussion'

const Dashboard = () => {
  const learningPath = [
    {
      img: '/assets/angular.png',
      name: 'Angular',
      courses: '24',
    },
    {
      img: '/assets/Swift.png',
      name: 'Swift',
      courses: '24',
    },
    {
      img: '/assets/reactNative.avif',
      name: 'React Native',
      courses: '24',
    },
  ]

  const SlideData = [
    {
      heading: 'ACHIEVEMENTS',
      date: 'Jan 5, 2018',
      headImage: '/assets/Swift.png',
      isNext: true,
      bodyImage: '/assets/Trophy.png',
      bodyHeading: 'Flinto',
      bodyDescription: 'Introduction To The App Design Application',
    },
  ]

  const courseData = [
    {
      color: 'bg-blue-500',
      img: '/assets/angular.png',
      txt: 'Learn Angular',
    },
    {
      color: 'bg-yellow-500',
      img: '/assets/Swift.png',
      txt: 'Learn an IOS Application',
    },
  ]

  const DiscussionData = [
    {
      img:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Laza Bogdan',
      heading: 'Using Angular HttpClientModule instead of HttpModule',
      btn: 'Angular Fundamentals',
    },
    {
      img:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Adam Curtis',
      heading:
        'Why iam getting an error while iam trying to install angular/htpp@2.4.2',
    },
  ]

  return (
    <div className="w-full">
      <div className="w-full px-5 bg-white rounded-md shadow-xl py-5 border-l-8 border-red-600 flex justify-between">
        <div>
          <h1 className="font-normal">
            Your subscription ends on{' '}
            <span className="font-bold text-black">25 February 2015</span>
          </h1>
        </div>
        <div>
          <button className="text-gray-400">Upgrade</button>
        </div>
      </div>
      <div className="w-full mt-10 md:flex justify-between gap-5 h-auto">
        <div className="md:w-[50%]">
          <div className="w-full h-auto shadow-xl p-5">
            <div className="flex justify-between">
              <div className="flex">
                <h1 className="text-3xl flex items-center text-red-700">
                  <p className="font-semibold">116</p>
                </h1>
                <div className="ml-3">
                  <h1 className="text-lg font-semibold">Angular</h1>
                  <p className="text-sm text-gray-400">Best Score</p>
                </div>
              </div>
              <div className="flex items-center">
                <select name="" id="">
                  <option value="">Popular Topics</option>
                </select>
              </div>
            </div>
            <div className="mt-5 grid place-content-center">
              <RadarGraph />
            </div>
          </div>
          <div className="mt-20">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Learning Paths</h1>
              <p className="underline cursor-pointer">My Learning Paths</p>
            </div>
            <Tags data={learningPath} />
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className="w-full h-auto shadow-xl p-5">
            <div className="flex justify-between">
              <div className="flex">
                <h1 className="text-3xl flex items-center text-red-700">
                  <p className="font-semibold">432</p>
                </h1>
                <div className="ml-3">
                  <h1 className="text-lg font-semibold">Experience IQ</h1>
                  <p className="text-sm text-gray-400">
                    4 days streak this week
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <BsGraphUpArrow className="cursor-pointer text-xl" />
              </div>
            </div>
            <div className="mt-5 grid place-content-center min-h-[100px]">
              <AreaGraph />
            </div>
          </div>
          <div>
            <Slider data={SlideData} />
          </div>
          <div className="mt-20 grid place-content-center gap-2 ">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Courses</h1>
              <p className="underline cursor-pointer ">My Courses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <CourseCard data={courseData} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 ">
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold">Discussions</h1>
        </div>
        <Discussion data={DiscussionData} limit={2} />
      </div>
    </div>
  )
}

export default Dashboard
