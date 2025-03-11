import { Link } from "react-router-dom";
const Profile = () => {
    return ( 
            <div className="text-center pt-16 ">

             
            <div className="flex justify-center items-center mt-50">
            <div className="flex flex-col gap-4 justify-center items-center bg-gray-100 p-4 rounded-lg w-100 ">
            <h1 >
                    My Profile
            </h1>
            <Link 
                    to="/notification" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md w-full 
                               hover:bg-blue-600 transition-colors duration-200 
                               transform hover:scale-[1.02] shadow-sm hover:shadow-md
                               focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Notification
                </Link>
                <button 
                    className="bg-red-500 !text-white px-4 py-2 rounded-md w-full
                               hover:bg-red-600 transition-all duration-200 
                               transform hover:scale-[1.02] shadow-sm hover:shadow-md
                               active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                    Logout
                </button>
            </div></div>
        </div>
     );
}
 
export default Profile;