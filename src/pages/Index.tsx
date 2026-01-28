import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const categories = [
    { id: 'pizza', name: '🍕 Пиццы', color: 'from-red-400 to-orange-400' },
    { id: 'sushi', name: '🍣 Суши', color: 'from-pink-400 to-rose-400' },
    { id: 'burgers', name: '🍔 Бургеры', color: 'from-yellow-400 to-orange-400' },
    { id: 'desserts', name: '🍰 Десерты', color: 'from-purple-400 to-pink-400' },
    { id: 'drinks', name: '🥤 Напитки', color: 'from-blue-400 to-cyan-400' },
    { id: 'salads', name: '🥗 Салаты', color: 'from-green-400 to-emerald-400' },
  ];

  const restaurants = [
    { 
      id: 1, 
      name: 'Додо Пицца', 
      rating: 4.8, 
      time: '25-35 мин', 
      category: 'Пицца, Фастфуд',
      image: '🍕',
      discount: '20%'
    },
    { 
      id: 2, 
      name: 'Тануки', 
      rating: 4.9, 
      time: '40-50 мин', 
      category: 'Суши, Азиатская',
      image: '🍣',
      discount: '15%'
    },
    { 
      id: 3, 
      name: 'Burger Heroes', 
      rating: 4.7, 
      time: '30-40 мин', 
      category: 'Бургеры',
      image: '🍔',
      discount: null
    },
    { 
      id: 4, 
      name: 'Sweet Cake', 
      rating: 4.9, 
      time: '35-45 мин', 
      category: 'Десерты, Выпечка',
      image: '🍰',
      discount: '25%'
    },
  ];

  const popularDishes = [
    { 
      id: 1, 
      name: 'Пепперони Фреш', 
      restaurant: 'Додо Пицца', 
      price: 599, 
      image: '🍕',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Филадельфия', 
      restaurant: 'Тануки', 
      price: 450, 
      image: '🍣',
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Чизбургер Делюкс', 
      restaurant: 'Burger Heroes', 
      price: 380, 
      image: '🍔',
      rating: 4.7
    },
    { 
      id: 4, 
      name: 'Тирамису', 
      restaurant: 'Sweet Cake', 
      price: 290, 
      image: '🍰',
      rating: 4.9
    },
  ];

  const renderHome = () => (
    <div className="pb-24">
      <div className="gradient-bg rounded-3xl p-6 mb-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Быстрая доставка еды</h1>
        <p className="text-white/90 mb-4">Доставим за 30 минут или бесплатно</p>
        <div className="relative">
          <Input 
            placeholder="Поиск ресторанов и блюд..." 
            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 pr-12"
          />
          <Button size="icon" className="absolute right-1 top-1 bg-white/30 hover:bg-white/40">
            <Icon name="Search" size={20} />
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 px-4">Категории</h2>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="flex-shrink-0 group"
            >
              <div className={`bg-gradient-to-br ${cat.color} rounded-2xl p-4 w-20 h-20 flex items-center justify-center text-3xl transform transition-all hover:scale-105 shadow-lg`}>
                {cat.name.split(' ')[0]}
              </div>
              <p className="text-xs font-medium mt-2 text-center">{cat.name.split(' ')[1]}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between px-4 mb-4">
          <h2 className="text-xl font-bold">Популярные рестораны</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            Все <Icon name="ChevronRight" size={16} />
          </Button>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {restaurants.map((rest) => (
            <Card key={rest.id} className="flex-shrink-0 w-72 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 h-40 flex items-center justify-center text-7xl relative">
                {rest.image}
                {rest.discount && (
                  <Badge className="absolute top-3 right-3 bg-accent text-white font-bold">
                    -{rest.discount}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{rest.name}</h3>
                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                    <Icon name="Star" size={14} className="text-yellow-600 fill-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-700">{rest.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{rest.category}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>{rest.time}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between px-4 mb-4">
          <h2 className="text-xl font-bold">Популярные блюда</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            Все <Icon name="ChevronRight" size={16} />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4">
          {popularDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-32 flex items-center justify-center text-5xl">
                {dish.image}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm mb-1">{dish.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{dish.restaurant}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{dish.price} ₽</span>
                  <Button size="sm" className="h-8 w-8 p-0 gradient-bg text-white">
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCatalog = () => (
    <div className="pb-24 px-4">
      <div className="sticky top-0 bg-background z-10 pb-4 pt-6">
        <h1 className="text-2xl font-bold mb-4">Каталог</h1>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Badge 
              key={cat.id} 
              variant="secondary" 
              className="cursor-pointer hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
            >
              {cat.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {popularDishes.map((dish) => (
          <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-36 flex items-center justify-center text-6xl">
              {dish.image}
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-sm mb-1">{dish.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{dish.restaurant}</p>
              <div className="flex items-center gap-1 mb-2">
                <Icon name="Star" size={12} className="text-yellow-600 fill-yellow-600" />
                <span className="text-xs font-semibold">{dish.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary">{dish.price} ₽</span>
                <Button size="sm" className="h-8 w-8 p-0 gradient-bg text-white">
                  <Icon name="Plus" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSearch = () => (
    <div className="pb-24 px-4 pt-6">
      <h1 className="text-2xl font-bold mb-4">Поиск</h1>
      <div className="relative mb-6">
        <Input 
          placeholder="Что будем искать?" 
          className="pr-12"
        />
        <Button size="icon" variant="ghost" className="absolute right-1 top-1">
          <Icon name="Search" size={20} />
        </Button>
      </div>
      <div className="text-center text-muted-foreground py-12">
        <Icon name="Search" size={48} className="mx-auto mb-4 opacity-30" />
        <p>Начните вводить запрос</p>
      </div>
    </div>
  );

  const renderCart = () => (
    <div className="pb-24 px-4 pt-6">
      <h1 className="text-2xl font-bold mb-6">Корзина</h1>
      <div className="text-center text-muted-foreground py-12">
        <Icon name="ShoppingBag" size={48} className="mx-auto mb-4 opacity-30" />
        <p className="mb-2">Корзина пуста</p>
        <p className="text-sm">Добавьте блюда из каталога</p>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="pb-24 px-4 pt-6">
      <h1 className="text-2xl font-bold mb-6">Мои заказы</h1>
      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold">Заказ #1234</span>
            <Badge className="bg-green-500">Доставлен</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Додо Пицца • 15 янв, 18:30</p>
          <div className="flex items-center justify-between">
            <span className="font-bold">1 299 ₽</span>
            <Button variant="outline" size="sm">Повторить</Button>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold">Заказ #1233</span>
            <Badge variant="secondary">Отменён</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Тануки • 12 янв, 20:15</p>
          <div className="flex items-center justify-between">
            <span className="font-bold">890 ₽</span>
            <Button variant="outline" size="sm">Повторить</Button>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="pb-24 px-4 pt-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-3xl text-white">
          👤
        </div>
        <div>
          <h1 className="text-2xl font-bold">Александр</h1>
          <p className="text-muted-foreground">+7 999 123-45-67</p>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { icon: 'MapPin', label: 'Мои адреса' },
          { icon: 'CreditCard', label: 'Способы оплаты' },
          { icon: 'Gift', label: 'Бонусы и промокоды' },
          { icon: 'Bell', label: 'Уведомления' },
          { icon: 'Settings', label: 'Настройки' },
          { icon: 'HelpCircle', label: 'Помощь' },
        ].map((item, idx) => (
          <Card key={idx} className="p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name={item.icon as any} size={20} className="text-primary" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto relative">
        <div className="pt-6">
          {activeTab === 'home' && renderHome()}
          {activeTab === 'catalog' && renderCatalog()}
          {activeTab === 'search' && renderSearch()}
          {activeTab === 'cart' && renderCart()}
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'profile' && renderProfile()}
        </div>

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg">
          <div className="max-w-md mx-auto flex justify-around py-2">
            {[
              { id: 'home', icon: 'Home', label: 'Главная' },
              { id: 'catalog', icon: 'Grid3x3', label: 'Каталог' },
              { id: 'search', icon: 'Search', label: 'Поиск' },
              { id: 'cart', icon: 'ShoppingBag', label: 'Корзина' },
              { id: 'orders', icon: 'Package', label: 'Заказы' },
              { id: 'profile', icon: 'User', label: 'Профиль' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${
                  activeTab === tab.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                <Icon 
                  name={tab.icon as any} 
                  size={24} 
                  className={activeTab === tab.id ? 'stroke-primary' : ''}
                />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Index;
