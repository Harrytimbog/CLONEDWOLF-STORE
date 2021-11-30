const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection Successful")).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend server is running")
})
