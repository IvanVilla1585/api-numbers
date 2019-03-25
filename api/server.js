'use strict'

const http = require('http')
const cors = require('cors')
const express = require('express')
const socket = require('socket.io')
const bodyParser = require('body-parser')

const routes = require('./routes')
const numberRepository = require('./repositories/Number/')

const app = express()
const server = http.createServer(app)
const io = socket(server)
const port = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json())
app.use('/api', routes)

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('register number', async (data) => {
    console.log(data)
    const result = await numberRepository.create(data)
    socket.emit('created', result)
  })
})

server.listen(port, () => { console.log(`server running on the port ${port}`) })
