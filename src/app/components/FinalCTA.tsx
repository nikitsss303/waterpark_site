import { ContactForm } from './ContactForm';

export function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-cyan-600 to-cyan-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-white mb-4">Проведи незабываемый день в Waterpark.by</h2>
          <p className="text-xl text-white/90">Выбери билет и отдыхай без забот</p>
        </div>
        
        <div className="mt-12">
          <ContactForm 
            title="Купи билет онлайн"
            buttonText="Купить билет"
          />
        </div>
      </div>
    </section>
  );
}
