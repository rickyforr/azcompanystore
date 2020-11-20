import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 4444;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes/routes");
routes(app);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
