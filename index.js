import Express from "express";
import dotenv from "dotenv";

const app = Express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/testRouter", (req, res) => {
  res.send("test router");
});

app.get("/login", (req, res) => {
  res.send("<h1>login</h2>");
});

app.get("/json", (req, res) => {
  res.status(200).json({
    name: "john",
    age: 22,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
