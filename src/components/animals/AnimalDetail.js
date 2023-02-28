import { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
// import "./Animal.css"
import { useNavigate, useParams } from "react-router-dom"

export const AnimalDetail = () => {
    const { animals } = useContext(AnimalContext)
    const [animal, setAnimal] = useState({ location: {}, customer: {} })
    const { releaseAnimal } = useContext(AnimalContext)
    const navigate = useNavigate()

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { animalId } = useParams();

    const handleRelease = () => {
        releaseAnimal(animal.id)
          .then(() => {
            navigate("/animals")
          })
      }

    useEffect(() => {
        const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }
        setAnimal(thisAnimal)
    }, [animalId])

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">{animal.location.name}</div>
            <div className="animal__owner">{animal.customer.name}</div>
            <button onClick={() => {
                navigate(`/animals/edit/${animal.id}`)
            }}>Edit</button>
            <button onClick={handleRelease}>Release Animal</button>
        </section>
    )
}