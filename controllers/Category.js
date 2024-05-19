import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";
import Items from "../models/Item.js";
export const getCategory=async(req,res)=>{
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}
export const patchCategory=async(req,res)=>{
    try {
        const { id } = req.params;
        const updates = req.body;
    
        const category = await Category.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    //above code is updating to new category
        if (!category) {
          return res.status(404).json({ message: 'Category not found' });
        }
    
        res.status(200).json(category);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
export const postCategory=async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Failed to create category' });
    }
}
export const getCategoryItems=async(req,res)=>{
    const categoryId = req.params.categoryId;

    try {
        const category = await Category.findOne({ name: categoryId }).populate({
            path: 'subcategories',
            populate: {
                path: 'items'
            }
        });
        //populating both subcategories and subcategories->items
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        let items = [];
        category.subcategories.forEach(subcategory => {
            items = items.concat(subcategory.items);
        });

        res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const getCategorysubcategory=async(req,res)=>{
    const categoryId = req.params.identifier;
    try{
        const category = await Category.findOne({ name: categoryId }).populate('subcategories');
        if (!category) {
            return res.status(404).json({ message: 'Category not found1' });
        }
        res.status(200).json(category.subcategories);
    }catch(error){
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const getNameCategory=async(req,res)=>{
    const identifier = req.params.identifier;
    try{
        const category = await Category.findById(identifier);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    }catch(error){
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}