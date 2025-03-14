import Login from './Login'
import Browse from './Browse'
import { HashRouter, Routes, Route } from 'react-router-dom'

const Body = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </HashRouter>
  )
}

export default Body
