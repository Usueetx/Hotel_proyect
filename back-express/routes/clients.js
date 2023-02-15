const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    let db = req.app.locals.db;
    db.collection('clients').find().toArray((err, data)=>{
        if(err != undefined){
            res.send({msg: 'Error getting clients'})
        } else{
            res.send(data)
        }
    })
})

router.get('/', function(req, res){
    console.log(req.app.locals);
    req.app.locals.db.collection('clients').find().toArray(function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            console.log(data)
            res.send(data)
        }
    });
})

router.post('/', (req, res) =>{
    console.log('llego');
    let db = req.app.locals.db;

    db.collection('clients').insertOne(req.body, (err, data)=>{
        if(err != undefined){
            res.send({msg: 'Error with clients'})
        } else{
            res.send(data)
            //  {msg: 'diseño creado'})
        }
    })
})

router.delete('/:Nombre', function(req, res){
    
    req.app.locals.db.collection('clients').deleteOne({Nombre: req.params.Nombre}, function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            res.send(data)
        }
    })
})


module.exports = router