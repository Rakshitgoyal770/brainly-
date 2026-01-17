
import { FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import NavComponent from "./navComponants";
import { Brain } from "lucide-react";
export default function Navbar(){
    return(
        <div className="h-full bg-gray-100 shadow-md flex flex-col px-4">
            <div className="flex gap-4 p-1 items-center font-bold text-2xl border-b mb-4 text-purple-600 text-2xl">
             <Brain className="w-10 h-10 text-purple-400"/> Second Brain
            </div>
            <div>
               <NavComponent  icon={<FaYoutube className="w-10 h-10 text-red-600" />} title="YouTube" />
                <NavComponent icon={<FaTwitter className="w-10 h-10 text-blue-400" />} title="Twitter" />
                <NavComponent icon={<FaLinkedin className="w-10 h-10 text-blue-700" />} title="LinkedIn" />
                <NavComponent icon={<FaInstagram className="w-10 h-10 text-pink-500" />} title="Instagram" />
            </div>
        </div>
    )
}