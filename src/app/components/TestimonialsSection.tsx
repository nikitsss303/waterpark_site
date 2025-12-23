import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Елена Петрова",
    text: "Отличное место для семейного отдыха! Дети в восторге от горок, а я наслаждалась SPA-зоной. Чистота и безопасность на высшем уровне. Обязательно вернёмся!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1628676348963-f88c671333f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHZhY2F0aW9ufGVufDF8fHx8MTc2NjQ2MTYyMHww&ixlib=rb-4.1.0&q=80&w=1080&fit=crop&w=100&h=100"
  },
  {
    name: "Андрей Смирнов",
    text: "Провели в аквапарке целый день. Очень понравились волновой бассейн и экстремальные горки. Персонал дружелюбный, всё организовано отлично. Рекомендую!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1628676348963-f88c671333f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHZhY2F0aW9ufGVufDF8fHx8MTc2NjQ2MTYyMHww&ixlib=rb-4.1.0&q=80&w=1080&fit=crop&w=100&h=100"
  },
  {
    name: "Мария Козлова",
    text: "Замечательный аквапарк! Купили семейный билет и не пожалели. Дети наигрались в детской зоне, а мы с мужем попробовали все горки. Цена соответствует качеству!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1628676348963-f88c671333f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHZhY2F0aW9ufGVufDF8fHx8MTc2NjQ2MTYyMHww&ixlib=rb-4.1.0&q=80&w=1080&fit=crop&w=100&h=100"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Отзывы наших гостей</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center overflow-hidden">
                  <span className="text-cyan-600">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Гость аквапарка</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
