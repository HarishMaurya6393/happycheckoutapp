import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { Shopify } from '@shopify/shopify-api'
const host = '127.0.0.1';
const port = 3000;

const{SHOPIFY_API_KEY,SHOPIFY_API_SECRET,SHOPIFY_API_SCOPES,HOST}=process.env;

const shops = {};


   Shopify.Context.initialize ({
    API_KEY:SHOPIFY_API_KEY,
    API_SECRET:SHOPIFY_API_SECRET,
    SCOPES:SHOPIFY_API_SCOPES,
    HOST:HOST,
    IS_EMBEDDED_APP:true,
});

const app = express();

app.get('/',async(req,res)=>{
  if(typeof shops[req.query.shop]!=='undefined'){
      res.send('hello');
  }else{
      res.redirect(`/auth?shop=${req.query.shop}`);
  }
});
app.get('/auth',async(req,res)=>{
    const authRoute= await Shopify.Auth.beginAuth(
        req,
        res,
        req.query.shop,
        '/auth/callback',
        false,
    )
    res.redirect(authRoute);

});
app.get('/auth/callback',async(req,res)=>{
    const shopSession=await Shopify.Auth.validateAuthCallback(
        req,
        res,
        req.query
    );
    console.log(shopSession);
    shops[shopSession.shop] = shopSession;
    res.redirect(`https://${shopSession.shop}/admin/app/oauth-node-1`);

});

app.listen(port,()=>{
    console.log(`server running at http://${host}:${port}/`);
});





shopifyAccessToken(input: shopifyAccessTokenInput) : shopifyAccessTokenResponse


input shopifyAccessTokenInput {
    shop: String
    code: String
}

type shopifyAccessTokenResponse {
  access_token: String,
  scope: String
}

const { RESTDataSource } = require('apollo-datasource-rest');

shopifyAccessToken = (args, datasource) => {
    const { shop = "", code = "" } = args.input;
    const result = RESTDataSource.post(`https://${shop}.myshopify.com/admin/oauth/access_token`, {
      client_id: env,
      client_secret: env,
      code,
    });
    return result;
}   