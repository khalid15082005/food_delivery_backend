import foodModel from "../models/foodModel.js";
import fs from "fs";


//add food item

const addFood = async (req, res) => {

    try{
    let image_filename =`${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    });
        
        await food.save();
        
        res.json({success:true ,message:"Food Added"});
    } catch(err){
        console.log(err);
        res.json({success:false ,message:"Failed to add Food"});
    }
}

//all food list

const listFood = async (req, res) => {
    try{
        const foods = await foodModel.find();
        res.json({success:true ,data:foods});
    }
    catch(err){
        console.log(err);
        res.json({success:false ,message:"Failed to fetch Food"});
    }
    
}


//remove food item
const removeFood = async (req, res) => {

    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true ,message:"Food Removed"});
 
    } catch(err){
        console.log(err);
        res.json({success:false ,message:"Failed to remove Food"});
    }

}

export { addFood,listFood,removeFood };



