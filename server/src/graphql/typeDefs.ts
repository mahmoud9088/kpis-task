const typeDefs = `#graphql
    type Sale {
        product: String!,
        salesRevenue: Int!,
        region: String!,
    }

    type RevenuePerProduct {
        _id: String!
        totalRevenue: Int!
        }

    type SalesPerRegion {
        _id: String!
        count: Int!
    }

    type SalesByCategory {
        _id: String!
        count: Int!
    }

    type SalesTrend {
        _id: String!
        sales:Int!
    }

    type Query {
        sales: [Sale],
        revenuePerProducts:[RevenuePerProduct!]!
        salesPerRegion: [SalesPerRegion!]!
        salesByCategory:[SalesByCategory!]!
        salesTrend:[SalesTrend!]!
    }
`

export default typeDefs
