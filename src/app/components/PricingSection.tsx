import { Button } from './ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Стандарт",
    features: [
      "Все горки и бассейны",
      "Детские зоны",
      "3 часа"
    ],
    price: "от 35 BYN",
    popular: false
  },
  {
    name: "Семейный",
    features: [
      "Взрослые + дети",
      "Все зоны",
      "Выгодная цена",
      "4 часа"
    ],
    price: "от 90 BYN",
    popular: true
  },
  {
    name: "День без ограничений",
    features: [
      "Полный день",
      "Все аттракционы",
      "SPA-зона"
    ],
    price: "от 55 BYN",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Выбери подходящий билет</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-lg border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-600 shadow-xl md:scale-105' 
                  : 'border-gray-200 shadow-md hover:shadow-lg hover:border-cyan-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white px-4 py-1 rounded-full text-sm">
                  Популярный
                </div>
              )}
              
              <h3 className="text-center mb-6">{plan.name}</h3>
              
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mb-6">
                <p className="text-3xl text-cyan-600">{plan.price}</p>
              </div>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Купить билет
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}