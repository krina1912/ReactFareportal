// Presentational Component

export default function UpdatingProps(props) {
    
    debugger;
    
    props.employeeDetails.salary = 10000;
    props.employeeDetails.bonus = 10000;
    
    props.arr.push(10);
    
    // Props are read Only / Non Mutable / Constants
    // props.userName = "Mayank Gupta"
    
    return (
        <div>
            <h1>Lets try to update props.... {props.employeeDetails.salary}  {props.employeeDetails.bonus} {props.arr.length}</h1>
        </div>
    )
}