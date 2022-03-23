import React from "react";
 import "./Aprajita.css";

import {
  Thumbnail,
  Button,
  Card,
  Page,
  DisplayText,
} from "@shopify/polaris";
function Aprajita() {
  return (
   <>

    <div
      style={{
        right: "50%",
      bottom:"50%",
        transform: "translate(50%,50%)",
        position: "relative",
      }}
    >
      
<Page>
        <Card sectioned>
          
       <div className="main_div">
          <Thumbnail
               source="/store.png"
              alt="store"
            />
          <DisplayText size="large">
            <strong style={{marginLeft:"10px"}}>Enter Shop URL</strong>
          </DisplayText>
         
          </div>
          <br />
          <input type="text" placeholder="Your Shop URL "/>
          <br />
          <br />
          
          <Button>Submit</Button>
        </Card>
      </Page>
    </div>
    </>
  );
}

export default Aprajita;
