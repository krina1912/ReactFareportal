import { useState } from "react";

export default function UpdateCounter() {
    var count = 1;
    
    function incrementCounter() {
        count = count + 1;
        console.log(count)
    }
    
    return (
        <div>
            <h1>The Counter is {count}</h1>
            <input type="button" onClick={incrementCounter} value="Increment" />
        </div>
    )
}