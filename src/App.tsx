import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Frontpage } from './components/Frontpage'
import { Videopage } from './components/Videopage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={  <Frontpage /> } />
          <Route path="/discord" element={<h1>Discord</h1>} />
          <Route path="/fluxer" element={<h1>Fluxer</h1>} />
          <Route path="/minecraft" element={<h1>Minecraft</h1>} />
          <Route path="/videos" element={ <Videopage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
