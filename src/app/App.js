import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from '../pages/Error/Error'
import CreateEmployee from '../pages/CreateEmployee/CreateEmployee'
import ListEmployee from '../pages/ListEmployee/ListEmployee'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CreateEmployee />} />
      <Route path="/employee-list" element={<ListEmployee />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  </Router>
)

export default App
