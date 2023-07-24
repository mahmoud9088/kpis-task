import { createSelector } from 'reselect'

const selectKpiReducer = (state: any) => state.kpis.salesTrend

interface ISalesTrend {
    _id: String;
    sales: Number
}

export const selectSalesTrendData = createSelector(
    [selectKpiReducer],
    (kpisSlice) => {
        const labels: String[] = []
        const series: Number[] = []
        kpisSlice.salesTrendData?.map(({ _id, sales }: ISalesTrend) => {
            labels.push(_id)
            series.push(sales)
        })

        return { labels, series }
    }
)
