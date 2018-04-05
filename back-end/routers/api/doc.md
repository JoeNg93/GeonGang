# API doc for GeonGang

## Fetching data

Route: `/api/graphql`

Schema:
```graphql
  type Query {
    allUsers: [User]!
    user(id: Int!): User

    allBrands: [Brand]!
    brand(id: Int!): Brand

    allCategories: [Category]!
    category(id: Int!): Category

    allProducts: [Product]!
    product(id: Int!): Product
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

  type Brand {
    id: Int!
    name: String!
  }

  type Category {
    id: Int!
    name: String!
  }

  type Product {
    id: Int!
    name: String!
    price: String!
    rating: Float!
    numOfReviews: Int!
    ingredients: String!
    tag: String
    imgSrc: String!
    brand: Brand!
    category: Category!
  }
```

