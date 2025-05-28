import { Link } from "react-router-dom";


export default function LoginPages() {
  return (
    <div className=" min-h-screen bg-white flex flex-1 items-center justify-center ">
    <div className="border-gray-300 bg-[#f7f8f9] text-black border  grid  items-end justify-center  lg:w-[440px] shadow min-h-screen p-2 mt-5 mb-2">

     <div className="lg:w-96 mb-8">
      
        <h1 className="mb-4 text-3xl font-bold">Welcome to PopX</h1>
        <p className="mb-6 font-normal text-gray-500 my-3 w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
     
    
       <Link to={'CreateAccount'} > <button  className="btn btn-primary w-full text-[16px] font-semibold mb-3">Create Account</button></Link>
       <Link to={'login'}> <button className="btn  w-full bg-[#cebafb] mb-2 text-black border border-[#cebafb] font-medium text-[16px]">Already Registered? Login</button></Link>
     </div>
      
    </div>
    
    </div>
  )
}
