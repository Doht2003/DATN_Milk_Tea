import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultPage from './pages/ManagerPages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
