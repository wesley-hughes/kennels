import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Location } from "./Location"
import { LocationContext } from "./LocationProvider"


export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {

    getLocations()
  }, [])


  return ( <>
    <section className="locations">
      {
        locations.map(location => <> <Link key={`location--${location.id}`}
            to={`/locations/detail/${location.id}`} >
            {location.name} 
          </Link>
          <div className="numberEmployees">Employees: { location.employees.length }</div>
    <div className="numberAnimals">Guests: { location.animals.length }</div>
          <Location key={`location--${location.id}`}
            locationObj={location}
          /></>
        )
      }
    </section>
  </>
  )
}
