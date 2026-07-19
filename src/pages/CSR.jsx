import Index from "../components/csr/Index"
import { useEffect } from "react"
import { Helmet } from "react-helmet"

export default function CSR() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Corporate Social Responsibility With Rangmashal</title>
            </Helmet>
            <Index />
        </>
    )
}