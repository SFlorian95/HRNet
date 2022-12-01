import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import ListEmployee from './pages/ListEmployee/ListEmployee'
import Error from './pages/Error/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Routes>
      <Route index element={<CreateEmployee />} />
      <Route path="/list-employee" element={<ListEmployee />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
)
