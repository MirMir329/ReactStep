const defaultState = {
    customers: [{name: "Anton", id: 1}],
    select_list: [{text:"Сначало новые", value:"new"}, {text:"Сначало старые", value:"old"}]
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const DELETE_CUSTOMER = "DELETE_CUSTOMER"
const GET_CUSTOMERS = "GET_CUSTOMERS"

export const customerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_CUSTOMER":
            return {...state, customers: [...state.customers, action.payload] };
        case "DELETE_CUSTOMER":
            return {...state, customers: state.customers.filter((customer) => customer.id !== action.payload)}
        case "GET_CUSTOMERS":
            return {...state, customers: [...state.customers, ...action.payload] };
        default:
            return state;
    }
}

export const getCostumersAction = (payload) => ({
    type: GET_CUSTOMERS,
    payload,
})

export const addCustomerAction = (payload) => ({
    type: ADD_CUSTOMER,
    payload,
})

export const removeCustomerAction = (payload) => ({
    type: DELETE_CUSTOMER,
    payload,
})