import React, { createContext, useReducer, useContext } from "react";
import {GET_CURRENT_USER} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user,
                loading: false
            };
        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        users: [],
        currentUser: {
            username: "",
            password: ""
        },
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };