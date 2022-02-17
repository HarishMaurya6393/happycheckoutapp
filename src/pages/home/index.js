import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
const Home = () => {

  let { shop } = useParams();
  let scopes = 'read_orders,write_orders';
  let apiKey = '269be0af28345cee780e57d0d478ccef';
  let apiSecretKey = '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';
  let redirect_uri = 'https://76f2-61-0-146-58.ngrok.io/auth/callback'
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
