import React from 'react'
import Button from '../../components/ui/Button'
import x from '../../assets/signup-x.svg'
import Fieldset from '../../components/ui/Fieldset'
import greenright from '../../assets/green-right.svg'
function Step2() {
  return (
    <div className="w-[390px] h-[868px] shrink-0 bg-neutral-1000 font-inter">
     
  
  <div className="flex w-[390px] h-[824px] pt-0 px-[15px] pb-5 flex-col items-start gap-3 shrink-0 ">
    <div className="flex py-3 px-0 items-center gap-5 self-stretch">
      <button><a href="https://100x-engineers.github.io/layouts-assignment-mohammadravoof/src/login/create-account-step-1.html"><img src={x} /></a></button>
      <p className="text-neutral-50 text-[15px] font-bold ">Step 2 of 4</p>
    </div>
    <div className="flex flex-col items-start gap-5 self-stretch text-neutral-50 text-2xl font-bold">Create your account</div> 
    <div className="flex flex-col items-center gap-8 self-stretch">
        <Fieldset text="Name" input="Name" icon={greenright}/>
        <Fieldset text="Email" input="Email" icon={greenright}/>
        <Fieldset text="Date of birth" input="Date of birth" icon={greenright}/>
    </div>
    <div className="flex pt-20 flex-col justify-end items-center gap-5 self-stretch grow shrink-0 basis-0">
    <Button variant="blue">Sign up</Button>
    </div>
  </div>

    </div>
  )
}

export default Step2