import React from 'react'
import Button from '../../components/ui/Button'
import Steps from '../../components/ui/Steps'
import eye from '../../assets/eye.svg'
import Fieldset from '../../components/ui/Fieldset'
import HeadingOfCreateAccout from '../../components/ui/HeadingOfCreateAccout'
import { useNavigate } from "react-router-dom";
function Step3() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center w-[390px] h-screen m-10 shrink-0 bg-neutral-1000 font-inter">
  <div className="flex w-[390px] h-[824px] pt-0 px-[15px] pb-5 flex-col items-start gap-3 shrink-0 ">
    <Steps onClick={() => navigate("/Step2")}>3</Steps>
    <div className="flex flex-col items-start gap-10 self-stretch">
      <HeadingOfCreateAccout text="We sent you a code">Enter it below to verify ravbinhak843@gmail.com</HeadingOfCreateAccout>
      <div className="flex flex-col items-end gap-3 self-stretch">
        <Fieldset text="Verification code" input="Verification code" icon={eye}/>
        <p className="text-twitter-blue-default text-sm/normal">Didn't receive a code?</p>
      </div>
    </div>
    <div className="flex py-20 flex-col justify-end items-center gap-5 self-stretch grow shrink-0 basis-0">
    <Button variant="white" onClick={() => navigate("/Step4")}>Next</Button>
    </div>
  </div>
</div>

  )
}

export default Step3