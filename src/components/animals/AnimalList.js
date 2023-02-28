import { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"

import { Link, useNavigate } from "react-router-dom"
import { AnimalDetail } from "./AnimalDetail"


export const AnimalList = ({searchTermState }) => {
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)
    const navigate = useNavigate()
    const [ filteredAnimals, setFiltered ] = useState([])
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    useEffect(() => {
        if (searchTermState !== "") {
          // If the search field is not blank, display matching animals
          const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTermState))
          setFiltered(subset)
        } else {
          // If the search field is blank, display all animals
          setFiltered(animals)
        }
      }, [searchTermState, animals])
    
    return (
        <>
  
            <h1>Animals</h1>

            <button onClick={() => navigate("/animals/create")}>
                Make Reservation
            </button>

            <div className="animals">
            {
                 filteredAnimals.map(animal => <><Link key={`animal--${animal.id}`}
                 to={`/animals/detail/${animal.id}`}>
                 { animal.name }
                       </Link>
                       <AnimalDetail
                       animalObj={animal} /></>
                   )
             }
            </div>

        </>
    )
}



{/* <div className="animals">
{
  animals.map(animal => <><Link key={`animal--${animal.id}`}
  to={`/animals/detail/${animal.id}`}>
  { animal.name }
        </Link>
        <Animal 
        animalObj={animal} /></>
    )
}
</div> */}








// import { useContext, useEffect } from "react"
// import { Animal } from "./Animal"
// import { AnimalContext } from "./AnimalProvider"
// import { useNavigate } from 'react-router-dom'

// export const AnimalList = () => {
//   const { animals, getAnimals } = useContext(AnimalContext)
//   const navigate = useNavigate()

//   useEffect(() => {
    
//     getAnimals()
//   }, [])


//   return (
//     <section className="animals">
//       <h2>Animals</h2>
//       <button onClick={
//         () => navigate("/animals/create")
//       }>
//             Add Animal
//       </button>
//       <div className="animals"></div>
//       {
//         animals.map(animal => {
//           return <Animal key={`animal--${animal.id}`} 
//           animalObj={animal}
//           />
//         })
//       }
//     </section>
//   )
// }