const ConditionAndIteration = (props) => {
    var name = "Mayank";
    // Scope 1
    function getDetails() {
        
        function three() {
            debugger;
            alert(name)
        }
        three();
        
        // Scope 2 (Inner Scope for ConditionAndIteration function) = Closure in JavaScript
        debugger;
        if (props.city == "Delhi" || props.city == "Mumbai") {
            return <h2>Welcome as Senior Developer in Delhi NCR</h2>
        } else if (props.city == "Banglore") {
            return <h2>Welcome as Senior Developer in {props.city}</h2>
        }
        
    }

    return (
        <div>
            <h1>The User Name is: {props.name}</h1>
            {(props.salary >= 20) && (
                <div>
                    { getDetails() }
                    <h3>Your designation is { props.designation }</h3>
                </div>
            )}
            { props.salary < 20  && <h2>Welcome as Junior Developer</h2> }
        </div>
    )
}

export default ConditionAndIteration;
