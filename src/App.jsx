import Login from "./pages/Login"
import Step1 from "./pages/signup/Step01"
import Step2 from "./pages/signup/Step2"
import Step3 from "./pages/signup/Step3"
import Step4 from "./pages/signup/Step4"
import Homefeed from './pages/homefeed/Homefeed'
import ComposeTweet from "./pages/compose-tweet/ComposeTweet"
import UserProfile from "./pages/user-profile/UserProfile"
import EditProfile from "./pages/user-profile/EditProfile"
import { useState, useContext } from "react"
// import { AuthProvider, AuthContext } from "./context/AuthProvider"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/Step1",
    element: <Step1/>,
  },
  {
    path: "/Step2",
    element: <Step2/>,
  },
  {
    path: "/Step3",
    element: <Step3/>,
  },
  {
    path: "/Step4",
    element: <Step4/>,
  },
  {
    path: "/Homefeed",
    element: <Homefeed/>,
  },
  {
    path: "/ComposeTweet",
    element: <ComposeTweet/>,
  },
  {
    path: "/UserProfile",
    element: <UserProfile/>,
  },
  {
    path: "/EditProfile",
    element: <EditProfile/>,
  },
]);



function App() {
  // const { isLoggedIn } = useContext(AuthContext);

  return (
    // <AuthProvider>
    // <div className="flex bg-neutral-1000">
    //   <Login/>
     
    
      
    //  </div>
    <div className="flex items-center justify-center w-screen bg-neutral-1000">
    <RouterProvider router={router} />
    </div>
    // </AuthProvider>
  )
}

export default App
