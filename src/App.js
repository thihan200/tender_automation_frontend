import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState,useEffect} from "react";
import './App.css';
import './assets/style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from  'react-loader-spinner';
import Signin from "./pages/signin";
import Home from "./pages/home";
import Signup from "./pages/signup";
import About from "./pages/about";
import CreateTender from './pages/createTender';
import Loading from "./component/loading";


function App() {
   const[loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[])

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

            <Route path="/" element={<Home/>}/>
            <Route path="/sign-in" element={<Signin/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/about-us" element={<About/>}/>
            <Route path="/create-tender" element={<CreateTender/>}/>


          
      </Routes>
    </>
  );
}

export default App;
