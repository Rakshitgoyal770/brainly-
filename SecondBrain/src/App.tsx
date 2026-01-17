import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import SignUp from "./pages/SignUp"
import Signin from "./pages/Signin"

export default function Main(){
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Dashboard" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}