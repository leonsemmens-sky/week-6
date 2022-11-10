const app = require("../../../d4/1-easy/valid-number");
const request = require("supertest");

describe("app", () => {
  describe("GET /:number", () => {
    describe("with a valid :number", () => {
      const numbers = [
        -1,
        0,
        1,
        -1.0,
        0.0,
        1.0,
        -0.1,
        0.1,
        -Number.EPSILON,
        Number.EPSILON,
        -Infinity,
        Infinity,
      ];

      it("succeeds", async () =>
        Promise.all(
          numbers.map((number) => request(app).get(`/${number}`))
        ).then((res) =>
          res.every(({ statusCode }) => expect(statusCode).toBe(200))
        ));
    });

    describe("with an invalid :number", () => {
      const numbers = ["eleventyone", "-1.a", "0.0.1", NaN];

      it("fails with Not Found response", async () =>
        Promise.all(
          numbers.map((number) => request(app).get(`/${number}`))
        ).then((res) =>
          res.every(({ statusCode }) => expect(statusCode).toBe(404))
        ));
    });
  });
});
