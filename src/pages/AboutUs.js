import Index from "../components/aboutUs/Index"
import { Helmet } from "react-helmet"
import { useEffect } from 'react';



export default function AboutUs() {

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