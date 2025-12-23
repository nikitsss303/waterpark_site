import { Shield, Wrench } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: "Профессиональные спасатели",
    description: "Наша команда спасателей прошла специальное обучение и всегда готова прийти на помощь. Безопасность гостей — наш главный приоритет.",
    image: "https://images.unsplash.com/photo-1628676348963-f88c671333f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHZhY2F0aW9ufGVufDF8fHx8MTc2NjQ2MTYyMHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Wrench,
    title: "Современное оборудование",
    description: "Все аттракционы проходят регулярное техническое обслуживание. Мы используем только сертифицированное оборудование от ведущих производителей.",
    image: "https://images.unsplash.com/photo-1761124469507-424d33a0b4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHBhcmslMjBwb29sJTIwcmVzb3J0fGVufDF8fHx8MTc2NjQ5NDYyOHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function TrustSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Безопасность и комфорт — наш приоритет</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
