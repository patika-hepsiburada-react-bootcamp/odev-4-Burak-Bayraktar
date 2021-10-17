import { gql } from '@apollo/client'

export const FETCH_WEATHER = gql `
    query getCityById($id: [String!]) {
        getCityById(id: $id) {
          id
          name
          weather {
            summary {
              title
              description
              icon
            }
            temperature {actual, feelsLike, min, max}
            timestamp
            wind {speed, deg}
          }
        }
      }
      
    `