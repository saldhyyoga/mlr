const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5001;
const routes = require("./routes/index");

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
