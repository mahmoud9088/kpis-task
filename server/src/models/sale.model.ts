import mongoose from 'mongoose'


interface ISale {
  product: {
    name: String,
    cost: Number,
    price: Number,
    category: String,
  }
  quantity: Number,
  totalRevenue: Number,
  saleDate: Date,
  customer: {
    name: String,
    gender: String,
    job: String,
    age: Number,
    region: String,
  },

}

const saleSchema = new mongoose.Schema<ISale>({
  product: {
    name: { type: String, required: [true, 'product name is required'] },
    cost: { type: Number, required: [true, 'product cost is required'] },
    price: { type: Number, required: [true, 'product price is required'] },
    category: {
      type: String,
      required: [true, 'product category is required'],
    },
  },
  quantity: { type: Number, required: [true, 'sale quantity is required'] },
  totalRevenue: {
    type: Number,
    required: [true, 'sale total revenue is required'],
  },
  saleDate: { type: Date, required: [true, 'sale date is required'] },
  customer: {
    name: { type: String, required: [true, 'customer name is required'] },
    gender: { type: String, required: [true, 'customer gender is required'] },
    job: { type: String, required: [true, 'customer job is required'] },
    age: { type: Number, required: [true, 'customer age is required'] },
    region: { type: String, required: [true, 'customer region is required'] },
  },
})

const Sale = mongoose.model('Sale', saleSchema)

export default Sale
