import { useEffect } from "react"
import About from "./AboutUs"
import Mission from "./Mission"
import Vision from "./Vision"
import Members from "./Members"
import RoadMap from "./RoadMap"

export default function Index() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <About />
            <Vision />
            <Mission />
            <RoadMap />
            <Members />
        </>
    )
}