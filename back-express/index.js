const express = require('express')
const cors = require('cors')
const mongodb = require('mongodb')
const rooms = require('./routes/rooms')
const clients = require('./routes/clients')
const clientsUno = require('./routes/ClientsUno')
const clientsDos = require('./routes/clientsDos')
const clientsTres = require('./routes/clientsTres')

const app = express()
const MongoClient = mongodb.MongoClient
app.use(cors())

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.listen(3001)

MongoClient.connect("mongodb://127.0.0.1/27017", (err, client)=>{
    if(err != undefined){
        console.log(err)
    } else{
        app.locals.db = client.db('Hotelvilladonna')
        console.log('conectado');
    }
})



app.use('/rooms', rooms);
app.use('/clients', clients);
app.use('/clientsUne', ClientsUne);
app.use('/clientsDos', clientsDos);
app.use('/clientsTres', clientsTres);

