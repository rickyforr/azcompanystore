import express from "express";
import fs from "fs";

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

const productsRoutes = (app: express.Application) => {
  app.get("/api/products", (req, res) => {
    const dataPath = "./db/products.json";
    const { query } = req;

    if (query.name) {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        const productsData: { products: [{ name: string }] } = JSON.parse(data);
        const search = productsData.products.filter((p) => p.name.search(query.name as string) !== -1);
        res.send(search);
      });
      return;
    }

    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data).products);
    });
  });
};

module.exports = productsRoutes;
