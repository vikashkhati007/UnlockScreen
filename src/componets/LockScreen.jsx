import React from 'react'
import "./LockScreen.css"

export default function LockScreen(props) {

  const inputStyle = {
    appearance: "none",
    width: "280px",
    height: "50px",
    backgroundColor: "rgba(188, 190, 188 , 0.5)",
    outline: "none",
    borderRadius: "30px"
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      margin: '0px auto',
      height: '90vh',
      width: '300px',
      borderRadius: '30px',
      border: '2px solid black',
      textAlign: 'center',
      background: `url(${props.bgimg})`,
      backgroundSize: `${props.bgSize}`,
      backgroundRepeat: "no-repeat",
      boxShadow: "1px 1px 5px black"
    }} >
      <h1 className='title'>{props.title}</h1>
      <input type={props.inputtype} className='slider' style={inputStyle} value={props.Value} onInput={props.Input} />
    </div>
  )
}
