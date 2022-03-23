import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
const Home = () => {

  let { shop } = useParams();
  let scopes = 'read_orders,write_orders';
  let apiKey = '315cf57f57e01b88a2b92811a41c0c3c';
  let apiSecretKey = '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';
  let redirect_uri = 'https://65e1-2409-4063-4c0c-d5d0-d9ff-77bf-a521-a807.ngrok.io/auth/callback'
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
