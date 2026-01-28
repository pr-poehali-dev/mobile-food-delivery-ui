import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const filters = ['Все', 'Пицца', 'Суши', 'Бургеры', 'Десерты', 'Салаты', 'Напитки'];

const restaurants = [
  { 
    id: 1, 
    name: 'Pizza House', 
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    rating: 4.8,
    deliveryTime: '20-30',
    minOrder: 500,
    category: 'Пицца',
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
    category: 'Суши',
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
    category: 'Бургеры',
    tags: ['Бургеры', 'Фастфуд'],
  },
  { 
    id: 4, 
    name: 'Sweet Bakery', 
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
    rating: 4.6,
    deliveryTime: '25-35',
    minOrder: 600,
    category: 'Десерты',
    tags: ['Десерты', 'Кондитерская'],
  },
  { 
    id: 5, 
    name: 'Healthy Bowl', 
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    rating: 4.8,
    deliveryTime: '20-30',
    minOrder: 450,
    category: 'Салаты',
    tags: ['Салаты', 'ЗОЖ'],
  },
  { 
    id: 6, 
    name: 'Coffee Time', 
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    rating: 4.9,
    deliveryTime: '10-20',
    minOrder: 300,
    category: 'Напитки',
    tags: ['Кофе', 'Напитки'],
  },
];

export default function Catalog() {
  const [selectedFilter, setSelectedFilter] = useState('Все');

  const filteredRestaurants = selectedFilter === 'Все' 
    ? restaurants 
    : restaurants.filter(r => r.category === selectedFilter);

  return (
    <div className="min-h-screen pb-6">
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Icon name="ArrowLeft" size={24} />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold flex-1">Каталог ресторанов</h1>
            <Button variant="ghost" size="icon">
              <Icon name="SlidersHorizontal" size={24} />
            </Button>
          </div>

          <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 bg-muted/50">
              {filters.map((filter) => (
                <TabsTrigger 
                  key={filter} 
                  value={filter}
                  className="rounded-full px-6 py-2 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {filter}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-6">
        <div className="mb-4">
          <p className="text-muted-foreground">Найдено {filteredRestaurants.length} ресторанов</p>
        </div>

        <div className="space-y-4">
          {filteredRestaurants.map((restaurant) => (
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
