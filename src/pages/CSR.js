import Index from "../components/csr/Index"
import { useEffect } from "react"

export default function CSR() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <Index />
    )
}