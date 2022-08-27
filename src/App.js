import Navbar from "./Navbar";
import Offer from "./pages/Offer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import React from "react";





function App() {
  

return (
<>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/offer" element={<Offer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
</>

  )
}


export default App;
