const express = require("express");
const { errorMonitor } = require("pg/lib/query");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const http = require("http");
const pool = require("./data-access/products/index.js");
const transDataAccess = require("./data-access/transactions");
const { socketTransactionUC } = require("./use-cases");

const WebSocket = require("ws");

const server = require("http").createServer(app);

var productRoute = require("./routes/products");
var userRoute = require("./routes/users");
var transactionRoute = require("./routes/transaction");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.json());
app.use("/products", productRoute);
app.use("/user", userRoute);
app.use("/transaction", transactionRoute);
app.use(express.static(path.join(__dirname, "public")));

// const socketServer = http.createServer((req, res) => {
//   // Handle any HTTP requests (if needed)

// });

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    const result = socketTransactionUC(ws);
    let x = 0;
    // POS
    wss.clients.forEach((client) => {
      x++;
      // if (client !== ws && client.readyState === WebSocket.OPEN) {
        console.log("send", x);
        result
          .then((result) => {
            // console.log("result:",result.rows);
            ws.send(JSON.stringify(result.rows));
          })
          .catch((error) => {
            console.error("Rejected:", error);
          });
      // }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("WebSocket server is running on port 3000");
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
