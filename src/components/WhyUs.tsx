
const WhyUs = () => {
  const advantages = [
    {
      title: "Фиксированная цена",
      description: "Заранее знаете, сколько платите."
    },
    {
      title: "Глубокое погружение в ваш бизнес",
      description: "Настраиваем аналитику под задачи вашей компании."
    },
    {
      title: "Экспертиза в современных BI-инструментах",
      description: "Используем передовые технологии для достижения лучших результатов."
    },
    {
      title: "Опыт работы с лидерами рынка",
      description: "В компании работают эксперты из Яндекс, Т-Банк и других."
    }
  ];

  return (
    <div className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Почему мы?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-brand-purple"
            >
              <h3 className="text-lg font-bold mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
