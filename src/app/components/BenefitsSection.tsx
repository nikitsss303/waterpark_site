import { Users, Shield, Droplets, Armchair, Utensils, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Развлечения для всех возрастов",
    description: "От детских зон до экстремальных горок для взрослых"
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Команда профессиональных спасателей на страже вашего отдыха"
  },
  {
    icon: Droplets,
    title: "Чистая вода",
    description: "Современная система очистки и контроль качества воды"
  },
  {
    icon: Armchair,
    title: "Зоны отдыха",
    description: "Комфортные шезлонги и беседки для отдыха между купаниями"
  },
  {
    icon: Utensils,
    title: "Еда и напитки",
    description: "Кафе и бары с разнообразным меню на территории аквапарка"
  },
  {
    icon: MapPin,
    title: "Удобное расположение",
    description: "Легко добраться на транспорте, бесплатная парковка"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Что ты получишь в аквапарке</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 group hover:bg-cyan-50 p-4 rounded-lg transition-colors duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h4 className="mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}