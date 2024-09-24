import Index from "../components/createMemories/Index";
import { useEffect } from "react"

export default function CreateMemories() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <Index />
    )
}