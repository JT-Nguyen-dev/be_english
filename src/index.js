import express from "express";
import { json, urlencoded } from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/index";
import initAPIRoutes from "./routes/api";
import "./config/databaseConfig";
require("dotenv").config();

const app = express();
// config app
app.use(json());
app.use(urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);
initAPIRoutes(app);

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app listening on localhost:${port}`);
});