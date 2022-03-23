import config from './config';
import './App.css';
import { Routes, Route } from "react-router-dom";
import UrlPath from './pages/login'
import Home from './pages/home';
import Dashboard from './pages/dashboard';

import { AppProvider } from "@shopify/polaris";
//import ShopUrl from "./Components/Url/shopUrl";
//import LoginPage from "./Components/Login/loginPage";


function App() {
  //console.log(config.SHOPIFY_API_KEY)
  return (
    <>
    <AppProvider>
      <Routes>
        <Route exact path="/" element={< UrlPath/>} />
        <Route exact path="/home/:shop" element={<Home/>} />
       <Route exact path="/auth/callback" element={<Dashboard />} /> 
{/* 
       <Route path='/' exact element={<Testing/>} />
      <Route path='/home' exact element={<Aprajita/>} /> */}
      </Routes>
      </AppProvider>

    </>
  );
}


export default App;
