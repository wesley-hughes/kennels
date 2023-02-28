import { useContext, useEffect } from "react"
import { Customer } from "./Customer"
import { CustomerContext } from "./CustomerProvider"


export const CustomerList = () => {
const { customers, getCustomers } = useContext(CustomerContext)
    
useEffect(() => {
getCustomers()
},[])



return (
    <section className="customers">
    {
      customers.map(customer => {
      return <Customer key={`customer--${customer.id}`} 
      customerObj={customer} 
      />
      })
    }
  </section>
)
}