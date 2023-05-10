const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/uni-stats', async (req, res) => {
    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/6449d2d88e4aa6225e91a599');
        let data = await response.json();
        res.send(data);
        console.log(data);
    } catch(error) {
        console.error(error);
    }
})
  
app.listen(5001, () => {
    console.log('Listening on port 5001');
})