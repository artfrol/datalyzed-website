
import { ChartBar, Database, FileText, Search, TrendingUp } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Проводим бесплатную консультацию",
      description: "Определяем цели и ключевые метрики, которые помогут отслеживать результаты.",
      icon: Search
    },
    {
      id: 2,
      title: "Собираем данные в одном месте",
      description: "Интегрируем CRM, 1С, ERP, Excel и другие источники.",
      icon: Database
    },
    {
      id: 3,
      title: "Настраиваем понятные дашборды",
      description: "Четко видно, что работает, а что нет. Отчёты, графики, прогнозы.",
      icon: ChartBar
    },
    {
      id: 4,
      title: "Помогаем принимать решения",
      description: "Рассказываем, на что смотреть и какие выводы можно сделать.",
      icon: FileText
    },
    {
      id: 5,
      title: "Сопровождаем вас постоянно",
      description: "BI-эксперт на связи. Отвечает на вопросы, дорабатывает систему.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Процесс внедрения аналитики
        </h2>
        <div className="max-w-5xl mx-auto mt-12">
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col md:flex-row items-start md:items-center animate-fade-in" style={{animationDelay: `${step.id * 0.1}s`}}>
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white">
                      <span className="font-bold">{step.id}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="flex items-center mb-2">
                      <Icon className="h-5 w-5 mr-2 text-brand-purple" />
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
