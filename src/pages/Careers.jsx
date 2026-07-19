import Index from "../components/careers/Index"
import { Helmet } from "react-helmet"
import { useEffect } from "react"

export default function Careers() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Careers With Rangmashal Foundation</title>
            </Helmet>
            <Index />
        </>
    )
}