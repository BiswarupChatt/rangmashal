import Index from "../components/resources/Index"
import { Helmet } from "react-helmet"
import { useEffect } from "react"

export default function Resources() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Resources | Legal and Financial of Rangmashal Foundation</title>
            </Helmet>
            <Index />
        </>
    )
}