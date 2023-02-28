import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"


export const EmployeeList = () => {
const { employees, getEmployees } = useContext(EmployeeContext)
    
useEffect(() => {
getEmployees()
},[])



return (
    <section className="employees">
     <div className="employees">
                {
                  employees.map(employee => <><Link key={`employee--${employee.id}`}
                  to={`/employees/detail/${employee.id}`}>
                  { employee.name }
                        </Link>
                        <Employee
                        employeeObj={employee} /></>
                    )
                }
            </div>

  </section>
)
}