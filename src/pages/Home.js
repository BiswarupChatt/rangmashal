import Index from "../components/home/Index"
import { Helmet } from "react-helmet"

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Rangmashal | One of the leading NGO in Kolkata</title>
            </Helmet>
            <Index />
        </>
    )
}