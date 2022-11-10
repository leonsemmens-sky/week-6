const app = require("../../../d4/1-easy/valid-word");
const request = require("supertest");

describe("app", () => {
  describe("GET /:word", () => {
    describe("with a valid :word", () => {
      const words = [
        "gonna",
        "give",
        "you",
        "up",
        "let",
        "down",
        "run",
        "around",
        "and",
        "desert",
        "make",
        "cry",
        "say",
        "goodbye",
        "tell",
        "a",
        "lie",
        "hurt",
      ];

      it("succeeds", async () =>
        Promise.all(words.map((word) => request(app).get(`/${word}`))).then(
          (res) => res.every(({ statusCode }) => expect(statusCode).toBe(200))
        ));
    });

    describe("with an invalid :word", () => {
      const words = [
        "Never",
        "-suffix",
        "prefix-",
        "a-valid-slug",
        "42",
        "EDIT.EXE",
        "U2",
        "underscore_",
      ];

      it("fails with Not Found response", async () =>
        Promise.all(words.map((word) => request(app).get(`/${word}`))).then(
          (res) => res.every(({ statusCode }) => expect(statusCode).toBe(404))
        ));
    });
  });
});
