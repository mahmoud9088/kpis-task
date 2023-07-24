import { faker } from '@faker-js/faker'
import fakeCategoriesData from './category.faker.ts'

export interface IProduct {
  name: string
  cost: number
  price: number
  category: string
}

function generateFakeProduct(): IProduct {
  const name = faker.commerce.productName()
  const cost = faker.number.int({ min: 10, max: 100 })
  const price = cost + faker.number.int({ min: 5, max: 50 })
  const category = faker.helpers.arrayElement(fakeCategoriesData)

  return {
    name,
    cost,
    price,
    category,
  }
}

function generateFakeProducts(count: number): Set<IProduct> {
  const fakeProducts = new Set<IProduct>()
  for (let i = 0; i < count; i++) {
    const fakeProduct = generateFakeProduct()
    fakeProducts.add(fakeProduct)
  }
  return fakeProducts
}

const fakeProductsData = generateFakeProducts(10)

export default Array.from(fakeProductsData)
