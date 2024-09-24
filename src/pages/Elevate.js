import { Helmet } from "react-helmet"
import Index from "../components/elevate/Index"
import { useEffect } from "react"

export default function Elevate() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>About Rangmashal Foundation</title>
            </Helmet>
            <Index />
        </>
    )
}