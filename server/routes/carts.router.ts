import express from "express";
import fs from "fs";
const { writeFile, readFile } = require("helpers/fs-helpers");

type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export interface ICarts {
  carts: {
    [id: string]: CartItemType[];
  };
}

const cartsRoutes = (app: express.Application) => {
  app.post("/api/carts", (req, res) => {
    readFile((data: ICarts) => {
      const newCartId = Object.keys(data).length + 1;

      // add the new item
      data.carts[newCartId.toString()] = req.body;

      writeFile(
        JSON.stringify(data, null, 2),
        () => {
          res.status(200).send("new item added");
        },
        "./db/cart.json"
      );
    }, "./db/cart.json");
  });
};

module.exports = cartsRoutes;
