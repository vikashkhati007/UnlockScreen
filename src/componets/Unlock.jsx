import React, { useState } from 'react'
import LockScreen from './LockScreen'
import "./LockScreen.css"
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import ScreenImage from "./img/morning.jpg"
import LockedImage from "./img/night.jpg"


export default function Unlock() {
  const [uiProps] = useState({
    titlelock: "Lock Screen",
    titleunlock: "Unlock Screen"
  })
  const [showSliderLock, SetSliderLock] = useState(true);
  const [SliderValue, SetSliderValue] = useState(0);

  function handleInput(e) {
    const slidervalue = e.target.value;
    SetSliderValue(slidervalue); // Update the SliderValue state here
    if(slidervalue === "100") {
      SetSliderLock(false);
    }
  }

  return (
    <div>
      {showSliderLock ? <LockScreen bgSize = "cover" inputtype = "range" bgimg = {LockedImage} title={uiProps.titlelock} Value={SliderValue} Input={handleInput} />: <LockScreen bgSize = "cover" inputtype = "hidden" bgimg = {ScreenImage} title={uiProps.titleunlock}/>}
      {showSliderLock ?<AiFillLock className='IconStyle'/>: <AiFillUnlock className='IconStyle'/>}
    </div>
  )
}
