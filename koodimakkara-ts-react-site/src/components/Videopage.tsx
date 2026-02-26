import React from 'react'
import './Videopage.css'

export const Videopage = () => {
  return (
    <>
        <div className="video-div">
            <div className="video-box">
                <iframe src="https://www.youtube.com/embed/zNv8pTJY_Vg"></iframe>
            </div>

            <div className="video-box">
                <iframe src="https://www.youtube.com/embed/0EVJmm8_1vI"></iframe>
            </div>

            <div className="video-box">
                <iframe src="https://www.youtube.com/embed/0FRM8-hDtjo"></iframe>
            </div>

            <div className="video-box">
                <iframe src="https://www.youtube.com/embed/A7wldGXG2XU?si=WvGmAVQafEOSIS9j"></iframe>
            </div>
        </div>
    </>
  )
}
