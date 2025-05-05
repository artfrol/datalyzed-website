
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-brand-blue to-brand-purple text-white section-padding">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Готовы превратить данные в прибыль?
        </h2>
        <Button className="bg-white text-brand-purple hover:bg-gray-100 text-base md:text-lg px-8 py-6">
          Записаться на бесплатную консультацию
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
