const request = require("supertest");
const app = require("../server");
const { Client } = require("../models");

describe("ClientController", () => {
  let createdClient;
  let clientId;

  beforeAll(async () => {
    createdClient = await Client.create({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    });

    clientId = createdClient.id;
  });

  test("should create a new client", async () => {
    const newClient = {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
    };
    const response = await request(app)
      .post("/api/client/clients")
      .send(newClient)
      .expect(201);

    expect(response.body.client.firstName).toBe(newClient.firstName);
    expect(response.body.client.lastName).toBe(newClient.lastName);
    expect(response.body.client.email).toBe(newClient.email);
  });

  test("should get a client by ID", async () => {
    const response = await request(app)
      .get(`/api/client/clients/${clientId}`)
      .expect(200);

    if (!response.body) {
      throw new Error("Client not found in response body");
    }

    if (createdClient) {
      expect(response.body.firstName).toBe(createdClient.firstName);
      expect(response.body.lastName).toBe(createdClient.lastName);
      expect(response.body.email).toBe(createdClient.email);
    } else {
      throw new Error("Created client is null");
    }
  });

  test("should get all clients", async () => {
    // Create additional clients for testing
    const additionalClients = [
      { firstName: "Alice", lastName: "Smith", email: "alice@example.com" },
      { firstName: "Bob", lastName: "Jones", email: "bob@example.com" },
    ];

    await Client.bulkCreate(additionalClients);

    const response = await request(app).get("/api/client/clients").expect(200);

    expect(response.body).toBeInstanceOf(Array);

    const allClients = await Client.findAll();

    expect(response.body.length).toBe(allClients.length);
  });

  test("should delete a client by ID", async () => {
    const response = await request(app)
      .delete(`/api/client/clients/${clientId}`)
      .expect(204);

    const deletedClient = await Client.findByPk(clientId);
    expect(deletedClient).toBeNull();
  });

  afterAll(async () => {
    await Client.destroy({ truncate: { cascade: true } });
  });
});
