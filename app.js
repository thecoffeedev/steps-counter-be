const express = require("express");
const cors = require("cors");
const connectDB = require("./src/helpers/connection");
const steps = require("./src/routes/steps");
const { Schema } = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/steps", steps);

connectDB
  .then((port) => {
    app.listen(port, () =>
      console.log(`::: server is UP and running on PORT ${port} :::`)
    );
  })
  .catch((error) => {
    console.log(error);
  });

// app > route > controller > Schema > db
