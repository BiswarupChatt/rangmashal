import { useEffect } from "react"
import About from "./About"
import Header from "./Header"
import Milestones from "./Milestones"
import Testimonials from "./Testimonials"


export default function Index() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Milestones />
            <About />
            <Testimonials />
        </>
    )
}