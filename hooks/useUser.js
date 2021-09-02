import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../firebase/client";
import Router from "next/router";

export default function useUser(){
    const [user,setUser] = useState(undefined);

    useEffect(()=>{
        onAuthStateChanged(setUser)
    },[])

    useEffect(()=>{
        user === null && Router.push("/");
    },[user])

    return {user}
}