import {
    FETCH_REVENUE_PER_PRODUCT_FAILED,
    FETCH_REVENUE_PER_PRODUCT_START,
    FETCH_REVENUE_PER_PRODUCT_SUCCESS,
} from './revenue-per-product.types'

export interface IRevenuePerProduct {
    _id: string
    totalRevenue: number
}

interface IState {
    revenuePerProductData: IRevenuePerProduct[]
    revenuePerProductIsLoading: boolean
    revenuePerProductError: string | null
}

export const INITIAL_STATE: IState = {
    revenuePerProductData: [],
    revenuePerProductIsLoading: false,
    revenuePerProductError: null,
}

export const revenuePerProductReducer = (
    state: IState = INITIAL_STATE,
    action: { type?: string; payload?: any } = {}
) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_REVENUE_PER_PRODUCT_START:
            return { ...state, revenuePerProductIsLoading: true }
        case FETCH_REVENUE_PER_PRODUCT_SUCCESS:
            return {
                ...state,
                revenuePerProductData: payload,
                revenuePerProductIsLoading: false,
            }
        case FETCH_REVENUE_PER_PRODUCT_FAILED:
            return {
                ...state,
                revenuePerProductError: payload,
                revenuePerProductIsLoading: false,
            }

        default:
            return state
    }
}
