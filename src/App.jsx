import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Gallery from './pages/Gallery'
import Management from './pages/Management'
import News from './pages/News'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/management" element={<Management />} />
        <Route path="/news-&-event" element={<News />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
