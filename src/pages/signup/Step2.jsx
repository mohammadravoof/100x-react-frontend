import React, { useContext } from 'react'
import Button from '../../components/ui/Button'
import Steps from '../../components/ui/Steps'
import Fieldset from '../../components/ui/Fieldset'
import greenright from '../../assets/green-right.svg'
import HeadingOfCreateAccout from '../../components/ui/HeadingOfCreateAccout'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext"

function Step2() {
  const navigate = useNavigate();
  const { formData } = useContext(UserContext);
  const dob = `${formData.day} ${formData.month} ${formData.year}`;
  // const formValues = userData.formData;

  return (
    <div className="flex items-center w-[390px] h-screen m-10 shrink-0 bg-neutral-1000 font-inter">
     
  
  <div className="flex w-[390px] h-[824px] pt-0 px-[15px] pb-5 flex-col items-start gap-3 shrink-0 ">
    <Steps onClick={() => navigate("/Step1")}>2</Steps>
    <HeadingOfCreateAccout text="Create your account"></HeadingOfCreateAccout> 
    <div className="flex flex-col items-center gap-8 self-stretch">
        <Fieldset text="Name" input={formData.name}  icon={greenright} focused/>
        <Fieldset text="Email" input={formData.email} icon={greenright} focused/>
        <Fieldset text="Date of birth" input={dob} icon={greenright} focused/>
    </div>
    <div className="flex py-20 flex-col justify-end items-center gap-5 self-stretch grow shrink-0 basis-0">
    <Button variant="blue" onClick={() => navigate("/Step3")}>Sign up</Button>
    </div>
  </div>

    </div>
  )
}

export default Step2