import { faker } from '@faker-js/faker'

function generateFakeCategory(): string {
  const name: string = faker.commerce.department()
  return name
}

function generateFakeCategories(count: number): Set<string> {
  const fakeCategories = new Set<string>()
  for (let i = 0; i < count; i++) {
    const fakeCategory: string = generateFakeCategory()
    fakeCategories.add(fakeCategory)
  }
  return fakeCategories
}

const fakeCategoriesData = generateFakeCategories(10)

export default Array.from(fakeCategoriesData)
