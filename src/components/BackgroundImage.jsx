import React from 'react'
import videoBg from './assets/video/earthLoop.mp4'


const BackgroundImage = () => {
  return (
    <div className='backgroundVid' >
        <video src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default BackgroundImage