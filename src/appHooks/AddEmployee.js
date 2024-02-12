import { useState, useEffect } from "react";
import Axios from "axios";

export default function AddEmployee(props) {
    
     var [employee, setEmployee] = useState({
        userName: "",
        userId: ""
     });
    
    function addEmployee() {
        debugger;
        Axios.post("http://localhost:3000/employees", {
            "id": employee.userId,
            "createdAt": "Today",
            "name": employee.userName,
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/g3d/128.jpg"
        }).then(() => {
            alert("Employee is added...");
            Axios.get("http://localhost:3000/employees").then((response) => {
                props.updateEmployeeOnScreen();
            })
        }, () => {
            alert("Employee is not added...")
        })
        alert(JSON.stringify(employee));
    }
    
    function changeInput(event) {
        setEmployee({
            ...employee,
            [event.target.id]: event.target.value
        })
    }
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                     <div>
                        Enter Name: <input id="userName" type="text" onChange={changeInput} value={employee.userName} /><br /><br />
                        Enter Id: <input id="userId" type="text" onChange={changeInput} value={employee.userId} /><br /><br />
                        <input type="button" value="Add Employee" onClick={addEmployee} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}