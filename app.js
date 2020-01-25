const express = require('express');
const app = express();

app.get('/', (req, res) => {
  
});

const port = 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
