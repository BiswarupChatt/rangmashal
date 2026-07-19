import { Helmet } from "react-helmet"
import { useEffect } from "react"
import Index from "../components/elevate/Index"

export default function Elevate() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Rangmashal Elevate</title>
            </Helmet>
            <Index />
        </>
    )
}