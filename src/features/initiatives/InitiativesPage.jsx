import Index from "./components/Index"
import { Helmet } from "react-helmet"
import { useEffect } from "react"



export default function Projects() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Our Journey of Impact | Rangmashal Foundation</title>
                <meta
                    name="description"
                    content="Explore Rangmashal Foundation initiatives across COVID-19 relief, Durga Puja outreach, disaster rehabilitation, education, healthcare, social welfare, CSR partnerships, and fundraising."
                />
            </Helmet>
            <Index />
        </>
    )
}
