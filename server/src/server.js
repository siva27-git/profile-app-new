const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors())
const port = process.env.PORT || 8000

app.use(express.json());

app.get('/getUser', (req, res) => {
  try {
    const dataBuffer = fs.readFileSync('profile.json')
    const dataJSON = dataBuffer.toString()
    res.status(200).send(JSON.parse(dataJSON))
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
});

app.post('/updateUser', (req, res) => {
  try {
    const stringifiedData = JSON.stringify(req.body);
    fs.writeFileSync('profile.json', stringifiedData);
    res.status(200).send({ "message": "success" })
  } catch (e) {
    res.status(500).send(e)
  }
});

app.listen(port, () => {
  console.log('Server is up on port ' + port)
});