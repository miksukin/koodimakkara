import { Box, Typography } from '@mui/material'
import bgGif from '../assets/koodimakkaratausta.gif'
import './Frontpage.css'


export const Frontpage = () => {
  return (
    <>
        <Box style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1
            }}>
                <img src={bgGif} alt="Background" style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    filter: 'blur(10px)' }} />
        </Box>

        <Box className="boxi" sx={{ p: 2, alignContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, mt: 10 }}>
            <Typography variant="h1" sx={{ color: "#d67100",fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>Koodimakkara</Typography>
            <Typography variant="body1" sx={{ color: "#fff",  width: {xs: "90%", md: "50%", fontSize: "2vh"} }}>A finnish friend group/gaming community that makes content including streaming, videos and shorts.</Typography>
            <Typography variant="h2" className='loading' sx={{ color: "#d67100", fontSize: "clamp(2.5rem, 8vw, 5rem)"}}>Work in progress</Typography>
        </Box>
    </>
  )
}
