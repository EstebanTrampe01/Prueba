import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import BusinessContinuity from "@/components/BusinessContinuity";
import Methodology from "@/components/Methodology";
import Integrations from "@/components/Integrations";
import Footer from "@/components/Footer";
import Excellence from "@/components/Excellence";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function Index() {
  const { content, loading, error } = useSiteContent();

  return (
    <div className="min-h-screen">
  <Header data={content?.header} />
      <main>
        <Hero data={content?.hero} />
        <Services data={content?.services} />
  <Benefits data={content?.benefitsSection} />
  <BusinessContinuity data={content?.continuity} />
        <Methodology />
  <Integrations integrations={content?.integrations} certifications={content?.certifications} />
  <Excellence data={content?.excellence} />
      </main>
      <Footer data={content?.footer} />
    </div>
  );
}
