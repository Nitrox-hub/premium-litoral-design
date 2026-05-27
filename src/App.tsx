import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Apartments } from "@/components/site/Apartments";
import { Services } from "@/components/site/Services";
import { Buildings } from "@/components/site/Buildings";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ConciergeChat } from "@/components/site/ConciergeChat";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Apartments />
        <Services />
        <Buildings />
        <About />
        <Contact />
      </main>
      <Footer />
      <ConciergeChat />
    </div>
  );
}
