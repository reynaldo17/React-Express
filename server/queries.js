const Pool = require('pg').Pool

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

// console.log(pool)

// GET: / 
// Should return your React application

// GET: /links
// Should return the links stored on your Postgres database
const getLinks = (req, res) => {
  pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}

// GET: /links/:id 
// Should retrieve a link by id
const getLinkByID = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM links WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// POST: /links
// Should create a new link 
const createNewLink = (request, response) => {
  const { name, URL } = request.body

  pool.query('INSERT INTO links (name, url) VALUES ($1, $2) RETURNING *', [name, URL], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

// PUT: /links/:id 
// Should update a link at a specific id


// DELETE: /links/:id 
// Should delete a link at a specific id
const deleteLink = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM links WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Link deleted with ID: ${id}`)
  })
}

//add addLinks, deleteLinks and updateLinks
module.exports = {
    getLinks,
    getLinkByID,
    createNewLink,
    deleteLink,
}