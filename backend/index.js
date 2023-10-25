const connectToMongo = require('./db')
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

//available Routes
app.use('/api/auth', require('./routes/Auth'))
app.use('/api/notes', require('./routes/Notes'))


app.listen(port, () => {
   console.log(`Example app listening on port at http://localhost:${port}`)
})