import { useContext } from "react";

import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";








const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
 

  const onSubmit = (data) => {
    console.log(data)
    
  }


  return (
    <div>
      <div className="  bg-white min-h-screen  flex    justify-center items-center  ">
        <div className=" border-gray-300 bg-[#f7f8f9] text-black border  grid  items-start justify-center  lg:w-[440px] shadow min-h-screen mt-5 mb-2 ">
        
           

         
          
          <form onSubmit={handleSubmit(onSubmit)} className="   mt-7">
             <h1 className="text-3xl  font-bold leading-[135%] mx-auto">
              
               Signin to your <br></br>PopX account 
            </h1>
            <p className="text-gray-500 w-[200px] mt-5 mb-5">
              Lorem ipsum dolor sit amet,
consectetur adipisicing elit.
            </p>
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Email Address</label>
              <input className="border-2 rounded-lg w-full p-3 px-5 text-sm bg-[#f7f8f9]" type="email" placeholder="Enter email address"  />
            </div>

           
             <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Password</label>
              <input className="border-2 rounded-lg w-full p-3 px-5 text-sm bg-[#f7f8f9]" type="email" placeholder="Enter your Password"  />
            </div>
           

            <div className=" mx-auto mt-6">
             <Link to={'/Account'}> <button className="mx-auto bg-gray-300 mb-6 h-11 rounded-lg  text-white   w-full">Login</button></Link>
            </div>
          </form>
        
        </div>

      
      </div>

    </div>
  );
};

export default Login;