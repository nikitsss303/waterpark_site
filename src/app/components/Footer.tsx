import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">Waterpark.by</h3>
            <p className="text-gray-400 mb-4">
              Крупнейший аквапарк Минска. Развлечения для всей семьи круглый год.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+375 29 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@waterpark.by</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>г. Минск, пр. Победителей, 120</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Режим работы</h4>
            <div className="space-y-2">
              <p>Понедельник - Пятница: 10:00 - 22:00</p>
              <p>Суббота - Воскресенье: 9:00 - 23:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© 2024 Waterpark.by. Все права защищены.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-cyan-400 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Правовая информация</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <h4 className="text-white mb-4 text-center">Как нас найти</h4>
          <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
            <MapPin className="w-12 h-12 text-cyan-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
