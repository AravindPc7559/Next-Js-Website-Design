import { useState } from 'react'
import Courses from './Components/Courses/Courses'
import Dashboard from './Components/Dashboard/Dashboard'
import Discussions from './Components/Discussions/Discussions'
import FooterOne from './Components/Footer/FooterOne'
import FooterThree from './Components/Footer/FooterThree'
import FooterTwo from './Components/Footer/FooterTwo'
import Header from './Components/Header/Header'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const [user, SetUser] = useState('')
  const navigate = useNavigate()
  return (
    <div className="App">
      {localStorage.getItem('UserName') === null ? (
        <div className="w-full h-screen grid place-content-center bg-blue-400">
          <div className="h-auto w-auto">
            <input
              type="text"
              className="w-[400px] p-3 focus:outline-none rounded-xl"
              placeholder="Enter Your Name..."
              onChange={(e) => SetUser(e.target.value)}
            />
            <div className="flex justify-center mt-3">
              <button
                className="bg-green-400 px-7 py-2 rounded-lg shadow-xl"
                onClick={() => {
                  localStorage.setItem('UserName', user)
                  navigate('/')
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <div className="w-full h-auto bg-gray-100 py-10 ">
            <div className="container mx-auto px-10">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Courses" element={<Courses />} />
                <Route path="/discussions" element={<Discussions />} />
              </Routes>
            </div>
          </div>
          <FooterOne />
          <FooterTwo />
          <FooterThree />
        </>
      )}
    </div>
  )
}

export default App
