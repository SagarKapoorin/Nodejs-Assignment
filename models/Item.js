import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    taxApplicability: { type: Boolean, required: true },
    tax: { type: Number, default:0 },
    baseAmount:{type:Number , required:true},
    discount:{type:Number , required:true},
    totalAmount:{
        type:Number,
       required:true,
    }
    
  },
  { timestamps: true }
  
);

const Items = mongoose.model("Items", ItemsSchema);
export default Items;