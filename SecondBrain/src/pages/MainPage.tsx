// import { Plus, User, Search, Trash } from "lucide-react";
import Navbar from "../components/ui/Navbar";
import Dashboard from "../components/dashboard";
import NewCard from "../components/NewCard";
import { useState } from "react";

export default function MainPage(){
  const[isOpen, setIsOpen] = useState(false);
  return (
  <div>
    <div className="flex flex h-screen">
      <NewCard open={isOpen} onClose={() => setIsOpen(false)} />
      <div className="w-1/4  "><Navbar/></div>
      <div className="w-3/4"><Dashboard onAdd={() => setIsOpen(true)} /></div>
    </div>
  </div>
    
  )
}