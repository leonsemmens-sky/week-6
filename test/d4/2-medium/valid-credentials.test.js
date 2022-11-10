const app = require("../../../d4/2-medium/valid-credentials");
const request = require("supertest");

describe("app", () => {
  describe("POST /", () => {
    describe("with a valid parameters", () => {
      it("succeeds", async () => {
        const { statusCode } = await request(app)
          .post("/")
          .send({ username: "alice", email: "olive@example.com" });

        expect(statusCode).toBe(201);
      });
    });

    describe("with a short username", () => {
      it("fails with Bad Request", async () => {
        const { statusCode } = await request(app)
          .post("/")
          .send({ username: "me", email: "myname@example.com" });
        expect(statusCode).toBe(400);
      });
    });

    describe("with a long username", () => {
      it("fails with Bad Request", async () => {
        const { statusCode } = await request(app)
          .post("/")
          .send({ username: "maximilianus", email: "maxi@example.com" });
        expect(statusCode).toBe(400);
      });
    });

    describe("with a bad username", () => {
      it("fails with Bad Request", async () => {
        const { statusCode } = await request(app)
          .post("/")
          .send({ username: "0live", email: "alice@example.com" });
        expect(statusCode).toBe(400);
      });
    });

    describe("with a bad email local part", () => {
      it("fails with Bad Request", async () => {
        const { statusCode } = await request(app)
          .post("/")
          .send({ username: "alice", email: "a1ice@example.com" });
        expect(statusCode).toBe(400);
      });
    });

    describe("with a bad email domain part", () => {
      it("fails with Bad Request", async () => {
        const { statusCode } = await request(app)
          .post("/")
          .send({ username: "alice", email: "a1ice@elpmaxe.com" });
        expect(statusCode).toBe(400);
      });
    });

    describe("with a matching username and email local part", () => {
      it("fails with Bad Request", async () => {
        const { statusCode } = await request(app)
          .post("/")
          .send({ username: "Alice", email: "alice@example.com" });
        expect(statusCode).toBe(400);
      });
    });
  });
});
