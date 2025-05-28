
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";





const Register = () => {





  return (
    <div>
      <div className="  bg-white min-h-screen  flex    justify-center items-center  ">
        <div className=" border-gray-300 bg-[#f7f8f9] text-black border  grid   justify-center   lg:w-[440px] shadow min-h-screen mt-5 mb-2 ">
        
           

         
          
          <form  className="  mt-7">
             <h1 className="text-3xl  font-bold leading-[135%] mx-auto mb-3">
              
              Create your  <br></br>PopX account
            </h1>
          
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Full Name<span className="text-red-700">*</span></label>
              <input className="border-2 rounded-lg  h-10 w-full p-3 px-5 text-sm bg-[#f7f8f9]" type="email" placeholder="Enter your  Name"  />
            </div>

           
             <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Phone Number<span className="text-red-700">*</span></label>
              <input className="border-2 rounded-lg w-full h-10 p-3 px-5 text-sm bg-[#f7f8f9]" type="email" placeholder="Enter your Phone Number"  />
            </div>
             <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 ">Email addres<span className="text-red-700">*</span></label>
              <input className="border-2 rounded-lg w-full h-10 p-3 px-5 text-sm bg-[#f7f8f9]" type="email" placeholder="Enter  Email addres "  />
            </div>
             <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Password<span className="text-red-700">*</span></label>
              <input className="border-2 rounded-lg w-full h-10 p-3 px-5 text-sm bg-[#f7f8f9]" type="email" placeholder="Enter your Password"  />
            </div>
             <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Company Name<span className="text-red-700">*</span></label>
              <input className="border-2 rounded-lg w-full h-10 p-3 px-5 text-sm bg-[#f7f8f9]" type="email" placeholder="Enter your Company Name"  />
            </div>
           <div className="mt-4">
            Are you an Agency?<span className="text-red-700">*</span>
            <div className="space-x-6">
              <input type="radio" name="radio-3" className="radio radio-sm radio-primary" /> yes
            <input type="radio" name="radio-3" className="radio-sm radio radio-primary" /> No
            </div>
           </div>

            <div className="  mt-72 ">
              <Link to={'/Account'}><button className="mx-auto bg-[#6c25ff] mb-6 h-11 rounded-lg  text-white   w-full">Create Account</button></Link>
            </div>
          </form>
        
        </div>

      
      </div>
    </div>
  );
};

export default Register;