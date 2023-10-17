require("dotenv").config();
const express = require("express");
const PORT = process.env.SERVER_PORT;
const cors = require("cors");

const UserRoute = require("./routers/userRoute");
const AuthRoute = require("./routers/authRoute");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", UserRoute);
app.use("/api/auth", AuthRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ` + PORT);
});
