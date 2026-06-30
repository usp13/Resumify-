import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

const Protected = ({children}) => {

    const { loading , user } = useAuth()

    console.log("Protected Loading:", loading);
    console.log("Protected User:", user);


    if( loading ){

        return (
            <main>Loading..... </main>
        )
    }

    if( !user ){

        return <Navigate to={'/login'} />

    }

    return children 
        
    
}

export default Protected