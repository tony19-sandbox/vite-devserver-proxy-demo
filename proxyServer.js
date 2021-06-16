const path = require('path')
const express = require('express')
const app = express()
const port = 3030

app.get('/posts', (req, res) => {
  res.sendFile(path.join(__dirname, 'api/posts.json'))
})

app.listen(port, () => {
  console.log(`proxy listening at http://localhost:${port}`)
})