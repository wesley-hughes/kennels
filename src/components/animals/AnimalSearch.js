import { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"


export const AnimalSearch = ({setterFunction}) => {
  const { setSearchTerms } = useContext(AnimalContext)

  return (
    <>
       <input 
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }   
        type="text" placeholder="Enter search terms" />
    </>
  )
}