import Items from "../models/Item.js";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";
export const getSubCategory=async(req,res)=>{
    try {
        const subcategories = await SubCategory.find();
        res.status(200).json(subcategories);
    } catch (error) {
        console.error('Error fetching subcategories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}
export const postSubCategory=async(req,res)=>{
    const categoryName = req.params.categoryName;
    try {
        const category = await Category.findOne({ name: categoryName });
        if (!category) {
            return res.status(404).json({ message: 'SubCategory not found' });
        }
        const subcategoryData = { ...req.body, taxApplicability: category.taxApplicability, tax: category.tax };
        const subcategory = await SubCategory.create(subcategoryData);
        category.subcategories.push(subcategory._id);
        await category.save();
        
        res.status(201).json(subcategory);
    } catch (error) {
        console.error('Error creating subcategory:', error);
        res.status(500).json({ message: 'Failed to create subcategory' });
    }
}
export const getSubCategoryItems=async(req,res)=>{
    const subcategoryId = req.params.identifier;
    try{
        const category = await SubCategory.findOne({ name: subcategoryId }).populate('items');
        // console.log(category.items);
        if (!category) {
            return res.status(404).json({ message: 'SubCategory not found' });
        }
        res.status(200).json(category.items);
    }catch(error){
        console.error('Error fetching subcategories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const getNameSubCategory=async(req,res)=>{
    const identifier = req.params.identifier;
    try{
        const subcategory = await SubCategory.findById(identifier);
        if (!subcategory) {
            return res.status(404).json({ message: 'SubCategory not found' });
        }
        res.status(200).json(subcategory);
    }catch(error){
        console.error('Error fetching subcategories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}