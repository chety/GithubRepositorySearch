import React from "react";
import "./style.css"

export function Loading({message = "Loading... Please Wait"}) {
    return (<div className={"loading-container"}>
        <strong>{message}</strong>
    </div>)
}