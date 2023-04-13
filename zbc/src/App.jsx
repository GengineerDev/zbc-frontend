// import Home from './pages/Home'
import { Layout } from 'antd'
import Home from './pages/Home'
import Login from './pages/Login'
import PitchPage from './pages/PitchPage'
const { Header } = Layout
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Header className='header'>e-TULONG</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* to add specific paths for the card later */}
        <Route path="/pitch" element={<PitchPage />} /> 
      </Routes>      
    </Router>
  )
}

export default App
