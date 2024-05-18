import mongoose from "mongoose";
//fake data
const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const items = [
    {
      _id: userIds[1],
      name: "iPhone12",
      image: "Iphone.jpg",
      description: "Latest iPhone model",
      taxApplicability: true,
      tax: 5,
      baseAmount: 1000,
      discount: 50,
      totalAmount:950,
    }
  ];
  
  export const subcategory = [
    {
      _id: userIds[2],
      name: "MobilePhones",
      image: "Mobile.jpg",
      description: "Subcategory for mobile phones",
      taxApplicability: true,
      tax: 5,
      items: [userIds[1]]
    }
  ];
  
  export const category = [
    {
      _id: userIds[3],
      name: "Electronics",
      image: "Electronics.jpg",
      description: "Category for electronic items",
      taxApplicability: true,
      tax: 5,
      subcategories: [userIds[2]]
    }
  ];
  
