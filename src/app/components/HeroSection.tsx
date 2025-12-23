import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1706843540984-fd965be66bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnBhcmslMjBmYW1pbHklMjB3YXRlciUyMHNsaWRlfGVufDF8fHx8MTc2NjQ5NDYyOHww&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h2 className="text-white mb-4">
            Проведи целый день в аквапарке с горками, бассейнами и SPA-зоной
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Развлечения для детей и взрослых. Безопасно, комфортно, в любое время года.
          </p>
          <p className="mb-8 text-white/80">
            Выбери дату и купи билет онлайн за 2 минуты
          </p>
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
            Купить билет
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}