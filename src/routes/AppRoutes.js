import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Projects from '../pages/Projects'
import PageNotFound from '../pages/PageNotFound'
import Resources from '../pages/Resources'
import Elevate from '../pages/Elevate'
import Careers from '../pages/Careers'
import CreateMemories from '../pages/CreateMemories'
import CSR from '../pages/CSR'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/who-we-are/about' element={<AboutUs />} />
            <Route path='/who-we-are/resources' element={<Resources />} />

            <Route path='/what-we-do/elevate' element={<Elevate />} />
            <Route path='/what-we-do/create-memories' element={<CreateMemories />} />
            <Route path='/what-we-do/past-projects' element={<Projects />} />

            <Route path='/get-involved/careers' element={<Careers />} />
            <Route path='/get-involved/csr' element={<CSR />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}