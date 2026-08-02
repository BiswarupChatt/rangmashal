import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../global/Loader";

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Projects = lazy(() => import("../pages/Projects"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Resources = lazy(() => import("../pages/Resources"));
const Careers = lazy(() => import("../pages/Careers"));
const CSR = lazy(() => import("../pages/CSR"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const Terms = lazy(() => import("../pages/Terms"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/who-we-are/about" element={<AboutUs />} />
        <Route path="/who-we-are/resources" element={<Resources />} />

        <Route path="/what-we-do" element={<Projects />} />
        <Route path="/what-we-do/past-projects" element={<Projects />} />

        <Route path="/get-involved/careers" element={<Careers />} />
        <Route path="/get-involved/csr" element={<CSR />} />

        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/blog/:id" element={<BlogDetails />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<Terms />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
