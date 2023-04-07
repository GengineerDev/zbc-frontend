// import Home from './pages/Home'
import { Layout } from 'antd'
import Home from './pages/Home'
const { Header } = Layout
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Header className='header'>Zelene Blockchain</Header>
      <Home />
      
    </Router>
  )
}

export default App
