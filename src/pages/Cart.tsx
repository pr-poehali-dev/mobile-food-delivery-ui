import { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Пепперони Премиум',
      price: 599,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Филадельфия Классик',
      price: 489,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=150&h=150&fit=crop'
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 99;

  return (
    <div className="min-h-screen bg-background pb-32">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Корзина</h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ShoppingCart" size={40} className="text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg">Корзина пуста</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-card rounded-2xl p-4 border border-border">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-lg font-bold text-primary">{item.price} ₽</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                      >
                        <Icon name="Minus" size={16} />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90"
                      >
                        <Icon name="Plus" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-2xl p-4 border border-border mb-4">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Truck" size={20} className="text-muted-foreground" />
                <Input placeholder="Адрес доставки" className="flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={20} className="text-muted-foreground" />
                <Input placeholder="Время доставки" className="flex-1" />
              </div>
            </div>

            <div className="bg-card rounded-2xl p-4 border border-border mb-6">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сумма заказа</span>
                  <span className="font-semibold">{total} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="font-semibold">{deliveryFee} ₽</span>
                </div>
              </div>
              <div className="pt-4 border-t border-border flex justify-between items-center">
                <span className="text-lg font-bold">Итого</span>
                <span className="text-2xl font-bold text-primary">{total + deliveryFee} ₽</span>
              </div>
            </div>
          </>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 p-4 bg-background border-t border-border">
          <Button className="w-full h-14 text-lg bg-gradient-primary hover:opacity-90 rounded-2xl">
            Оформить заказ
          </Button>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Cart;
