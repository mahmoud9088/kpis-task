import { FETCH_SALES_PER_REGION_FAILED, FETCH_SALES_PER_REGION_START, FETCH_SALES_PER_REGION_SUCCESS } from './sales-per-region.types'

export interface ISalesPerRegion {
    _id: string
    count: number
}

interface IState {
    salesPerRegionData: ISalesPerRegion[],
    salesPerRegionIsLoading: boolean,
    salesPerRegionError: string | null,
}

export const INITIAL_STATE: IState = {

    salesPerRegionData: [],
    salesPerRegionIsLoading: false,
    salesPerRegionError: null,
}

export const salesPerRegionReducer = (state: IState = INITIAL_STATE, action: { type?: string, payload?: any } = {}) => {
    const { type, payload } = action

    switch (type) {


        case FETCH_SALES_PER_REGION_START:
            return { ...state, salesPerRegionIsLoading: true }
        case FETCH_SALES_PER_REGION_SUCCESS:
            return {
                ...state,
                salesPerRegionData: payload,
                salesPerRegionIsLoading: false,
            }
        case FETCH_SALES_PER_REGION_FAILED:
            return {
                ...state,
                salesPerRegionError: payload,
                salesPerRegionIsLoading: false,
            }


        default:
            return state
    }
}
