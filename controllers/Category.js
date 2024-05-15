import Category from "../models/Category.js";
export const getCategory=async(req,res)=>{
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
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