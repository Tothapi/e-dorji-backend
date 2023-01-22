const { buildSchema } = require("graphql");

module.exports = buildSchema(`
scalar Upload
type Photo {
      id: Int,
      fileLocation: String,
      description: String,
      tags: String
}

type Booking{
  _id:ID!
  event:Event!
  user:User!
  createdAt:String!
  updatedAt:String!

}

type Catalogue{
  _id:ID!
  productType:String!
  file:String!
}

type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type User {
  _id: ID!
  email: String!
  password: String! 
  role: String 

}

type AuthData{
  userId: ID!
  token: String!
  tokenExpiration: Int!
  role: String
}

input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input UserInput {
  email: String!
  password: String!
}

type RootQuery {
    events: [Event!]!
    bookings:[Booking!]!
    login(email:String!,password:String!): AuthData!
}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    addPhoto(file: Upload!, description: String, tags: String): Photo
    createUser(userInput: UserInput): User
    bookEvent(eventId:ID!):Booking!
    cancelBooking(bookingId:ID!):Event!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
