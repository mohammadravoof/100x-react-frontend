
import React from 'react'
import arrowleft from '../../assets/arrow-left.svg'
import cameraicon from '../../assets/camera-icon.svg'
import x from '../../assets/x-icon.svg'
import editprofilesourceimage from '../../assets/edit-profile-source-image.png'
import background from '../../assets/edit-profile-background.png'
import Fieldset from '../../components/ui/Fieldset'
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  return (
   <div className="w-[390px] h-[990px] shrink-0 bg-neutral-1000 font-inter ">

  <div className="flex w-[390px] py-0 px-4 flex-col items-start gap-3">
    <div className="flex py-3 px-0 justify-between items-center self-stretch">
      <div className="flex items-center gap-5">
<button onClick={() => navigate("/100x-react-frontend/UserProfile")}><img src={arrowleft} alt="arrow" /></button>
        <p className="text-neutral-50 font-bold">Edit profile</p>
      </div>
<button className="flex px-5 py-2 justify-center items-center gap-[10px] rounded-[30px] bg-neutral-50 hover:bg-neutral-200 disabled:bg-neutral-500 shadow-[0_8px_16px_0_rgba(0,0,0,0.25)] backdrop-blur-[23.668209075927734px]" onClick={() => navigate("/100x-react-frontend/UserProfile")}><span className="font-bold text-sm/normal text-neutral-1000">Save</span></button>
    </div>
    <div className="flex flex-col items-start gap-3 self-stretch">
      <div className="z-0 relative w-[358px] h-[200px] shrink-0" >
        <img className="w-full " src={background} alt="banner image" />
        {/* <img class="absolute top-[132px] left-[6px] " src="../../public/images/edit-profile-avatar.png" alt="profile-avatar"> */}
        <div className="inline-flex h-[88px] w-[88px] absolute top-[132px] left-[6px] justify-center items-center  rounded-[200px] border-[4px] border-neutral-1000 "><img className="rounded-[200px]" src={editprofilesourceimage} alt="profile-image" /><button className="absolute flex p-1 justify-center items-center gap-[10px] rounded-[1000px] bg-black bg-opacity-60 "><img src={cameraicon} alt="camera-icon" /></button></div>
        <div className="flex items-start gap-2 absolute left-[143px] top-[84px]">
          <button className="flex p-1 justify-center items-center gap-[10px] rounded-[1000px] bg-black bg-opacity-60 "><img src={cameraicon} alt="camera-icon" /></button>
          <button className="flex p-1 justify-center items-center gap-[10px] rounded-[1000px] bg-black bg-opacity-60"><img src={x} alt /></button>
        </div>
      </div>
    </div>
    <div className="flex flex-col mt-3 items-center gap-5 self-stretch">
      
      <Fieldset text="Name" input="Name"/>
      <Fieldset text="Bio" input="Bio"/>
      <Fieldset text="Location" input="Location"/>
      <Fieldset text="Website" input="Website"/>
      
    </div>
  </div>
</div>

  )
}

export default EditProfile