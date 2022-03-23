import React from "react";
import "./Testing.css";
import {
 
  Button,
  Card,
  Layout,
 TextField,
 DisplayText,
 FormLayout,
  Link,
  Stack,
 
} from "@shopify/polaris";

function Testing() {
  return (
    <>
    <div className="bg">
<img src="https://polaris.shopify.com/bundles/9d8765fb4d54986f13a0b69451aa501e.png" alt=""></img>
    </div>
      <div className="main-div">
     
        <Layout>
          <Layout.Section>
            <Card>
              <Card.Section>
                <Stack>
                  <DisplayText  size="extraLarge">
                    <strong>Login</strong>
                    <br />
                    
                  </DisplayText>
                </Stack>

                <DisplayText size="small">Welcome To Book MyCostume</DisplayText>

                <br />
                <FormLayout>
                  <Stack spacing="none">
                    <Stack.Item fill>
                      <TextField  prefix={
                            <img
                              width="15px"
                              alt="Password"
                              src="https://img.icons8.com/dusk/64/000000/user-male.png "
                            />
                          } type="text" placeholder="Username" />
                    </Stack.Item>
                  </Stack>
                  <Stack>
                    <Stack.Item fill>
                      <TextField 
                       prefix={
                        <img
                          width="15px"
                          alt="Username"
                          src="https://img.icons8.com/dusk/64/000000/lock-2.png"
                        />}
                      type="text" placeholder="Password" />
                    </Stack.Item>
                  </Stack>
                  <Button primary fullWidth>
                    Login
                  </Button>

                  <Link >Register</Link>
                </FormLayout>
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </div>
    </>
  );
}

export default Testing;
