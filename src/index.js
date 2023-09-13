const express = require("express");
const { errorMonitor } = require("pg/lib/query");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const server = require("http").createServer(app);

var productRoute = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use("/products", productRoute);
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
  });