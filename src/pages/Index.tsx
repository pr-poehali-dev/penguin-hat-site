import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const collections = [
    {
      name: "Классика",
      description: "Вневременная элегантность",
      image: "https://cdn.poehali.dev/projects/9e4b551a-67d3-4b23-9a5b-5b7a7a1d563c/files/509f77a9-a55f-4976-b765-358726fb16ff.jpg",
      price: "От 45 000 ₽"
    },
    {
      name: "Авангард",
      description: "Современный стиль",
      image: "https://cdn.poehali.dev/projects/9e4b551a-67d3-4b23-9a5b-5b7a7a1d563c/files/4aae08e1-c6f6-4907-b2bb-54d56e08509f.jpg",
      price: "От 52 000 ₽"
    },
    {
      name: "Премиум",
      description: "Эксклюзивная серия",
      image: "https://cdn.poehali.dev/projects/9e4b551a-67d3-4b23-9a5b-5b7a7a1d563c/files/0db012c6-9efd-4a92-b54c-060fbb98bdaa.jpg",
      price: "От 68 000 ₽"
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wider">PINGUIN ATELIER</h1>
          <div className="hidden md:flex gap-8 items-center">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-sm tracking-wide hover:text-accent transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection("collections")}
              className="text-sm tracking-wide hover:text-accent transition-colors"
            >
              Коллекции
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-sm tracking-wide hover:text-accent transition-colors"
            >
              О бренде
            </button>
            <button 
              onClick={() => scrollToSection("bespoke")}
              className="text-sm tracking-wide hover:text-accent transition-colors"
            >
              Индивидуальный пошив
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-sm tracking-wide hover:text-accent transition-colors"
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-7xl md:text-8xl font-light leading-tight animate-fade-in">
              Элегантность<br />в каждой детали
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Эксклюзивные шляпы ручной работы для самых взыскательных пингвинов. Традиции швейцарского мастерства с 1892 года.
            </p>
            <div className="pt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("collections")}
                className="px-12 py-6 text-lg tracking-wider"
              >
                Смотреть коллекции
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-light mb-4">Наши коллекции</h3>
            <p className="text-muted-foreground text-lg">Каждая шляпа — произведение искусства</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {collections.map((collection, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer hover-scale transition-all duration-500 border-0 shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center space-y-3">
                  <h4 className="text-3xl font-light">{collection.name}</h4>
                  <p className="text-muted-foreground">{collection.description}</p>
                  <p className="text-lg font-medium text-accent pt-2">{collection.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-5xl font-light">О бренде</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                С 1892 года наша мануфактура создает головные уборы для самых требовательных клиентов. 
                Каждая шляпа изготавливается вручную мастерами с многолетним опытом.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Мы используем только натуральные материалы премиум-класса: кашемир, шелк, 
                итальянский фетр и швейцарские ткани.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <Icon name="Award" className="text-accent mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-medium mb-2">130+ лет традиций</h4>
                  <p className="text-muted-foreground">Швейцарское качество и мастерство</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon name="Sparkles" className="text-accent mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-medium mb-2">Ручная работа</h4>
                  <p className="text-muted-foreground">Каждая деталь создана с любовью</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon name="Crown" className="text-accent mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-medium mb-2">Эксклюзивность</h4>
                  <p className="text-muted-foreground">Ограниченные серии и индивидуальный пошив</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bespoke" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h3 className="text-5xl font-light">Индивидуальный пошив</h3>
          <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
            Создайте уникальную шляпу по вашим параметрам. Наши мастера воплотят 
            любую идею с учетом ваших пожеланий по форме, цвету и материалу.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <div className="text-6xl font-light text-accent">01</div>
              <h4 className="text-xl font-medium">Консультация</h4>
              <p className="opacity-80">Обсуждение дизайна и выбор материалов</p>
            </div>
            <div className="space-y-3">
              <div className="text-6xl font-light text-accent">02</div>
              <h4 className="text-xl font-medium">Создание</h4>
              <p className="opacity-80">Ручное изготовление 14-21 день</p>
            </div>
            <div className="space-y-3">
              <div className="text-6xl font-light text-accent">03</div>
              <h4 className="text-xl font-medium">Примерка</h4>
              <p className="opacity-80">Финальная подгонка и доставка</p>
            </div>
          </div>
          <div className="pt-8">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection("contact")}
              className="px-12 py-6 text-lg tracking-wider"
            >
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-light mb-4">Свяжитесь с нами</h3>
            <p className="text-muted-foreground text-lg">Мы ответим в течение 24 часов</p>
          </div>
          
          <Card className="p-8 shadow-xl border-0">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input placeholder="Ваше имя" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input type="tel" placeholder="+7 (___) ___-__-__" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о ваших пожеланиях" 
                  className="min-h-32 resize-none"
                />
              </div>
              <Button type="submit" className="w-full h-12 text-base tracking-wider">
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="mt-12 text-center space-y-4">
            <div className="flex justify-center gap-6">
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Phone" size={20} />
                <span>+7 (495) 123-45-67</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Mail" size={20} />
                <span>atelier@pinguin.com</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Ателье: Москва, Тверская улица, 10
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-wider">PINGUIN ATELIER</h2>
          <p className="text-sm opacity-80">Швейцарское качество с 1892 года</p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="text-xs opacity-60 pt-8">© 2024 Pinguin Atelier. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
