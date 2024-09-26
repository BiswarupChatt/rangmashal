import Index from "../components/blogDetails/Index"
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet"

export default function BlogDetails() {
    const [title, setTitle] = useState('')

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>{`${title} || Rangmashal Blogs` || "Loading...."}</title>
            </Helmet>
            <Index setTitle={setTitle} />
        </>
    )
}