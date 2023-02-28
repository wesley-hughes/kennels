import { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useParams } from "react-router-dom"

export const EmployeeDetail = () => {
    const { employees } = useContext(EmployeeContext)
    const [ employee, setEmployee ] = useState({ location:{} })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { employeeId } = useParams();


    useEffect(() => {
        const thisEmployee = employees.find(employee => employee.id === parseInt(employeeId)) || { location: {} }
        setEmployee(thisEmployee)
    }, [employeeId])

    return (
    <section className="employee">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="employee__location">Location: { employee.location.name }</div>
        {/* <div className="employee__address">Address: { employee.location.address }</div> */}
    </section>
    )
}