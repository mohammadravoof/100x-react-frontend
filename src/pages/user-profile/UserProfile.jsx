import React from 'react'
import background from '../../assets/profile-background-image.png'
import profileavatar from '../../assets/profile-avatar.png'
import linkicon from '../../assets/link-icon.svg'
import calendericon from '../../assets/calendar-icon.svg'
import plus from '../../assets/plus.svg'
import Tweetbox from '../../components/ui/Tweetbox'
import avatar2 from '../../assets/useravatar2.png'
import avatar3 from '../../assets/useravatar3.png'
import avatar4 from '../../assets/useravatar4.png'
import avatar5 from '../../assets/useravatar5.png'
import { useNavigate } from "react-router-dom";
function UserProfile() {
  const navigate = useNavigate();
  return (
    <div className="w-[390px] h-full shrink-0 bg-neutral-1000 font-inter ">
  
  <div className="static z-0 w-[390px] h-[80px] shrink-0" />
  <img src={background} alt="banner image" />
  <img className="absolute z-10 top-[189px] ml-5 rounded-[200px] border- border-neutral-1000" src={profileavatar} alt />
<button className="mt-2 ml-[253px] inline-flex py-2 px-5 justify-center items-center gap-[10px] rounded-[30px] border border-stroke text-neutral-50 font-medium" onClick={() => navigate("/100x-react-frontend/EditProfile")}>Edit profile</button>
  <div className="ml-5 flex w-[354px] flex-col justify-end items-start gap-4">
    <div className="flex flex-col justify-end items-start gap-1">
      <p className="text-neutral-50 text-xl/normal font-bold leading-normal">aarushe reddy</p>
      <p className="text-neutral-500 text-[15px] ">@arushe_reddy</p>
    </div>
    <p className="w-[354px] text-neutral-50">Digital Goodies Team - Web &amp; Mobile UI/UX development; Graphics; Illustrations</p>
    <div className="flex items-start gap-5">
      <div className="flex items-center gap-1">
        <img src={linkicon} alt="link-icon" />
        <p className="text-twitter-blue-default">pixsellz.io</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={calendericon} alt="calendar-icon" />
        <p className="text-neutral-500">Joined September 2018</p>
      </div>
    </div>
    <div className="flex items-end gap-5">
      <p><span className="font-medium text-neutral-50">217</span> <span className="text-neutral-500">Following</span></p>
      <p><span className="font-medium text-neutral-50">118</span> <span className="text-neutral-500">Followers</span></p>
    </div>
  </div>
  <Tweetbox avatar={avatar2} name="Name" handle="@handle • 10h" tweettext="Don't wish for it, work for it." comment="11"  retweet="270" like="1869" />
      <Tweetbox avatar={avatar3} name="Name" handle="@handle • 10h" tweettext="" comment="11"  retweet="270" like="1869" >i've seen people absolutely despise auto layout in figma but i think it's a lifesaver-1. tidies everything nice and compact <br />
              2. makes responsive design effortless<br />
              3. no manual adjustments post any tweaks<br />
              4. saves a tonnn of time<br /><br />
              sorry, but will stay an auto layout maxi all life.</Tweetbox>
      <Tweetbox avatar={avatar4} name="Name" handle="@handle • 10h" tweettext="" comment="11"  retweet="270" like="1869" >Writing gets easier after the first sentence.<br /><br />
              Lifting gets easier after the first set.<br /><br />
              People think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.</Tweetbox>
      <Tweetbox avatar={avatar5} name="Name" handle="@handle • 10h" tweettext="I'm entering my relaxation era" comment="11"  retweet="270" like="1869" />
      <Tweetbox avatar={avatar3} name="Name" handle="@handle • 10h" tweettext="" comment="11"  retweet="270" like="1869" >if you work in tech and your colleagues use the term "tech bro" as a pejorative / unironically, you should start looking for your next job</Tweetbox>
      
    
<button className="fixed inline-flex bottom-[36px] ml-[304px] p-4 items-start gap-[10px] rounded-[32px] bg-twitter-blue-default shadow-[0_8px_16px_0_rgba(0,0,0,0.25)]" onClick={() => navigate("/100x-react-frontend/ComposeTweet")}><img src={plus} alt="plus" /></button>
</div>

  )
}

export default UserProfile