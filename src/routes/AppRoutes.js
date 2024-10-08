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
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import SharodiyarPorosh from '../pages/SharodiyarPorosh'
import HealthBloodDonation from '../pages/HealthBloodDonation'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/who-we-are/about' element={<AboutUs />} />
            <Route path='/who-we-are/resources' element={<Resources />} />

            <Route path='/what-we-do/elevate' element={<Elevate />} />
            <Route path='/what-we-do/create-memories' element={<CreateMemories />} />
            <Route path='/what-we-do/sharodiyar-porosh' element={<SharodiyarPorosh />} />
            <Route path='/what-we-do/health-blood-donation' element={<HealthBloodDonation />} />
            <Route path='/what-we-do/past-projects' element={<Projects />} />

            <Route path='/get-involved/careers' element={<Careers />} />
            <Route path='/get-involved/csr' element={<CSR />} />

            <Route path='/resources/blog' element={<Blog />} />
            <Route path='/resources/blog/:id' element={<BlogDetails />} />

            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}