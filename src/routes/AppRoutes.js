import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Projects from '../pages/Projects'
import PageNotFound from '../pages/PageNotFound'
import Resources from '../pages/Resources'
import Elevate from '../pages/Elevate'
import Careers from '../pages/Careers'
import CreateMemories from '../pages/CreateMemories'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/create-memories' element={<CreateMemories />} />
            <Route path='/programmes/elevate' element={<Elevate />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}