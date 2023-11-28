import './App.css'
import Album from './Pages/album/Album'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Album/>} />
         <Route path="/enviado" element={<Album/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App

