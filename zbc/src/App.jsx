// import Home from './pages/Home'
import { Layout, Divider } from 'antd'
import Home from './pages/Home'
import Login from './pages/Login'
import PitchPage from './pages/PitchPage'
const { Header } = Layout
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Header className='header'>
        e-TULONG
        <div className='right-buttons'>
        <p><a href="/">home</a></p> 
          <p><a href="#">about us</a></p> 
          <p><a href="/login">login</a></p>
        </div>
      </Header>
      
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
