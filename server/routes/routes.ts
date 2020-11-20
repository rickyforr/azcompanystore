import express from "express";

const productsRoutes = require("./products.router");
const cartsRoutes = require("./carts.router");

const appRouter = (app: express.Application) => {
  app.get("/", (req, res) => {
    res.send("api-server");
  });
  productsRoutes(app);
  cartsRoutes(app);
};

module.exports = appRouter;
