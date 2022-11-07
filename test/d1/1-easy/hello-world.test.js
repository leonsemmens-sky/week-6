const app = require("../../../d1/1-easy/hello-world");
const request = require("supertest");

describe("app", () => {
  describe("GET /", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/");

      expect(statusCode).toBe(200);
    });

    test("response body contains text/html", async () => {
      const { headers } = await request(app).get("/");

      expect(headers["content-type"]).toMatch("text/html");
    });

    test("response body text contains a greeting", async () => {
      const { text } = await request(app).get("/");

      expect(text).toBe("Hello, World!");
    });
  });
});
