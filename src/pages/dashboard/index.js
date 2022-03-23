import { gql, useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const apiKey = "315cf57f57e01b88a2b92811a41c0c3c";
const apiSecretKey = "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";
//import Shopify from 'shopify-api-node';

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const shop = searchParams.get("shop");
  const code = searchParams.get("code");
  // console.log(code);
  console.log(shop);

  const AUTH_TOKEN = gql`
    mutation shopifyAccessToken($input: shopifyAccessTokenInput) {
      shopifyAccessToken(input: $input) {
        access_token
        scope
      }
    }
 ` ;
  const [shopifyAccessToken, { error, loading }] = useMutation(AUTH_TOKEN);
  const setUrl = (url) => {
    window.top.location = url;
    }
  useEffect(() => {
    console.log("hellllooooooo")
    const shopifyAccessTokenInput = {
      shop,
      code,
    };
    shopifyAccessToken({
      variables: {
        input: shopifyAccessTokenInput,
      },
    })
      .then((res) => {
        console.log("responce=>>>>>",res);
        setUrl(`https://${shop}/admin/apps/${apiKey}`)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code, shop, shopifyAccessToken]);

  if (loading) return <h2>Loading....</h2>;

  <h1>Login Page.....</h1>;
  return true;
};

export default Dashboard;
