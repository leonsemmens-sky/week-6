const app = require("../../../d1/2-medium/shouty");
const request = require("supertest");

describe("app", () => {
  describe("GET /", () => {
    test("fails", async () => {
      const { statusCode } = await request(app).get("/");

      expect(statusCode).toBe(404);
    });
  });

  describe("GET /hello", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/hello");

      expect(statusCode).toBe(200);
    });

    test("response body contains text/html", async () => {
      const { headers } = await request(app).get("/hello");

      expect(headers["content-type"]).toMatch("text/html");
    });

    test("response body text contains a greeting", async () => {
      const { text } = await request(app).get("/hello");

      expect(text).toBe("HELLO!");
    });
  });

  describe("GET /bonjour", () => {
    test("succeeds", async () => {
      const { statusCode, text } = await request(app).get("/bonjour");

      expect(statusCode).toBe(200);
      expect(text).toBe("BONJOUR!");
    });
  });

  describe("GET /ciao", () => {
    test("succeeds", async () => {
      const { statusCode, text } = await request(app).get("/ciao");

      expect(statusCode).toBe(200);
      expect(text).toBe("CIAO!");
    });
  });

  describe("GET /hallo", () => {
    test("succeeds", async () => {
      const { statusCode, text } = await request(app).get("/hallo");

      expect(statusCode).toBe(200);
      expect(text).toBe("HALLO!");
    });
  });

  describe("GET /hola", () => {
    test("succeeds", async () => {
      const { statusCode, text } = await request(app).get("/hola");

      expect(statusCode).toBe(200);
      expect(text).toBe("HOLA!");
    });
  });
});
