const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('Im sending something yo!')
})

app.get('/api', (req, res) => {
    res.json({message: 'Yo my boi this is the server'})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});