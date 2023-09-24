const express = require("express");
const { userRouter } = require("./routes/userRoutes");
const { postRouter } = require("./routes/postRoutes");
const { postReaction } = require("./routes/postReaction");
const dotenv = require("dotenv");
const connectDB = require("./dataBase/db");
const cors = require("cors");

//config env
dotenv.config();

const app = express();

//database config
connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/Files", express.static("Files"));

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/reaction", postReaction);

//PORT
const PORT = process.env.PORT || 8080;

//rest api
app.get("/", (req, res) => {
  res.send("<h1> Welcome to Social media app</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
