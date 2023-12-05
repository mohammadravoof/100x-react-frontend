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
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/100x-react-frontend/",
    element: <Login/>,
  },
  {
    path: "/100x-react-frontend/Step1",
    element: <Step1/>,
  },
  {
    path: "/100x-react-frontend/Step2",
    element: <Step2/>,
  },
  {
    path: "/100x-react-frontend/Step3",
    element: <Step3/>,
  },
  {
    path: "/100x-react-frontend/Step4",
    element: <Step4/>,
  },
  {
    path: "/100x-react-frontend/Homefeed",
    element: <Homefeed/>,
  },
  {
    path: "/100x-react-frontend/ComposeTweet",
    element: <ComposeTweet/>,
  },
  {
    path: "/100x-react-frontend/UserProfile",
    element: <UserProfile/>,
  },
  {
    path: "/100x-react-frontend/EditProfile",
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
    <RouterProvider router={router} />
    // </AuthProvider>
  )
}

export default App
