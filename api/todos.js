var express = require('express');
var router = express.Router();
var todo=require('../models/todos')
router.post('/',function (req,res) {
    var t=new todo(req.body);
    t.save(function (err,t) {
        if(err)
            res.send(err);
        else
            res.send(t);
    })
})
router.post('/:id/medias',function (req,res) {
    todo.findById(req.params.id).exec(function (err,to) {
        if(err)
            res.send(err);
        else if(!to)
            res.status(404).send();
        else
            to.medias.push(req.body);
            to.save()
            res.send(to);

    })
})
router.get('',function (req,res) {
    todo.find(function (err,to) {
        if(err)
            res.send(err);
        else if(!to)
            res.status(404).send();
        else
            res.json(to)

    })
})
router.get('/:id',function (req,res) {
    todo.findById(req.params.id).exec(function (err,to) {
        if(err)
            res.send(err);
        else if(!to)
            res.status(404).send();
        else
            res.json(to)

    })
})
router.get('/:id/medias',function (req,res) {
    todo.findById(req.params.id).exec(function (err,to) {
        if(err)
            res.send(err);
        else if(!to)
            res.status(404).send();
        else
            res.json(to.medias)

    })
})
router.get('/:id/medias/:idm',function (req,res) {
    todo.findById(req.params.id).exec(function (err,to) {
        if(err)
            res.send(err);
        else if(!to)
            res.status(404).send();
        else

            res.json(to.medias.id(req.params.idm))

    })
})
router.put('/:id/medias',function (req,res) {
    todo.findByIdAndUpdate(req.params.id).exec(function (err,to) {
        if(err)
            res.send(err);
        else if(!to)
            res.status(404).send();
        else
            to.medias.push(req.body)
            to.save()
            res.json(to.medias)

    })
})
router.put('/:id/medias/:idm',function (req,res) {
    todo.findById(req.params.id).exec(function (err,to) {
        if(err)
            res.send(err);
        else if(!to)
            res.status(404).send();
        else
            var m=to.medias.id(req.params.idm);
                m.name=req.body.name;
                m.uploadDate=new Date();
                to.save()
                res.json(to.medias)

    })
})
router.delete('/:id/medias/:idm',function (req,res) {
    todo.findByIdAndRemove(req.params.id,function (err,to) {
        if(err)
            res.send(err);
        else
            to.medias.id(req.params.idm).remove();
        to.save(function (err) {
            if (err)
                res.send(err)
            else
                res.json(to.medias)
        })

    })
})
router.delete('/:id',function (req,res) {
    todo.findByIdAndRemove(req.params.id,function (err,to) {
        if(err)
            res.send(err);
        else
            res.send("deleted");

    })
})

module.exports=router;