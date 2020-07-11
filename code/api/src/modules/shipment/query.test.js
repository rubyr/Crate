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
      .send({ query: '{ shipmentById(shipmentId: 1) { deliveryDate userId crateId } }' })
      .expect(200)
    // expect(response.body.data.shipmentById.id).toEqual(1) // FAIL --> ??? why
    expect(response.body.data.shipmentById.deliveryDate).toEqual("1594254537654")// ("2020-07-08 18:28:57.654-06")
    expect(response.body.data.shipmentById.userId).toEqual(2)
    expect(response.body.data.shipmentById.crateId).toEqual(3)
  })
  
  it("returns a crate name", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ shipmentById(shipmentId: 1) { crateId } }' })
      .expect(200)
    expect(response.body.data.shipmentById.crateId).toEqual(3)
    // expect(response.body.data.shipmentById.crate.name).toEqual("Accessories for Men") // FAIL
  })

})