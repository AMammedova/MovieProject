import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../state/action-types"

export const addToBasket = (data) => {
    return {
        type : ADD_TO_BASKET,
        payload : data
    }
}

export const removeFromBasket = (data) => {
    return {
        type : REMOVE_FROM_BASKET,
        payload : data
    }
}