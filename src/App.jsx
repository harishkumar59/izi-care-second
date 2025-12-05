import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TermsAndConditions from './pages/TermsAndConditions'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  )
}

export default App
