import {useEffect, useState}from "react";
import Employee from "./Employee";
function EmployeeList(){

    const [employess,setEmployess] = useState([{
     name:"Robin Axelstorm",
     email: "robboy_25@hotmail.com",
     phone: "073412312321", 
     skills: "C#, java,html"
    , avatar: "https://i.imgur.com/t9HFQvX.png"
},
{
    name:"test",
    email:"testa@hotmail.com",
    phone:"053454325345",
    skills: "Lite allt?",
    avatar:"https://i.imgur.com/Q9qFt3m.png",
},
]);
    function handleAddNewEmp(){
        setEmployess((prevState)=>{
            return [
                ...prevState,
                {
                name:"Kajsa Anka",
                email:"Kajsa@ankeborg.ak",
                phone: "05435322222233",
                skills:"None",
                avatar:"https://i.imgur.com/ebHfuth.png",
            },
        ];
        });
    }
    return <div>
        <h3>EmployeeList </h3>
        <button onClick={handleAddNewEmp}>Add employee</button>
        {employess.map((employee)=>(
        <Employee EmployeeData={employee} />
        
        ))}
        </div>
}


export default EmployeeList;