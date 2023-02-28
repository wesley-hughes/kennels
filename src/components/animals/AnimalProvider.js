import { useState, createContext } from "react"

export const AnimalContext = createContext()

export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id")
        .then(res => res.json())
        .then(setAnimals)
    }

    const getAnimalById = (animalId) => {
        return fetch(`http://localhost:8088/animals/${animalId}`)
        .then(res => res.json())
        }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(animal)
        })
          .then(getAnimals)
      }

      const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }


    return (
        <AnimalContext.Provider value={{
            animals, addAnimal, releaseAnimal, getAnimalById, getAnimals, updateAnimal, searchTerms, setSearchTerms
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}