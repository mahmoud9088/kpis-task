import { createSelector } from 'reselect'

const selectKpiReducer = (state: any) => state.kpis.salesByCategory


interface ISalesByCategory {
    _id: string;
    count: number;
}

export const selectSalesByCategoryData = createSelector(
    [selectKpiReducer],
    (kpisSlice) => {
        const labels: String[] = []
        const series: Number[] = []
        kpisSlice.salesByCategoryData?.map(({ _id, count }: ISalesByCategory) => {
            labels.push(_id)
            series.push(count)
        })

        return { labels, series }
    }
)






