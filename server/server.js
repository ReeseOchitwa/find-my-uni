// write express code here
const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./database/config.js");
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/uni-stats", async (req, res) => {
  try {
    const uni_id = req.body.uni_id;
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/6449d2d88e4aa6225e91a599"
    );
    let data = await response.json();
    let currentUni = data.record[uni_id - 1];
    let [name, location, students, undergrads, postgrads] = [
      currentUni.universityName,
      currentUni.geographicalData.location,
      currentUni.populationData.Students,
      currentUni.populationData.Undergraduates,
      currentUni.populationData.Postgraduates,
    ];
    const query = await pool.query(
      "INSERT INTO university_data(name, location, students, undergrads, postgrads) SELECT $1, $2, $3, $4, $5 WHERE NOT EXISTS(SELECT 1 FROM university_data WHERE name = $6);",
      [name, location, students, undergrads, postgrads, name]
    );
    res.send(currentUni);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log("Listening on port 8000");
});
