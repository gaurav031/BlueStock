import Header from "./components/Header/Header"
import Login from "./components/Login/Login";

import Section from "./components/section/Section"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup/Signup";
import Forgot from "./components/Forgotten/Forgot";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <Router>
    <div>
    <Header />
   
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  )
}

export default App
