import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
        </Routes>
    )
}