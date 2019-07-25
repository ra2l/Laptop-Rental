const express = require('express')
const router = express();
const laptops=require('../Models/laptops')

router.get('/showLaptop',(req,res)=>{
    laptops.showLaptops((err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg:"server error",error:err})
    })
});

router.get('/:id',(req,res)=>{
    //console.log(req.params);
    laptops.showLaptopById(req.params.id,(err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg:"server error",error:err});
    })
});

router.post('/insert', (req,res)=>{
    laptops.insertLaptop(req.body, (err, result) => {
        if (result) res.json(result);
        else res.status(500).json({msg : "server error", error: err})
    })
});

router.put('/:id',(req,res)=>{
    laptops.editLaptop(req.params.id,req.body,(err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg: "server error", error : err});
    })
})

router.delete('/:id',(req,res)=>{
    //lookup
    laptops.deleteLaptop(req.params.id,(err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg: "server error", error : err});
    })
})

router.post('/filteredLaptops',(req,res)=>{
    laptops.filteredLaptops(req.body,(err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg:"server error",error: err})
    })
})

router.post('/makeRent/:id',(req,res)=>{
    //console.log(req.body);
    laptops.makeRent(req.params.id,req.body,(err,result)=>{
        if(result) res.json(result);
        else res.status(500).json({msg: "server error", error : err});
    })
})

module.exports=router;