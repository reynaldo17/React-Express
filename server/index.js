const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

const path = require('path')

app.use(express.static(path.resolve(__dirname, '../favlinks/build')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../favlinks/build', 'index.html'))
})

app.get('/api', (req, res) => {
    res.json({message: 'Yo my boi this is the server'})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});