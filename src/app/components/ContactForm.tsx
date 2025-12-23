import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface ContactFormProps {
  title?: string;
  buttonText?: string;
}

export function ContactForm({ 
  title = "Оставь контакты — пришлём цены и актуальные акции",
  buttonText = "Получить цены"
}: ContactFormProps) {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="mb-6">{title}</h3>
      
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-green-600">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Имя</Label>
            <Input id="name" placeholder="Введите ваше имя" required />
          </div>
          
          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" type="tel" placeholder="+375 XX XXX-XX-XX" required />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" required />
          </div>
          
          <div className="flex items-start gap-2">
            <Checkbox 
              id="agreement" 
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
            />
            <Label htmlFor="agreement" className="text-sm leading-tight">
              Согласен на обработку персональных данных
            </Label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-cyan-600 hover:bg-cyan-700"
            disabled={!agreed}
          >
            {buttonText}
          </Button>
        </form>
      )}
    </div>
  );
}