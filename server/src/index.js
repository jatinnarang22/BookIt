const express = require("express");
const cors = require("cors");
const routes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", routes);

module.exports = app;
