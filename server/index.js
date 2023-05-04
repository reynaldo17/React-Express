const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();

const db = require('./queries')

const path = require('path')

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.get('/links', db.getLinks)
app.get('/links/:id', db.getLinkByID)
app.get('/links', db.createNewLink)
app.get('/links/:id', db.deleteLink)

app.get('/api', (req, res) => {
    res.json({message: 'Yo my boi this is the server'})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});