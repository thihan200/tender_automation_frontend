import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, Component } from "react";
import './App.css';
import './assets/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Audio } from 'react-loader-spinner';
import Signin from "./pages/signin";
import Home from "./pages/home";
import Signup from "./pages/signup";
import About from "./pages/about";
import CreateTender from './pages/createTender';
import Contact from './pages/contact';
import Tender from './pages/tender';
import MyAccount from './pages/myAccount';
import MyTender from './pages/myTender';
import MyReview from "./pages/myReview";
import TenderDetail from "./pages/tenderDetail";
import Slider from "react-slick";
import Loading from "./component/loading";
import {render} from "react-dom";



function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AOS.init({
        duration: 1000
    }, []);

    setTimeout(() => {
      setLoading(false)
    }, 5000);

  }, []);



  return (
    <>
      {/*<Navbar>*/}

      {/*</Navbar>*/}

      <Routes>

        {/* <Audio
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            />*/}

        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/create-tender" element={<CreateTender />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tender" element={<Tender />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-tender" element={<MyTender />} />
        <Route path="/my-review" element={<MyReview />} />
        <Route path="/tender/:id" element={<TenderDetail />} />
        

      </Routes>
    </>
  );
}

export default App;
