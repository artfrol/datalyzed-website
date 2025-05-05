
import HeroSection from "@/components/HeroSection";
import WhenToContact from "@/components/WhenToContact";
import ProcessSteps from "@/components/ProcessSteps";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl md:text-2xl font-bold">
              <span className="gradient-text">Datalyzed</span>
            </div>
            <div>
              <a href="#contact" className="text-brand-purple hover:text-brand-blue font-medium transition-colors">
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <WhenToContact />
        <ProcessSteps />
        <WhyUs />
        <div id="contact">
          <CTASection />
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-xl">Datalyzed</span>
              <p className="text-gray-400 mt-1">BI аналитика для вашего бизнеса</p>
            </div>
            <div className="text-gray-400">
              © {new Date().getFullYear()} Datalyzed. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
