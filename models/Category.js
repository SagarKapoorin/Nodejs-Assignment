import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    taxApplicability: { type: Boolean, required: true, default:false },
    tax: { type: Number,
        default:0},
    subcategories: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }], default: [] }
  },
  { timestamps: true }
  
);

const Category = mongoose.model("Category", CategorySchema);
export default Category;