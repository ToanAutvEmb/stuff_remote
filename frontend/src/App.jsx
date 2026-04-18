import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* FUTURE: add /collection, /product/:id, /checkout routes here */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
