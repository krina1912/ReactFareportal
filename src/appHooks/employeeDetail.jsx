// https://prod.liveshare.vsengsaas.visualstudio.com/join?29D7F396E6672D97350535316C0C3CEE960D

import { useState, useEffect } from "react";
import AddEmployee from "./AddEmployee";
import EmployeeInfo from "./EmployeeInfo";
import FilterEmployeeList from "./FilterEmployeeList";
import Axios from "axios";

export default function EmployeeDetails() {
    
    var [employeeList, setEmployeeList] = useState([]);
    var [filteredList, setFilteredList] = useState([]);
    
    useEffect(() => {
        updateEmployeeOnScreen();
    }, [])
    
    function updateEmployeeOnScreen() {
        Axios.get("http://localhost:3000/employees").then((response) => {
            setEmployeeList(response.data)
            setFilteredList(response.data)
        })
    }
    
    function deleteEmployee(employeeId) {
        Axios.delete("http://localhost:3000/employees/" + employeeId).then(() => {
            alert("Employee with " + employeeId + " got deleted...");
            updateEmployeeOnScreen();
        });
    }
    
    function filterEmployee(filterText) {
        var filteredList = [];
        if (filterText == "") {
            filteredList = employeeList;
        } else {
            filteredList = employeeList.filter((employee) => {
                return employee.name.indexOf(filterText) > -1;
            })
        }
        setFilteredList(filteredList);
    }
    
    return (
        <>
            <h1>The List of Employee ({employeeList.length}) is given Below: </h1>
            <FilterEmployeeList filterEmployee={filterEmployee}></FilterEmployeeList>
            <AddEmployee updateEmployeeOnScreen={updateEmployeeOnScreen}></AddEmployee>
            {filteredList.map((employee) => {
                return (
                    <EmployeeInfo {...employee} deleteEmployee={deleteEmployee}></EmployeeInfo>
                )
            })}
        </>
    )
}