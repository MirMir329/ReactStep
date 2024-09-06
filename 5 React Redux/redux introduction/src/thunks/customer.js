import {getCostumersAction} from "../store/customerReducer.js"

const url = "https://jsonplaceholder.typicode.com/users";

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                dispatch(getCostumersAction(json))
            })
                
    };
};