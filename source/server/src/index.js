const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/db");
const routes = require("./routes");
const path = require("path");

const app = express();

// Connect to .env
dotenv.config({ path: path.resolve(__dirname, "./.env") });

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

// Connect to db
db.connect("LPH1124", "BetterTrip");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// CORS
app.use(cors());

// HTTP loggers
app.use(morgan("combined"));

// Routes
routes(app);

app.listen(port, host, () => {
  console.log(`Server app listening on port ${port} and host ${host}`);
});
