import { faker } from '@faker-js/faker'
import mongoose from 'mongoose'
import Sale from '../models/sale.model.ts'
import fakeProductsData, { IProduct } from './products.faker.ts'

import dotenv from 'dotenv'
dotenv.config()


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)


interface ICustomer {
  name: string
  gender: string
  job: string
  age: number
  region: string
}


interface ISale {
  product: IProduct
  customer: ICustomer
  quantity: number
  saleDate: Date
  totalRevenue: number
}

function generateSalesData(): ISale[] {
  const salesData: ISale[] = []
  for (let i = 0; i < 10000; i++) {
    const product: IProduct = faker.helpers.arrayElement(fakeProductsData)
    const quantity: number = faker.number.int({ min: 1, max: 10 }) // Adjust the quantity range as needed

    const totalRevenue: number = product?.price * quantity

    const customer: ICustomer = {
      name: faker.person.fullName(),
      gender: faker.person.gender(),
      job: faker.person.jobTitle(),
      age: faker.number.int({ min: 6, max: 100 }),
      region: faker.location.countryCode('alpha-2'),
    }

    const saleDate: Date = faker.date.between({
      from: '2010-01-01T00:00:00.000Z',
      to: '2023-01-01T00:00:00.000Z',
    })

    salesData.push({
      product,
      quantity,
      saleDate,
      customer,
      totalRevenue,
    })
  }
  return salesData
}
// Insert the data into MongoDB
Sale.insertMany(generateSalesData())
  .then(() => {
    console.log('Data inserted successfully.')
    mongoose.connection.close() // Close the connection after insertion
  })
  .catch((err) => {
    console.error('Data insertion failed: ', err)
  })
