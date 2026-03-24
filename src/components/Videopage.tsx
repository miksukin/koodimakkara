import { Typography } from '@mui/material'
import TwitchEmbed from './TwitchEmbedding'
import './Videopage.css'

export const Videopage = () => {
  return (
    <>  
        <Typography className='shadowia' variant="h1" sx={{ color: "#d67100",fontSize: "clamp(3.5rem, 8vw, 6rem)", marginTop: 5, textShadow: 2}}>Videos</Typography>
        <div className="video-div">
            <div className="video-box">
                <iframe src="https://www.youtube.com/embed/eEt34nVODtE?si=ZVAwq7zPiO07jb6G"></iframe>
            </div>

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

        <Typography className='shadow' variant="h1" sx={{ color: "#d67100",fontSize: "clamp(3.5rem, 8vw, 6rem)", marginTop: 5}}>Streamers</Typography>

        <div className='video-div' style={{paddingBottom: 20}}>
            <div className='video-box'>
                <TwitchEmbed channel='miksukin'/>
            </div>

            <div className='video-box'>
                <TwitchEmbed channel='talktotopsu'/>
            </div>

            <div className='video-box'>
                <TwitchEmbed channel='cloverhere'/>
            </div>
        </div>
    </>
  )
}
