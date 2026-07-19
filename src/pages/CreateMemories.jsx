import Index from "../components/createMemories/Index";
import { useEffect } from "react"
import { Helmet } from "react-helmet"

export default function CreateMemories() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Create Memories With Rangmashal</title>
            </Helmet>
            <Index />
        </>
    )
}