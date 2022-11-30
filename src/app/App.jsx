import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateEmployee from '../pages/CreateEmployee/CreateEmployee'
import './App.scss'

const App = () => {
  <Router>
    <Routes>
      <Route index element={<CreateEmployee />}/>
    </Routes>
  </Router>
}

export default App
