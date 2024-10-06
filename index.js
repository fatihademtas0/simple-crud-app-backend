const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/products", productRoute);

// database connection
mongoose
  .connect(
    "mongodb+srv://fatihtas:Z8BLl5qJzuT6GpP4@backenddb.myk5a.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on PORT 3000!");
    });
  })
  .catch(() => {
    console.log("Database connection failed!");
  });

app.get("/", (req, res) => {
  res.send("Hello from crud app!");
});
