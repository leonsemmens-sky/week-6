const app = require("../../../d1/3-hard/app-server");
const request = require("supertest");

describe("app", () => {
  describe("GET /time", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/time");

      expect(statusCode).toBe(200);
    });

    test("response body is text/html", async () => {
      const { headers } = await request(app).get("/time");

      expect(headers["content-type"]).toMatch("text/html");
    });

    test("response body text contains a <title> tag", async () => {
      const { text } = await request(app).get("/time");

      expect(text).toMatch("<title>Time</title>");
    });

    test("response body text contains a correctly formatted <time> tag", async () => {
      const { text } = await request(app).get("/time");

      expect(text).toMatch(
        /<time datetime="\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z">\d{2}:\d{2}:\d{2}<\/time>/
      );
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
