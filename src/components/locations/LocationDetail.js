import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"

export const LocationDetail = () => {
const { locations } = useContext(LocationContext)
const [ location, setLocation ] = useState({ animal:[], employee:[] })

const { locationId } = useParams();

useEffect(() => {
    const thisLocation = locations.find(location => location.id === parseInt(locationId)) || { animal:[], employee:[] }
    setLocation(thisLocation)
}, [locationId])

return (

<section className="locations">
    <h3 className="location__name">{ location.name }</h3>
{
    location.animals.map(animal => <div>{animal.name}</div> )
}
{
    location.employees.map(employee => <div>{employee.name}</div> )
}

</section>


)



}