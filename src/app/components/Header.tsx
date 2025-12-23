import { Phone, MapPin, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-cyan-600">Waterpark.by</h1>
            <p className="text-sm text-gray-600">Крупнейший аквапарк Минска</p>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span>+375 29 123-45-67</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-4 h-4" />
              <span>пр. Победителей, 120</span>
            </div>
            <Button className="bg-cyan-600 hover:bg-cyan-700">
              Купить билеты
            </Button>
          </div>
          
          <div className="flex md:hidden items-center gap-2">
            <Button className="bg-cyan-600 hover:bg-cyan-700">
              Купить билеты
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span>+375 29 123-45-67</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-4 h-4" />
              <span>пр. Победителей, 120</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}