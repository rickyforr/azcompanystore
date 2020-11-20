import express from "express";

// load up our shiny new route for products
const productsRoutes = require("./products.router");
const cartsRoutes = require("./carts.router");
const appRouter = (app: express.Application) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });

  // run our user route module here to complete the wire up
  productsRoutes(app);
  cartsRoutes(app);
};

// this line is unchanged
module.exports = appRouter;
