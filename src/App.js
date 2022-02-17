import './App.css';
import { Routes, Route } from "react-router-dom";
import UrlPath from './pages/login'
import Home from './pages/home';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<UrlPath />} />
        <Route exact path="/home/:shop" element={<Home />} />
        <Route exact path="/auth/callback" element={<Dashboard />} />
      </Routes>

    </>
  );
}


export default App;
