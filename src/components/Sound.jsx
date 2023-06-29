import React from 'react'
import VirtualKeyboards from './VirtualKeyboards'
import videoBg from '../assets/pexels-taryn-elliott-5025815-1920x1080-25fps.mp4'

const Sound = () => {
  return (
    <div className='h-screen w-screen absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center'>
        <video src={videoBg} autoPlay={true} loop className='fixed left-0 top-0 bottom-0 right-0' ></video>
        <VirtualKeyboards/>
    </div>
  )
}

export default Sound;