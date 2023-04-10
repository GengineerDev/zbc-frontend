// import Home from './pages/Home'
import { Layout } from 'antd'
import Home from './pages/Home'
import Login from './pages/Login'
const { Header } = Layout
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Header className='header'>Zelene Blockchain</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>      
    </Router>
  )
}

export default App
