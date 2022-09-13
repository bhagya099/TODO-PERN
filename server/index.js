const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5008;

//middleware
app.use(cors());
//to get data from server side we can get json data
app.use(express.json());

app.listen(PORT, () => {
  console.log(`you port is http://localhost:${PORT}`);
});
