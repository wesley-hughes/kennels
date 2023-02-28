import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { AnimalContainer } from "./animals/AnimalContainer"
import { AnimalDetail } from "./animals/AnimalDetail"
import { AnimalForm } from "./animals/AnimalForm"
import { AnimalProvider } from "./animals/AnimalProvider"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeDetail } from "./employees/EmployeeDetail"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationDetail } from "./locations/LocationDetail"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

export const ApplicationViews = () => {
    return <>

        <LocationProvider>
            <AnimalProvider>
                <CustomerProvider>
                    <EmployeeProvider>
                        <Routes>
                            <Route path="/" element={<>
                                <Outlet />
                            </>}>
                                <Route path="locations" element={<LocationList />} />
                                <Route path="/locations/detail/:locationId" element={<LocationDetail />} />
                                <Route path="animals" element={ <AnimalContainer /> } />
                                <Route path="/animals/detail/:animalId" element={<AnimalDetail />} />
                                <Route path="/animals/edit/:animalId" element={<AnimalForm />} />
                                <Route path="animals/create" element={<AnimalForm />} />
                                <Route path="customers" element={<CustomerList />} />
                                <Route path="employees" element={<EmployeeList />} />
                                <Route path="/employees/detail/:employeeId" element={<EmployeeDetail />} />
                            </Route>
                        </Routes>
                    </EmployeeProvider>
                </CustomerProvider>
            </AnimalProvider>
        </LocationProvider>

    </>
}



