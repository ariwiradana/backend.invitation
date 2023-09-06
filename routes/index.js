const routes = (app) => {
  app.use("/api/wishes", require("../routes/wishes.routes"));
};

module.exports = routes;
