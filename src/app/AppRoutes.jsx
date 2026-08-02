import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../shared/components/Loader";

// Lazy-loaded components
const Home = lazy(() => import("../features/home/HomePage"));
const AboutUs = lazy(() => import("../features/about/AboutPage"));
const Projects = lazy(() => import("../features/initiatives/InitiativesPage"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const Resources = lazy(() => import("../features/resources/ResourcesPage"));
const Careers = lazy(() => import("../features/careers/CareersPage"));
const CSR = lazy(() => import("../features/csr/CsrPage"));
const Blog = lazy(() => import("../features/blog/BlogPage"));
const BlogDetails = lazy(() => import("../features/blog/BlogDetailsPage"));
const PrivacyPolicy = lazy(() => import("../features/legal/PrivacyPolicyPage"));
const Terms = lazy(() => import("../features/legal/TermsPage"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />

        <Route path="/our-initiatives" element={<Projects />} />
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
