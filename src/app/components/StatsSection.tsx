import { Calendar, Users, Waves, Sparkles, TrendingUp, Clock, Shield, Heart } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: "15 лет работы",
    description: "Крупнейший аквапарк в Беларуси"
  },
  {
    icon: Waves,
    value: "25+ аттракционов",
    description: "Горки для детей и взрослых"
  },
  {
    icon: Waves,
    value: "5 бассейнов",
    description: "Волновой, спортивный, детский и релакс-зоны"
  },
  {
    icon: Sparkles,
    value: "SPA-зона",
    description: "Сауны, хаммам, джакузи"
  },
  {
    icon: Users,
    value: "1 000 000+ гостей",
    description: "Посетили аквапарк за всё время"
  },
  {
    icon: Clock,
    value: "Круглый год",
    description: "Комфортная температура воды и воздуха"
  },
  {
    icon: Heart,
    value: "Семейный формат",
    description: "Зоны для детей от 3 лет"
  },
  {
    icon: Shield,
    value: "Безопасность",
    description: "Профессиональные спасатели и контроль"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Waterpark.by в цифрах</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h4 className="mb-2 text-cyan-600">{stat.value}</h4>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}