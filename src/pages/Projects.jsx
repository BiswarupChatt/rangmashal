import Index from "../components/projects/Index"
import { Helmet } from "react-helmet"
import { useEffect } from "react"



export default function Projects() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Projects of Rangmashal Foundation</title>
            </Helmet>
            <Index />
        </>
    )
}