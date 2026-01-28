import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const categories = [
  { name: 'Пицца', icon: 'Pizza', color: 'bg-gradient-primary', items: 45, href: '/catalog?category=pizza' },
  { name: 'Суши', icon: 'Fish', color: 'bg-gradient-secondary', items: 62, href: '/catalog?category=sushi' },
  { name: 'Бургеры', icon: 'Beef', color: 'bg-gradient-accent', items: 38, href: '/catalog?category=burgers' },
  { name: 'Десерты', icon: 'Cake', color: 'bg-gradient-warm', items: 51, href: '/catalog?category=desserts' },
];

const popularProducts = [
  {
    name: 'Пепперони Премиум',
    description: 'Сочная пепперони, моцарелла, томатный соус',
    price: 599,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    rating: 4.8,
    deliveryTime: '25-35 мин'
  },
  {
    name: 'Филадельфия Классик',
    description: 'Лосось, сливочный сыр, огурец, авокадо',
    price: 489,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    rating: 4.9,
    deliveryTime: '30-40 мин'
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">Доставка еды</h2>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Icon name="MapPin" size={16} />
            <span>Москва, ул. Ленина, 10</span>
          </div>
        </div>

        <div className="relative mb-6">
          <Icon 
            name="Search" 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={20}
          />
          <Input 
            placeholder="Найти блюда или рестораны" 
            className="pl-12 h-12 rounded-2xl bg-card border-border"
          />
        </div>

        <section className="mb-8">
          <h3 className="text-lg font-bold mb-4">Категории</h3>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Популярное</h3>
            <button className="text-primary text-sm font-medium">Все</button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {popularProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
