const app = require("../../../d1/2-medium/web-server");
const request = require("supertest");

describe("app", () => {
  describe("GET /", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/");

      expect(statusCode).toBe(200);
    });

    test("response body is text/html", async () => {
      const { headers } = await request(app).get("/");

      expect(headers["content-type"]).toMatch("text/html");
    });

    test("response body text contains <title>Home</title>", async () => {
      const { text } = await request(app).get("/");

      expect(text).toMatch("<title>Home</title>");
    });
  });

  describe("GET /index", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/");

      expect(statusCode).toBe(200);
    });

    test("response body is text/html", async () => {
      const { headers } = await request(app).get("/");

      expect(headers["content-type"]).toMatch("text/html");
    });

    test("response body text contains <title>Home</title>", async () => {
      const { text } = await request(app).get("/");

      expect(text).toMatch("<title>Home</title>");
    });
  });

  describe("GET /index.html", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/");

      expect(statusCode).toBe(200);
    });

    test("response body is text/html", async () => {
      const { headers } = await request(app).get("/");

      expect(headers["content-type"]).toMatch("text/html");
    });

    test("response body text contains <title>Home</title>", async () => {
      const { text } = await request(app).get("/");

      expect(text).toMatch("<title>Home</title>");
    });
  });

  describe("GET /js/script.js", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/js/script.js");

      expect(statusCode).toBe(200);
    });

    test("response body is text/html", async () => {
      const { headers } = await request(app).get("/js/script.js");

      expect(headers["content-type"]).toMatch("application/javascript");
    });
  });

  describe("GET /css/style.css", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/css/style.css");

      expect(statusCode).toBe(200);
    });

    test("response body is text/html", async () => {
      const { headers } = await request(app).get("/css/style.css");

      expect(headers["content-type"]).toMatch("text/css");
    });
  });
});
