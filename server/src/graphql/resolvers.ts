import Sale from '../models/sale.model'

const resolvers = {
  Query: {
    revenuePerProducts: async () => {
      try {
        const result = await Sale.aggregate([
          {
            $group: {
              _id: '$product.name',
              totalRevenue: { $sum: '$totalRevenue' },
            },
          },
        ])
        return result
      } catch (error) {
        console.error(error)
        throw new Error('Unable to fetch product sales summary.')
      }
    },
    salesPerRegion: async () => {
      try {
        const result = await Sale.aggregate([
          {
            $group: {
              _id: '$customer.region',
              count: { $sum: 1 },
            },
          },
        ])

        return result
      } catch (error) {
        console.error(error)
        throw new Error('Unable to fetch sales per region.')
      }
    },
    salesByCategory: async () => {
      try {
        const result = await Sale.aggregate([
          {
            $group: {
              _id: '$product.category',
              count: { $sum: 1 },
            },
          },
        ])
        return result
      } catch (error) {
        console.error(error)
        throw new Error('Unable to fetch sales by category.')
      }
    },

    salesTrend: async () => {
      try {
        const result = await Sale.aggregate([
          {
            $group: {
              _id: { $year: '$saleDate' },
              sales: { $sum: 1 },
            },
          },
          {
            $sort: { _id: 1 },
          },
        ])

        return result
      } catch (error) {
        console.error(error)
        throw new Error('Unable to fetch sales by sales trend.')
      }
    },
  },
}

export default resolvers
