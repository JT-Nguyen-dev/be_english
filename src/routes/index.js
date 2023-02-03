import express from "express";

let route = express.Router();
let initWebRoutes = (app) => {
  route.get('/',(req, res) => {
    return res.send ('Hello World')
  });
  return app.use('/', route);
}

module.exports = initWebRoutes;