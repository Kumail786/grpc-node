const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./requests')
const body_parser = require('body-parser')
app.use(cors())
app.use(body_parser.json())

app.get('/',(req,res)=>{
    res.send({
        msg : "getting default route"
    })
})
app.use('/api/v1/todo/',router)

app.listen(11000,()=>{
console.log('server listening')
})