import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
const Home = () => {

  let { shop } = useParams();
  let scopes = process.env.REACT_APP_SHOPIFY_API_SCOPES;
  let apiKey = process.env.REACT_APP_SHOPIFY_API_KEY;
  let apiSecretKey = process.env.REACT_APP_SHOPIFY_API_SECRET;
  let redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  let oAuthUrl = `https://${shop}/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirect_uri=${redirect_uri}&state=sasassa321dsad  

     `;

   
  useEffect(() => {
    window.location.href = oAuthUrl;

  }, [])
  return (
    <p> Redirecting.............. </p>
  );
};

export default Home;
