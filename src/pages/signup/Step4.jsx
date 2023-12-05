import React from 'react'
import Button from '../../components/ui/Button'
import Steps from '../../components/ui/Steps'
import eye from '../../assets/eye.svg'
import Fieldset from '../../components/ui/Fieldset'
import HeadingOfCreateAccout from '../../components/ui/HeadingOfCreateAccout'
import { useNavigate } from "react-router-dom";
function Step4() {
  const navigate = useNavigate();
  return (
    <div className="w-[390px] h-[868px] shrink-0 bg-neutral-1000 font-inter">
  <div className="flex w-[390px] h-[824px] pt-0 px-[15px] pb-5 flex-col items-start gap-3 shrink-0 ">
    <Steps onClick={() => navigate("/100x-react-frontend/Step3")}>4</Steps>
    <div className="flex flex-col items-start gap-10 self-stretch">
      <HeadingOfCreateAccout text="You'll need a password">Make sure it's 8 character or more</HeadingOfCreateAccout>
      <div className="flex flex-col items-end gap-3 self-stretch">
      <Fieldset text="Password" input="Password" icon={eye}/>
      </div>
    </div>
    <div className="flex pt-20 flex-col justify-end items-center gap-5 self-stretch grow shrink-0 basis-0">
    <Button variant="white" onClick={() => navigate("/100x-react-frontend/Homefeed")}>Next</Button>
    </div>
  </div>
</div>

  )
}

export default Step4