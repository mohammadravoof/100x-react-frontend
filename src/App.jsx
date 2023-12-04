import Login from "./pages/Login"
import Step1 from "./i/signup/Step1"
import Step2 from "./i/signup/Step2"
import Step3 from "./i/signup/Step3"
import Step4 from "./i/signup/Step4"
// import { useState, useContext } from "react"
// import { AuthProvider, AuthContext } from "./context/AuthProvider"

function App() {
  // const { isLoggedIn } = useContext(AuthContext);

  return (
    // <AuthProvider>
    <div className="flex bg-neutral-1000">
      <Login/>
      <Step1/>
      <Step2/>
      <Step3/>
      <Step4/>
    </div>
    // </AuthProvider>
  )
}

export default App
