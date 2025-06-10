import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import PainPoints from "../components/PainPoints";
import Features from "../components/Features";
import AIIntegration from "../components/AIIntegration";
import MarcsIntro from "../components/MarcsIntro";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="min-h-screen">
        <Hero />
        <Testimonial />
        <PainPoints />
        <Features />
        <AIIntegration />
        <MarcsIntro />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;