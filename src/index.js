// import ReactDOM  from "react-dom";

// import ReactComponent from "./components/UpdatingProp" ;
// import ReactComp from "./components/WorkingWithStyles";
// import Parchild from "./components/ParentChildComponent";
// import Cond from "./components/ConditionAndIteration";
// import itercom from "./components/IterationComponent";

// // ReactDOM.createRoot(document.getElementById("root")).render((
// //     <>
// //         <ReactComp></ReactComp>
// //     </>
// // ))

// var userName = "Sample"
// var userDesignation = "VP";
// var isManager = true

// var arr = [10, 20, 30]

// var employeeDetails = {
//     salary: 2000,
//     bonus: 1000
// }

// var userInfo = {
//     name: "Mayank",
//     designation: "Trainer",
//     salary: 20
// }

// var xyz = {...userInfo}; // creates duplicate using separated.

// ReactDOM.createRoot(document.getElementById("root")).render((
//     <>
//         {/* <ReactComp></ReactComp>

//         <ReactComponent userName={userName} isManager={isManager} userDesignation={userDesignation} employeeDetails={employeeDetails} arr={arr}></ReactComponent>

//         <section>
//         <Parchild {...userInfo}></Parchild>
//     </section>
//     <section>
//         <Cond {...userInfo}></Cond>
//     </section> */}

//         <itercom></itercom>
   
//     </>
// ))

// import ReactDOM  from "react-dom";
// import ReactComponent from "./components/IterationComponent";

// var userInfo = {
//     name: "Mayank",
//     designation: "Trainer",
//     salary: 20,
//     address: "A-8",
//     street: "Rohini",
//     city: "Banglore",
//     country: "India"
// }

// ReactDOM.createRoot(document.getElementById("root")).render((
//     <section>
//         <ReactComponent></ReactComponent>
//     </section>
// ))

import ReactDOM  from "react-dom";
// import ReactComponent from "./classes/UpdateClockComponent";
// import ReactComponent from "./hooks/StockDataComponent";
import ReactComponent from "./appHooks/employeeDetail"

var userInfo = {
    name: "Mayank",
    designation: "Trainer",
    salary: 20,
    address: "A-8",
    street: "Rohini",
    city: "Banglore",
    country: "India"
}
ReactDOM.createRoot(document.getElementById("root")).render(<ReactComponent></ReactComponent>)