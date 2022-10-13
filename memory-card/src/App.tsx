import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Random from "./Component/Generator";
import React from 'react'
//import "./styles/app.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Random />
      <Footer />
    </div>
  );
}

export default App;