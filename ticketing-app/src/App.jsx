import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import RegistrationForm from "./componets/RegistrationForm";
import Home from "./Page/Home";
import UserProfile from "./componets/profile";
import QRCodeScanner from "./componets/QRcodeScanner";
import QRCode from "./componets/QRCode";
import { useEffect, useState } from "react";
import uploadUsers from "./uploadUser";
import Loading from "./componets/Loading";



const Wrapper =()=>{
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(()=>{

    const initiateUploadUser = async()=>{
      try {
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        await uploadUsers()
        console.log("user upload successfully")
      } catch (error) {
        console.error("Error uploading user:", error)
      }finally{
        setLoading(false)
        navigate("/home")
      }
    }

    initiateUploadUser()
    
},[])

if(loading){
  return <Loading/>

}

return null
}



export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/scan" element={<QRCodeScanner />} />
        
        </Routes>
      </div>
    </Router>
  );
}
