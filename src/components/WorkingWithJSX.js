import React from "react";

// Multi Line JSX, React.createElement, Creating First React Component / Componentizing our application.

export default function FirstComponent() {
    return React.createElement("div", {}, [
        React.createElement("div", {}, 
            React.createElement("h1", {}, "This is The Main Content Without JSX")
        ), React.createElement("div", {}, 
            React.createElement("p", {}, React.createElement("h2", {}, "This is some other content"))
        )
    ])
}

export function FirstComponentEquivalant() {
    return (
        <div className="sample" id="some_id" data-info="Mayank" >
            <div>
                <h1>This is Main Content</h1>
            </div>

            <div>
                <p>
                    <h2>Welcome Back...</h2>
                </p>
            </div>
        </div>
    )
}
