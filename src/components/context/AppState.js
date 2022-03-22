import React, { useEffect, useReducer, useState } from "react";
import CustomerContext from "./Context.js";
import initialState from "./initialState";
import * as actionTypes from "../../actions/actionTypes";
import customerReducer from "../../reducer/customerReducer";
import axios from 'axios';


const AppState = (props) => {
    const customersUrl = "https://localhost:7207/api/Customer";
    const branchesUrl = "https://localhost:7207/api/Branches";

    const [state, dispatch] = useReducer(customerReducer, initialState);
    const [isVisible, setIsVisible] = useState(true);
    const [selectedOption, setSelectedOption] = useState();
    const [showModal, setShowModal] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState({});
    const [isUserAuth, setIsUserAuth] = useState(false);


    useEffect(() => {
        // Set up a cancellation source
        let source = axios.CancelToken.source();
        let categorySource = axios.CancelToken.source();
        const fetchData = async () => {
            try {
                await axios({
                    method: 'get',
                    url: customersUrl+"/list"
                })
                    .then(response => {
                        dispatch({ type: actionTypes.GET_CUSTOMERS_SUCCESS, payload: response.data })
                    });
                console.log("--inUE")
                console.log(state)

            } catch (error) {
                // Is this error because we cancelled it ourselves?
                if (axios.isCancel(error)) {
                    console.log(`call for ${customersUrl} was cancelled`);
                } else {
                    throw error;
                }
            }
        };
        fetchData();
        return () => {
            // Let's cancel the request on effect cleanup
            source.cancel()
        };
    }, []);

    // useEffect(() => {
    //     // Set up a cancellation source
    //     let customerSource = axios.CancelToken.source();
    //     let categorySource = axios.CancelToken.source();
    //     const fetchData = async () => {
    //         try {
    //             Promise.all([
    //                 await axios.get(customersUrl, { cancelToken: customerSource.token }),
    //                 await axios.get(categoriesUrl, { cancelToken: categorySource.token })
    //             ])
    //                 .then(response => {
    //                     dispatch({ type: actionTypes.GET_CUSTOMERS_SUCCESS, payload: response[0].data })
    //                     dispatch({ type: actionTypes.GET_CATEGORIES_SUCCESS, payload: response[1].data })
    //                 });
    //             console.log("--inUE")
    //             console.log(state)

    //         } catch (error) {
    //             // Is this error because we cancelled it ourselves?
    //             if (axios.isCancel(error)) {
    //                 console.log(`call for ${customersUrl} was cancelled`);
    //             } else {
    //                 throw error;
    //             }
    //         }
    //     };
    //     fetchData();
    //     return () => {
    //         // Let's cancel the request on effect cleanup
    //         customerSource.cancel()
    //         categorySource.cancel()
    //     };
    // }, []);

    const options = state.categories?.map(category => {
        return {
            value: category.id,
            label: category.categoryName
        }
    });

    const addCustomer = (customer) => {
        dispatch({ type: actionTypes.ADD_CUSTOMER, payload: customer });
    }

    const updateCustomer = (customer) => {
        console.log("--inURF")
        console.log(customer)
        dispatch({ type: actionTypes.UPDATE_CUSTOMER, payload: customer });
    }

    const deleteCustomer = (id) => {
        dispatch({ type: actionTypes.DELETE_CUSTOMER, payload: id });
    }

    const value = {
        customers: state.customers,
        categories: state.categories,
        currentCategory: state.currentCategory,
        currentCustomer,
        setCurrentCustomer,
        dispatch,
        options,
        isVisible,
        setIsVisible,
        selectedOption,
        setSelectedOption,
        addCustomer,
        updateCustomer,
        deleteCustomer,
        customersUrl,
        showModal,
        setShowModal,
        isUserAuth,
        setIsUserAuth
    };

    return (
        <CustomerContext.Provider value={value}>
            {props.children}
        </CustomerContext.Provider>
    )
}

export default AppState;