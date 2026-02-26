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
            <Typography variant="h1" sx={{ color: "#d67100" }}>Koodimakkara</Typography>
            <Typography variant="body1" sx={{ color: "#fff",  width: '50%' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</Typography>
            <Typography variant="h2" className='loading' sx={{ color: "#d67100" }}>Work in progress</Typography>
        </Box>
    </>
  )
}