import React from 'react'
import SlideOne from '../CourseSlide/SlideOne'
import Tags from '../Common/Tags/Tags'
import CourseCard from '../Common/CourseCard/CourseCard'
import Slider from '../Common/Slider/Slider'

const Courses = () => {
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
      img: '/assets/WordPress.png',
      name: 'WordPress',
      courses: '24',
    },
    {
      img: '/assets/reactNative.avif',
      name: 'React Native',
      courses: '24',
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
    {
      color: 'bg-blue-500',
      img: '/assets/WordPress.png',
      txt: 'Build A WordPress WebSite',
    },
    {
      color: 'bg-blue-500',
      img: '/assets/reactNative.avif',
      txt: 'Became a React Native',
    },
  ]

  const SlideData = [
    {
      heading: 'ACHIEVEMENTS',
      date: 'Jan 5, 2018',
      headImage: '/assets/Swift.png',
      isNext: false,
      bodyImage: '/assets/Trophy.png',
      bodyHeading: 'Flinto',
      bodyDescription: 'Introduction To The App Design Application',
    },
    {
      heading: 'ACHIEVEMENTS',
      date: 'Jan 5, 2018',
      headImage: '/assets/Swift.png',
      isNext: true,
      bodyImage: '/assets/Trophy.png',
      bodyHeading: 'Angular Fundamentals',
      bodyDescription: 'Creating and communicating between angular components',
    },
  ]
  return (
    <div>
      <div className="md:p-16">
        <SlideOne />
      </div>

      <div>
        <div className="mt-20">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Learning Paths</h1>
            <p className="underline cursor-pointer">My Learning Paths</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Tags data={learningPath} />
          </div>
          <div className="mt-20 grid place-content-center gap-2 ">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Courses</h1>
              <p className="underline cursor-pointer ">My Courses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
              <CourseCard data={courseData} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Slider data={SlideData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
