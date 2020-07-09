import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe("user queries", () => {
  let server;

  beforeAll(() =>{
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql:false
      })
    );
  });

  it("returns all users", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { name email } }'})
      .expect(200)
    expect(response.body.data.users.length).toEqual(2)
  })

  it("returns a user with a specific ID", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ user(id: 1) { name email role bio address image } }'})
      .expect(200)
    expect(response.body.data.user.name).toEqual("The Admin")
    expect(response.body.data.user.email).toEqual("admin@crate.com")
    expect(response.body.data.user.role).toEqual("ADMIN")
    expect(response.body.data.user.bio).toEqual("It is lonely at the top.")
    expect(response.body.data.user.address).toEqual("123 Anystreet Ave NY, NY 12345")
    expect(response.body.data.user.image).toEqual("/images/stock/steve.jpg")
  })

})