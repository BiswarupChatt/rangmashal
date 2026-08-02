import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Index from "./components/PrivacyPolicyIndex";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Rangmashal Foundation | Privacy Policy</title>
      </Helmet>
      <Index />
    </>
  );
}
