import Index from "../components/home/Index"
import { Helmet } from "react-helmet"
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Rangmashal | Best NGO for Children and Women in Kolkata India</title>
            </Helmet>
            <Index />
        </>
    )
}