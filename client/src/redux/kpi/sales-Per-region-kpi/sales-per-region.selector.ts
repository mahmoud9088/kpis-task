import { createSelector } from 'reselect'

const selectKpiReducer = (state: any) => state.kpis.salesPerRegion

interface SalesPerRegionData {
    _id: string
    count: number
}

export interface IMapData {
    [key: string]: number
}

export const selectjVectorMapData = createSelector(
    [selectKpiReducer],
    (kpisSlice) => {
        const mapData: IMapData = {}
        kpisSlice.salesPerRegionData?.map(({ _id, count }: SalesPerRegionData) => {
            mapData[`${_id}`] = count
        })
        return mapData
    }
)

