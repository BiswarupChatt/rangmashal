import Index from "../components/blog/Index"
import { useEffect } from 'react';

export default function Blog() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Index />
        </>
    )
}