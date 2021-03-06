const express = require('express');
const app = express();

const env_name=process.env.name || "def";
app.get('/', (req, res) => {
  const name = process.env.NAME || 'automatically';
  res.send(`i have updated ${name}! ${env_name}`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});