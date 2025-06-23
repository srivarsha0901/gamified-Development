require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const exists = await Admin.findOne();
  if (exists) return console.log("Admin already exists.");

  const hashed = await bcrypt.hash("admin123", 10);

  const newAdmin = new Admin({
    name: "Super Admin",
    email: "admin@janajagriti.org",
    password: hashed
  });

  await newAdmin.save();
  console.log("Admin created:", newAdmin.email);
  process.exit();
});
