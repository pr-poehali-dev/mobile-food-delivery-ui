import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface CartItem {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Пицца Маргарита',
      restaurant: 'Pizza House',
      price: 450,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    },
    {
      id: 2,
      name: 'Суши Филадельфия',
      restaurant: 'Суши Мастер',
      price: 489,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 99;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen pb-32">
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Icon name="ArrowLeft" size={24} />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold flex-1">Корзина</h1>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-6">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-6">
              <Icon name="ShoppingCart" size={64} className="text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Корзина пуста</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Добавьте товары из меню ресторанов
            </p>
            <Link to="/catalog">
              <Button size="lg" className="bg-gradient-primary">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border-0">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.restaurant}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">{item.price} ₽</span>
                          <div className="flex items-center gap-3">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Icon name="Minus" size={16} />
                            </Button>
                            <span className="font-bold w-8 text-center">{item.quantity}</span>
                            <Button
                              size="icon"
                              className="h-8 w-8 rounded-full bg-gradient-primary"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Icon name="Plus" size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 mb-6">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Детали заказа</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Товары ({cartItems.length})</span>
                    <span className="font-semibold">{subtotal} ₽</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Доставка</span>
                    <span className="font-semibold">{deliveryFee} ₽</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">Итого</span>
                    <span className="font-bold text-xl text-primary">{total} ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 mb-6 bg-gradient-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Адрес доставки</p>
                    <p className="font-semibold">ул. Ленина, 15, кв. 42</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="ChevronRight" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 bg-background border-t border-border p-6">
          <div className="max-w-screen-xl mx-auto">
            <Link to="/checkout">
              <Button size="lg" className="w-full bg-gradient-primary text-lg h-14">
                Оформить заказ · {total} ₽
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
