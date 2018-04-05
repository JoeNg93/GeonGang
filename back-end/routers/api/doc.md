# API doc for GeonGang

## Fetching data

Route: `/api/graphql`

Schema:
```graphql
  type Query {
    allUsers: [User]!

    user(id: Int!): User
  }

  type User {
    id: Int!
    name: String!
    gender: String!
    age: Int!
    skinColor: String!
    skinType: String!
    climate: String!
  }
```

