import Index from "../components/healthBloodDonation/Index"
import { Helmet } from "react-helmet"
import { useEffect } from "react"


export default function HealthBloodDonation() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Blood Donation & Health Camp Organized by Rangmashal Foundation</title>
            </Helmet>
            <Index />
        </>
    )
}