const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello fro the server side!')
});

const port = 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
