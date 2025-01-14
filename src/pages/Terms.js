import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Index from "../components/terms/Index";

export default function Terms() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Rangmashal Foundation | Terms and Conditions</title>
      </Helmet>
      <Index />
    </>
  );
}
