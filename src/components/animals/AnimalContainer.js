import { useState } from "react"
import { AnimalList } from "./AnimalList"
import { AnimalSearch } from "./AnimalSearch"



export const AnimalContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
    <AnimalSearch setterFunction={setSearchTerms} />
	<AnimalList searchTermState={searchTerms} />
    </>
}