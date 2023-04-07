// import Home from './pages/Home'
import { Layout, Space } from 'antd'
const { Header } = Layout
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Header className='header'>Zelene Blockchain</Header>
    </Router>
  )
}

export default App
