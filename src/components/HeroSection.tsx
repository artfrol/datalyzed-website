
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-brand-light-blue/10 to-white">
      <div className="absolute inset-0 bg-data-pattern opacity-30"></div>
      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-36 md:pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Управляйте бизнесом прозрачно</span> с помощью инструментов BI аналитики
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto">
            Большинство решений в бизнесе принимаются наугад. Мы внедряем аналитику, которая показывает правду: где бизнес теряет деньги, что приносит прибыль, и куда идти дальше.
          </p>
          <div className="flex justify-center">
            <Button className="text-base md:text-lg px-8 py-6 bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 transition-all">
              Записаться на бесплатную консультацию
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
