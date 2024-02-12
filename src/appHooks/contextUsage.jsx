import { useState } from "react";
export default function GrandParents() {
    
    var [details, setDetails] = useState({
        city: "Haryana",
        surName: "Gupta"
    });
    
    return (
        <div>
            <h1>This is Grand Parents</h1><hr />
            <Parents details={details} setDetails={setDetails}></Parents>
        </div>
    )
}

function Parents(props) {
    return (
        <div>
            <h2>This is Parents</h2><hr />
            <Childrens details={props.details} setDetails={props.setDetails} ></Childrens>
        </div>
    )
}

function Childrens(props) {
    return (
        <div>
            <h3>This is Children</h3><hr />
            <GrandChildrens details={props.details} setDetails={props.setDetails}></GrandChildrens>
        </div>
    )
}

function GrandChildrens(props) {
    return (
        <div>
            <h4>This is Grand Children</h4><hr />
            <GrandGrandChildrens details={props.details} setDetails={props.setDetails}></GrandGrandChildrens>
        </div>
    )
}

function GrandGrandChildrens(props) {
    return (
        <div>
            <h5>This is Grand Children</h5>
            <h6>My City is {props.details.city}</h6>
        </div>
    )
}