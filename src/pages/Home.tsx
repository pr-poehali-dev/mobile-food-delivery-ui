import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 1, name: '🍕 Пицца', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', color: 'from-orange-400 to-red-500' },
  { id: 2, name: '🍣 Суши', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351', color: 'from-teal-400 to-cyan-500' },
  { id: 3, name: '🍰 Десерты', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b', color: 'from-pink-400 to-rose-500' },
  { id: 4, name: '🍔 Бургеры', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd', color: 'from-yellow-400 to-orange-500' },
  { id: 5, name: '🥗 Салаты', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe', color: 'from-green-400 to-emerald-500' },
  { id: 6, name: '☕ Напитки', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735', color: 'from-amber-400 to-yellow-500' },
];

const featuredRestaurants = [
  { 
    id: 1, 
    name: 'Pizza House', 
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    rating: 4.8,
    deliveryTime: '20-30',
    minOrder: 500,
    tags: ['Пицца', 'Итальянская'],
    discount: '20% на первый заказ'
  },
  { 
    id: 2, 
    name: 'Суши Мастер', 
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a',
    rating: 4.9,
    deliveryTime: '30-40',
    minOrder: 800,
    tags: ['Суши', 'Японская'],
    discount: 'Бесплатная доставка'
  },
  { 
    id: 3, 
    name: 'Burger King', 
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    rating: 4.7,
    deliveryTime: '15-25',
    minOrder: 400,
    tags: ['Бургеры', 'Фастфуд'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-primary text-white p-6 pb-8 rounded-b-[2rem]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm opacity-90 mb-1">Доставка по адресу</p>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                <span className="font-semibold text-lg">ул. Ленина, 15</span>
                <Icon name="ChevronDown" size={20} />
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Bell" size={24} />
            </Button>
          </div>

          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Найти ресторан или блюдо..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Категории</h2>
          <Link to="/catalog" className="text-primary font-semibold text-sm flex items-center gap-1">
            Все <Icon name="ChevronRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/catalog?category=${cat.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-center px-2">{cat.name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-1">Популярные рестораны</h2>
          <p className="text-muted-foreground">Быстрая доставка любимых блюд</p>
        </div>

        <div className="space-y-4">
          {featuredRestaurants.map((restaurant) => (
            <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] border-0">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name} 
                      className="w-full h-full object-cover"
                    />
                    {restaurant.discount && (
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                        {restaurant.discount}
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{restaurant.name}</h3>
                      <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
                        <Icon name="Star" size={16} className="text-primary fill-primary" />
                        <span className="font-semibold text-sm">{restaurant.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {restaurant.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{restaurant.deliveryTime} мин</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Wallet" size={16} />
                        <span>От {restaurant.minOrder} ₽</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
