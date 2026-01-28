import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const popularSearches = ['Пицца Маргарита', 'Суши Филадельфия', 'Бургер', 'Цезарь', 'Капучино'];

const recentSearches = ['Пепперони', 'Том ям', 'Тирамису'];

const searchResults = [
  {
    id: 1,
    name: 'Пицца Маргарита',
    restaurant: 'Pizza House',
    price: 450,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Суши Филадельфия',
    restaurant: 'Суши Мастер',
    price: 489,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Классический бургер',
    restaurant: 'Burger King',
    price: 350,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    rating: 4.7,
  },
];

export default function Search() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      setIsSearching(true);
    }
  };

  return (
    <div className="min-h-screen pb-6">
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Icon name="ArrowLeft" size={24} />
              </Button>
            </Link>
            <div className="relative flex-1">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Найти блюдо или ресторан..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => {
                    setQuery('');
                    setIsSearching(false);
                  }}
                >
                  <Icon name="X" size={20} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-6">
        {!isSearching ? (
          <>
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4">Популярные запросы</h2>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSearch(search)}
                    className="px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Недавние поиски</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  Очистить
                </Button>
              </div>
              <div className="space-y-3">
                {recentSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSearch(search)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Icon name="History" size={20} className="text-muted-foreground" />
                    </div>
                    <span className="flex-1 text-left font-medium">{search}</span>
                    <Icon name="ArrowUpLeft" size={20} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-muted-foreground">
                Найдено {searchResults.length} результатов по запросу "{query}"
              </p>
            </div>

            <div className="space-y-4">
              {searchResults.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0">
                    <CardContent className="p-0">
                      <div className="flex gap-4 p-4">
                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg mb-1 truncate">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.restaurant}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-lg text-primary">{item.price} ₽</span>
                            <Badge variant="secondary" className="gap-1">
                              <Icon name="Star" size={14} className="fill-primary text-primary" />
                              {item.rating}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
