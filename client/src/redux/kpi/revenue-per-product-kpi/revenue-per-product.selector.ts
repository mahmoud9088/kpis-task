import { createSelector } from 'reselect'

const selectKpiReducer = (state: any) => state.kpis.revenuePerProduct


interface IRevenuePerProduct {
    _id: String
    totalRevenue: Number
}

export const selectRevenuePerProductData = createSelector(
    [selectKpiReducer],
    (kpisSlice) => {
        const labels: String[] = []
        const series: Number[] = []
        kpisSlice.revenuePerProductData?.map(({ _id, totalRevenue }: IRevenuePerProduct) => {
            labels.push(_id)
            series.push(totalRevenue)
        })

        return { labels, series }
    }
)

