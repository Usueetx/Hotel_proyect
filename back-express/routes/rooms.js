const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    let db = req.app.locals.db;
    db.collection('rooms').find().toArray((err, data)=>{
        if(err != undefined){
            res.send({msg: 'Error getting rooms'})
        } else{
            res.send(data)
        }
    })
})

router.get('/:Tipo', function(req, res){
    console.log(req.app.locals);
    req.app.locals.db.collection('rooms').find({Tipo: req.params.Tipo}).toArray(function(err, data){
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

    db.collection('rooms').insertOne(req.body, (err, data)=>{
        if(err != undefined){
            res.send({msg: 'Error posting diseños'})
        } else{
            res.send(data)
            //  {msg: 'diseño creado'})
        }
    })
})

router.delete('/:Tipo', function(req, res){
    
    req.app.locals.db.collection('rooms').deleteOne({Tipo: req.params.Tipo}, function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            res.send(data)
        }
    })
})



module.exports = router;