const express = require("express");
const cors = require("cors");
const formRoutes = require("./routes/formRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the form routes
app.use("/form", formRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
