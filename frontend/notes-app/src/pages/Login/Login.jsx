import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utlis/helper'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const[error, setError] = useState(null);


  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateEmail(email)){
      setError("PLease enter valid email ");
      return ;

    }


    if (!password){
      setError ("Please enter the password ");
      return ;
    }

    setError("")
    
  }

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28 ">
        <div className="w-96 rounded bg-[#F7F4EA] px-7 py-10 shadow-md">
          <form onSubmit={handleSubmit}>
            <h4 className="text-2xl font-semibold mb-7 text-center">Login</h4>

            {/* Email input */}
            <input
              type="text"
              placeholder="Email"
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password input */}
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />


          {error && <p className='text-red-500 text-xs pb-1'> {error}</p>}


            {/* Login button */}
            <button
              type="submit"
              className="w-full text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/signUp" className="font-medium text-blue-600 underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
