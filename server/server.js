const express = require("express");
const cors = require("cors");
const app = express();
const port = 8808;

app.use(cors());
app.listen(port, () => console.log(`Server running on PORT ${port}`));