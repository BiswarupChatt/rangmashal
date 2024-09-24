import Index from "../components/blogDetails/Index"
import { useEffect } from 'react';

export default function BlogDetails() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Index />
        </>
    )
}