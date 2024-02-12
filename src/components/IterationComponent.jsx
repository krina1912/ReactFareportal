export default function IterationComponent() {
    var employeeNames = [{
        name: "Mayank",
        age: 30,
        designation: "Trainer"
    }, {
        name: "Anshul",
        age: 37,
        designation: "Trainer"
    }, {
        name: "Aniket",
        age: 31,
        designation: "Trainer"
    }, {
        name: "Meha",
        age: 35,
        designation: "Trainer"
    }, {
        name: "Aniket",
        age: 40,
        designation: "Trainer"
    }];
    
    function employeeNameJsx() {
        return employeeNames.map((employee) => {
            return <h3>Employee Name is: {employee} </h3>
        });
    }
    
    return (
        <div>
            <h1>Total Number of Employees: {employeeNames.length}</h1>
            <h2>Following is the List of Employees in the company: </h2><hr/>
            { employeeNameJsx() }
        </div>
    )
}