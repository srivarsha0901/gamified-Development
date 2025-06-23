const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const instructorRoutes = require("./routes/instructorRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/instructor", instructorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
