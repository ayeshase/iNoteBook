const connectToMongo = require('./db')
const express = require('express')

connectToMongo();
const app = express()
const port = 3001

app.use(express.json()) 

//available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
   console.log(`iNotebook Backend listening on port at http://localhost:${port}`)
})