const express = require("express");
const cors = require("cors");

const app = express();

var corOptions = {
  origin: `https://localhost:8081`,
};

// Routers
const router = require("./routes/noteRoute");
app.use("/api/notes", router);

// Middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing api
app.get("/", (req, res) => {
  res.json({ message: `Hello from api` });
});

// Port
const PORT = process.env.PORT || 3000;

//Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
