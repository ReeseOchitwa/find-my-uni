const universityData = require("./universityData");

// server config
const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./database/config.js");
const PORT = 8000;

app.use(cors());
app.use(express.json());
//

// remove universities from personalized universities list {DELETE}
app.delete("/uni-stats-saved/:id", async (req, res) => {
  try {
    const uni_id = req.params.id;
    const query = await pool.query(
      "DELETE FROM saved_university_data WHERE uni_id = $1",
      [uni_id]
    );
    res.json(query);
  } catch (error) {
    console.error(error);
  }
});

// add universities to personalized universitites list {POST}
app.post("/uni-stats-saved/:id", async (req, res) => {
  try {
    const uni_id = req.params.id;
    const data = universityData;
    let currentUni = data.record[uni_id - 1];
    let [name, location, students, undergrads, postgrads] = [
      currentUni.universityName,
      currentUni.geographicalData.location,
      currentUni.populationData.Students,
      currentUni.populationData.Undergraduates,
      currentUni.populationData.Postgraduates,
    ];
    const query = await pool.query(
      "INSERT INTO saved_university_data(uni_id, name, location, students, undergrads, postgrads) SELECT $1, $2, $3, $4, $5, $6 WHERE NOT EXISTS(SELECT 1 FROM saved_university_data WHERE name = $7);",
      [uni_id, name, location, students, undergrads, postgrads, name]
    );
    console.log(query);
    res.send(currentUni);
  } catch (error) {
    console.error(error);
  }
});
//

// return all universities {GET}
app.get("/uni-stats", async (req, res) => {
  try {
    const stats = universityData.record;
    res.send(stats);
  } catch (error) {
    console.error(error);
  }
});
//

// return everything from personalized universities list {GET}
app.get("/uni-stats-saved", async (req, res) => {
  try {
    const query = await pool.query("SELECT * FROM saved_university_data;");
    res.json(query.rows);
  } catch (error) {
    console.error(error);
  }
});
//

// allow server to listen on 'PORT' value
app.listen(PORT, () => {
  console.log("Listening on port 8000");
});
//
