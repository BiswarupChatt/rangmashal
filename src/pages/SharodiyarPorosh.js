import Index from "../components/sharodiyarPorosh/Index"
import { useEffect } from "react"
import { Helmet } from "react-helmet"

export default function SharodiyarPorosh() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
        <Helmet>
                <title>Sharodiya Porosh</title>
            </Helmet>
            <Index />
        </>
    )
}