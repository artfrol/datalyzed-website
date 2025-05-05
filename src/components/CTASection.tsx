
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-brand-blue to-brand-purple text-white section-padding py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-white">
          Готовы превратить данные в прибыль?
        </h2>
        <Button 
          className="bg-white text-brand-purple hover:bg-gray-100 text-sm md:text-lg px-4 md:px-8 py-4 md:py-6 w-full sm:w-auto"
          onClick={() => window.open("https://calendly.com/artfrol-af/artem-frolov", "_blank")}
        >
          Записаться на бесплатную консультацию
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
