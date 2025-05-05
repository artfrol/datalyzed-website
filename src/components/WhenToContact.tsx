
const WhenToContact = () => {
  const painPoints = [
    "Вы не понимаете, что происходит в бизнесе: данные разбросаны по CRM, 1С и Excel.",
    "Хотите вырасти, но не уверены, какие действия приводят к результату.",
    "Руководители решают по наитию — и теряют деньги."
  ];

  return (
    <div className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Когда обращаться к нам?
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex p-6 border-l-4 border-brand-purple bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="ml-4">
                  <p className="text-lg text-gray-700">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenToContact;
