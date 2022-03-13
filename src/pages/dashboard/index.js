import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
const apiKey = "315cf57f57e01b88a2b92811a41c0c3c";
const apiSecretKey = "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";
//import Shopify from 'shopify-api-node';

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const shop = searchParams.get("shop");
  const code = searchParams.get("code");
  console.log(code);

  // useEffect(() => {
  //   const { data } = axios({
  //     method: "POST",
  //     url: `https://${shop}/admin/oauth/access_token`,
  //     data: {
  //       client_id: apiKey,
  //       client_secret: apiSecretKey,
  //       code,
  //     },
  //   });

  //   console.log("res data => ", data);

//         const shopify = new Shopify({
//             shopName: shop,
//             apiKey: apiKey,
//             password: apiSecretKey
//           });
//     }, []);
//     return <h1> Dashboard ! </h1>;
//  });
 };

export default Dashboard;
