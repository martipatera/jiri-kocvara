"use client"  //toto vsechno musim udelat kvuli nextJS, v normalnim reactu to funguje jinak

import { store } from "./store";
import { Provider } from "react-redux";

 function ReduxProvider({children}){
    return <Provider store={store}>{children}</Provider> //delam si jakoby vlastniho providera protoze klasicke <Provider store={store}> v nextJS nefunguje
}

export default ReduxProvider