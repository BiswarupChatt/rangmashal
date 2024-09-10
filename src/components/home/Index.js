import { useEffect } from "react"
import About from "./About"
import Header from "./Header"
import Partners from "./Partners"
import Milestones from "./Milestones"
export default function Index() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Milestones />
            <About />
            <Partners />
        </>
    )
}