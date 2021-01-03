import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //Preparing the data layer

//Higher Orfer component, children refers to App in home.js
//initialState what datalayer looks like when app is loaded
//reducer listens to changes for all different datalayer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
