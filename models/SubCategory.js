import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    taxApplicability: { type: Boolean, required: true ,  set: function(value) {
        if (this.parentCategory && this.parentCategory.taxApplicability !== undefined) {
          return this.parentCategory.taxApplicability;
        }
        return value; 
      } },
    tax: { type: Number,default:0},
    items: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Items' }], default: [] }
  },
  { timestamps: true }
  
);
SubCategorySchema.virtual('parentCategory', {
    ref: 'Category',
    localField: '_id',
    foreignField: 'subcategories',
    justOne: true
  });
//above code create a virtual image of parentcategory i.e. category for checking taxApplicability , feel like overkill.
const SubCategory = mongoose.model("SubCategory", SubCategorySchema);
export default SubCategory;