const request = require("supertest");
const express = require("express");
const app = express();
const routes = require("../routes/routes");

app.use(express.urlencoded({ extended: false }));
routes(app);

describe("Routes", () => {
  test("products route works", (done) => {
    request(app).get("/api/products").expect(200, done);
  });

  test("carts route works", (done) => {
    request(app).post("/api/carts").send({ item: "hey" }).expect(200, done);
  });
});
