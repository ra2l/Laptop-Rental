const express = require("express");
const app = express();
const mongoose = require("mongoose");
const laptops = require("./routes/laptops");
const user = require("./routes/user");
const order = require("./routes/order");
const cors = require("cors");

app.use(express.json());

mongoose
  .connect("mongodb://localhost/LaptopRental")
  .then(() => console.log("Connected…"))
  .catch(err => console.error("Connection failed…"));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(cors());
app.use("/api/laptops", laptops);
//app.use("/api/user", user);
//app.use("/api/order", order);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening to port " + port + "...."));
