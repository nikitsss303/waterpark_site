import { Calendar, CreditCard, MapPin, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: "Выбери дату и формат посещения",
    number: 1
  },
  {
    icon: CreditCard,
    title: "Купи билет онлайн",
    number: 2
  },
  {
    icon: MapPin,
    title: "Приходи в выбранный день",
    number: 3
  },
  {
    icon: PartyPopper,
    title: "Отдыхай без очередей",
    number: 4
  }
];

export function ProcessSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Как попасть в Waterpark.by</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4 relative">
                  <step.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-sm text-cyan-600">{step.number}</span>
                  </div>
                </div>
                <p className="text-gray-700">{step.title}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-cyan-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
