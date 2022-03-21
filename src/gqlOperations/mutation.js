import { gql } from '@apollo/client'
export const GET_TOKEN = gql`

mutation shopifyToken {
  shopifyAccessToken(
    input: {
      shop: "spark-plug5"
      code: "b56e72ff7dba22525cc3583805910af9"
    }
  ) {
    access_token
    scope
  }
}



`