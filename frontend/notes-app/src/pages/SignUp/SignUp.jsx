import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput';
import Navbar from '../../components/Navbar/Navbar';
import { validateEmail } from '../../utlis/helper';


const SignUp = () => {

  const [name, setName] =  useState("");
  const[email , setEmail] = useState("");
  const [ password , setPassword] = useState("");
  const[ error , setError ] = useState(null);


  const handleSignUp =   (e) => {
    e.preventDefault();

    if(!name ){
      setError("Please enter your name");
      return; 
    }

    if(!validateEmail(email)){
      setError ("PLease enter valid email address");
      return;
    }

    if(!password){
      setError("PLease enter valid password ");
      return ;
    }

    setError(' ')


    
  }
  return <>
   <Navbar />

      <div className="flex items-center justify-center mt-28 ">
        <div className="w-96 rounded bg-[#F7F4EA] px-7 py-10 shadow-md">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl font-semibold mb-7 text-center">SignUp</h4>

            <input
              type="text"
              placeholder="Name"
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
              value={name }
              onChange={(e) => setName(e.target.value)}
            /> 




            <input
              type="text"
              placeholder="Email "
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
              value={email }
              onChange={(e) => setEmail(e.target.value)}
            /> 


            <PasswordInput 
            value = {password}
            onChange = {(e)  => setPassword(e.target.value)}></PasswordInput>

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button type ="submit" className='bg-blue-600 text-white py-1 px-18 ml-10 mt-3 rounded-md hover:bg-blue-800'>Create Account</button>

            <p className='text-sm text-center mt-4'>
              Already have an Account ?{" "}
              <Link to = "/login" className= "font-medium text-blue-600 underline "> Login 
              </Link>
            </p>
              </form>
              </div>
              </div>
  
  </>
}

export default SignUp
