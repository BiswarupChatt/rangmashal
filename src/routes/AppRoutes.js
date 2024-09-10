import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import PageNotFound from '../pages/PageNotFound'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}