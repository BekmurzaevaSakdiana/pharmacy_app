import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Liked from './pages/Liked'
import Cart from './pages/cart'
import Login from './pages/login'
import Auth from './pages/Auth'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  )
}

export default App
