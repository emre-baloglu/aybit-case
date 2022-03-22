import * as actionTypes from "../actions/actionTypes";

const customerReducer = (state, action) => {
    console.log("--inCR")
    console.log(state)
    switch (action.type) {
        case actionTypes.ADD_CUSTOMER:
            return {
                ...state,
                customers: (action.payload !== state.payload)
                    ? [...state.customers, action.payload] : null
            };

        case actionTypes.UPDATE_CUSTOMER:
            console.log("--inUCR")
            console.log(action.payload)
            let newCustomer = action.payload
            return {
                ...state,
                customers: state.customers?.map(customer =>
                    (customer.id === action.payload.id)
                        ? newCustomer : customer)
            };

        case actionTypes.DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers?.filter(customer =>
                    customer.id !== action.payload)
            };

        case actionTypes.GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: action.payload
            };

        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            };

        case actionTypes.CHANGE_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            };
        default:
            return state;
    }
}

export default customerReducer;