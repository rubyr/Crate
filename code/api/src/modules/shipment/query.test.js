import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe("user queries", () => {
  let server;

  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it("returns all shipments", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ shipments { id } }' })
      .expect(200)
    expect(response.body.data.shipments.length).toEqual(2)
  })

  it("returns a shipment with a specific ID", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ shipmentById(id: 1) { deliveryDate userId crate { name } } }' })
      .expect(200)
    expect(response.body.data.shipmentById.deliveryDate).toEqual("1594254537654")
    expect(response.body.data.shipmentById.userId).toEqual(2)
    expect(response.body.data.shipmentById.crate.name).toEqual("Accessories for Men")
  })
})
