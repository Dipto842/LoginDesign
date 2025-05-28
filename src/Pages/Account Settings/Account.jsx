import { FaCamera } from "react-icons/fa";

export default function Account() {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center px-4">
      <div className="bg-[#f7f8f9] text-black border border-gray-300 shadow-lg w-full max-w-[440px] min-h-screen rounded-lg py-6 px-4">
        {/* Header */}
        <div className="w-full lg:w-[440px] border h-16 flex items-center justify-start p-3 bg-white text-[17px] -ml-4">
          Account Settings
        </div>

        {/* Profile Section */}
        <div className="flex items-center mt-6 gap-4">
          {/* Avatar with camera icon */}
          <div className="relative">
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img
                  src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp"
                  alt="Profile"
                />
              </div>
            </div>
            {/* Camera icon */}
            <div className="absolute bottom-0 right-0 bg-[#6c25ff] text-white rounded-full w-5 h-5 flex items-center justify-center">
              <FaCamera className="text-[10px]" />
            </div>
          </div>

          {/* User Details */}
          <div>
            <h1 className="font-bold">Marry Doe</h1>
            <p className="text-gray-700 text-sm">Marry@gmail.com</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 text-sm text-gray-800">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>

          {/* Dashed border line */}
          <div className="border-t-2 border-dashed -ml-4 my-6 lg:w-[438px]"></div>
          <div className="lg:border-b-2 absolute border-dashed bottom-0 mb-11 lg:-ml-4 my-6  w-full lg:w-[438px]"></div>
        </div>
      </div>
    </div>
  );
}





