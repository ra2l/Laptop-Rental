const express = require('express')
const router = express();
const user=require('../Models/user')


router.get('/showUser',(req,res)=>{
    user.showUsers((err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg:"server error",error:err})
    })
});

router.get('/:id',(req,res)=>{
    //console.log(req.params);
    user.showUserById(req.params.id,(err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg:"server error",error:err});
    })
});

router.post('/insert', (req,res)=>{
    //res.send(req.body);
    user.insertUser(req.body, (err, result) => {
        if (result) res.json(result);
        else res.status(500).json({msg : "server error", error: err})
    })
});

router.put('/:id',(req,res)=>{
    user.editUser(req.params.id,req.body,(err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg: "server error", error : err});
    })
})

router.delete('/:id',(req,res)=>{
    //lookup
    user.deleteUser(req.params.id,(err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg: "server error", error : err});
    })
})

module.exports=router;