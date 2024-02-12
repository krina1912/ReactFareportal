import { useState, UseEffect, useRef, useEffect } from "react";

export default function OtherHooksComponent() {

    var [userName, setUserName] = useState("");
    var elementRef = useRef();
    
    var customData = useRef({
        userName: "Krina",
        useAge: 10
    });
    
    useEffect(() => {
        elementRef.current.focus();
    }, []);
    
    function updateData() {
        setUserName(elementRef.current.value)
        elementRef.current.style.color = "red";
        elementRef.current.onmouseover = function() { alert("Hi")}
    }
    
    
    function updateRefData() {
        debugger;
        customData.current = {
            userName: "Anshul",
            useAge: 10
        };
    }
    
    return (
        <>
            <h1>User Name is {userName} {customData.current.userName}</h1>
            <input type="text" ref={elementRef} onChange={updateData} />
            <input type="button" value="Change Ref Data" onClick={updateRefData} />
        </>
    )

}