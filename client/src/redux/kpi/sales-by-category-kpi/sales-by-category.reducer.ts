import { FETCH_SALES_BY_CATEGORY_FAILED, FETCH_SALES_BY_CATEGORY_START, FETCH_SALES_BY_CATEGORY_SUCCESS } from './sales-by-category.types'

export interface ISalesByCategory {
    _id: string
    count: number
}

interface IState {
    salesByCategoryData: ISalesByCategory[],
    salesByCategoryIsLoading: boolean,
    salesByCategoryError: string | null,
}

export const INITIAL_STATE: IState = {
    salesByCategoryData: [],
    salesByCategoryIsLoading: false,
    salesByCategoryError: null,
}

export const salesByCategoryReducer = (state: IState = INITIAL_STATE, action: { type?: string, payload?: any } = {}) => {
    const { type, payload } = action

    switch (type) {

        case FETCH_SALES_BY_CATEGORY_START:
            return { ...state, salesByCategoryIsLoading: true }
        case FETCH_SALES_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                salesByCategoryData: payload,
                salesByCategoryIsLoading: false,
            }
        case FETCH_SALES_BY_CATEGORY_FAILED:
            return {
                ...state,
                salesByCategoryError: payload,
                salesByCategoryIsLoading: false,
            }


        default:
            return state
    }
}
