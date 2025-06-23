const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const instructorRoutes = require("./routes/instructorRoutes");
const adminRoutes = require("./routes/adminRoutes");
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
app.use("/api/admin", adminRoutes);
// Server Port
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
