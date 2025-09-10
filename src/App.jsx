import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Feature from "./components/Feature";
import F2 from "./components/F2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Carousel from "./components/Carousel";
import { Form } from "react-hook-form";
import F3 from "./components/F3";


function App() {
    const [count, setCount] = useState(0);

    return (
        <>
      <Header/>
      <Feature/>
      <F2/>
      <F3 />
      <Contact/>
      <Carousel/>
      <Footer/>
        </>
    );
}

export default App;

{
    /* 
  <Header/>
      <Feature/>
      <F2/>
      <Contact/>
      <Carousel/>
      <Footer/>*/
}
