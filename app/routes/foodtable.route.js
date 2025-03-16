const express = require("express")
const router = express.Router();
const FoodTable = require('../models/FoodTable')


router.post("/",async (req,res)=>{
    try{
        const table = await FoodTable.create(req.body)
        res.status(201).json(table)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
})

router.get("/", async (req,res)=>{
    try{
        const table = await FoodTable.findAll()
        res.status(200).json(table)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

router.put("/:id" ,async(req,res)=>{
    try{
        const table = await FoodTable.findByPk(req.params.id)
        if (table){
            await table.update(req.body)
            res.status(200).json(table)
        }
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const table = await FoodTable.findByPk(req.params.id)
        if(table){
            await table.destroy();
            res.status(204).send()
        }else{
            res.status(404)
        }
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const table = await FoodTable.findByPk(req.params.id)
        if(table){
            res.status(200).json(table)
        }else{
            res.status(404).json({error:"table not found"})
        }
    }catch(err){
        res.error(400).json({error:err.message})
    }
})
module.exports = router;