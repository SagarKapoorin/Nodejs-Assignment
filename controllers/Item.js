import Items from "../models/Item.js";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";
export const getItems=async(req,res)=>{
    try {
        const itemss = await Items.find();
        res.status(200).json(itemss);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}
export const postItems=async(req,res)=>{
    const category=req.params.categoryName;
    const subcategory=req.params.subcategoryName;
    if(!subcategory){
        if(category){
            const catego= await Category.findOne({name:category});
            if(!catego){
                return res.status(404).json({ message: 'Category not found '});
            }
            const ItemData = { ...req.body, taxApplicability: catego.taxApplicability, tax: catego.tax };
            const newItem = await Items.create(ItemData);
            await newItem.save();
            res.status(201).json(newItem);
        }else{
            return res.status(500).json({message:'Category is must , subcategory is optional'});
        }
    }else{
        const subcatego=await SubCategory.findOne({name:subcategory});
        if(!subcatego){
            return  res.status(404).json({ message: 'SubCategory not found '});
        }
        const ItemData = { ...req.body, taxApplicability: subcatego.taxApplicability, tax: subcatego.tax , totalAmount:(req.body.baseAmount - req.body.discount) };
            const newItem = await Items.create(ItemData);
           const newitem2= await newItem.save();
            subcatego.items.push(newitem2._id);
            //updating subcategory items array also
            res.status(201).json(newitem2);
    }
}
export const patchItems=async(req,res)=>{
    try {
        const { id } = req.params;
        const updates = req.body;  
        const item = await Items.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    
        if (!item) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
export const getNameItems=async(req,res)=>{
    const identifier = req.params.identifier;
    try{
        const c = await Items.findById(identifier);
        if (!c) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(c);
    }catch(error){
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const searchItems=async(req,res)=>{
    try {
        const { name } = req.query;
    
        if (!name) {
          return res.status(400).json({ message: 'Name query parameter is required' });
        }
        const items = await Items.find({name: new RegExp(name, 'i') });
        //above code can match iphone , IPHONE ,Iphone etc ,use for case-senstive matches
    
        if (items.length === 0) {
          return res.status(404).json({ message: 'No items found matching the search term' });
        }
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    
}