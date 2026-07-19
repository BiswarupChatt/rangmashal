import Index from "../components/blog/Index"
import { useEffect } from 'react';
import { Helmet } from "react-helmet"

export default function Blog() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Read our Latest Blogs || Rangmashal Blogs</title>
            </Helmet>
            <Index />
        </>
    )
}