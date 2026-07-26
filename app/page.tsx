import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Capacity from "@/components/Capacity";
import References from "@/components/References";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Differentials />
        <Services />
        <Team />
        <Capacity />
        <References />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
