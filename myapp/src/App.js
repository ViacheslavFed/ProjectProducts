import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import ProduktInfoPage from './Pages/ProduktInfoPage/ProduktInfoPage'
import ProduktListPage from './Pages/ProduktListPage/ProduktListPage'
import HomePage from './Pages/HomePage/HomePage'
import Header from './Component/Header/Header'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<ProduktListPage/>}/>
          <Route path='/products/:id' element={<ProduktInfoPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App