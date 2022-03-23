import './App.css';
import { Routes, Route } from "react-router-dom";
import UrlPath from './pages/login'
import Home from './pages/home';
import Dashboard from './pages/dashboard';

// import { AppProvider } from "@shopify/polaris";
// import Aprajita from "./Components/Url/Aprajita";
// import Testing from "./Components/Login/Testing";


function App() {
  return (
    <>
   
      <Routes>
        <Route exact path="/" element={<UrlPath />} />
        <Route exact path="/home/:shop" element={<Home />} />
        <Route exact path="/auth/callback" element={<Dashboard />} />
{/* 
       <Route path='/' exact element={<Testing/>} />
      <Route path='/home' exact element={<Aprajita/>} /> */}
      </Routes>
     

    </>
  );
}


export default App;
