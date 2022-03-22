import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

export const createCustomerSuccess = (customer) => {
    return { type: actionTypes.CREATE_CUSTOMERS_SUCCESS, payload: customer };
}

export const updateCustomerSuccess = (customer) => {
    return { type: actionTypes.UPDATE_CUSTOMERS_SUCCESS, payload: customer };
}

export const getCustomersSuccess = (customer) => {
    return { type: actionTypes.GET_CUSTOMERS_SUCCESS, payload: customer };
}

// export const saveCustomerApi = (customer) => {
//     return fetch("https://localhost:7207/api/Customer/" + (customer.id || ""), {
//         method: customer.id ? "PUT" : "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(customer)
//     })
//         .then(handleResponse)
//         .catch(handleError);
// }

export const saveCustomerApi = (customer) => {
    if (customer.id) {
        return fetch(`https://localhost:7207/api/Customer/update/${customer.id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(customer)
        })
            .then(handleResponse)
            .catch(handleError);
    }
    else {
        return fetch("https://localhost:7207/api/Customer", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(customer)
        })
            .then(handleResponse)
            .catch(handleError);
    }

}

export const saveCustomer = (customer) => {
    return function (dispatch) {
        return saveCustomerApi(customer)
            .then(savedCustomer => {
                customer.id
                    ? dispatch(updateCustomerSuccess(savedCustomer))
                    : dispatch(createCustomerSuccess(savedCustomer));
            })
            .catch(error => {
                throw error;
            });
    };
}

export const handleResponse = async (response) => {
    if (response.ok) {
        return response.json()
    }

    const error = await response.text()
    throw new Error(error)
}

export const handleError = (error) => {
    console.error("Bir hata oluştu")
    throw error;
}

export const getCustomers = (categoryId) => {
    return function async(dispatch) {
        let url = "https://localhost:7207/api/Customer/list";
        if (categoryId) {
            url = url + "?categoryId=" + categoryId;
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getCustomersSuccess(result)));
    };
}
