import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import MyProject from './component/MyProject';
import Signup from './component/Signup';
import Home from'./component/Home';
import AllCategory from './component/AllCategory';
import Footer from './component/Footer';
import Carousel from './component/Carousel'; 

function App() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/myproject" element={<MyProject />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
    </Router>
  );
}

export default App;
