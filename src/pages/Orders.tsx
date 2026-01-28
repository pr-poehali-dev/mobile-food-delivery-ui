import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const orders = [
  {
    id: 1,
    number: '12345',
    date: '28 янв, 14:30',
    status: 'delivering',
    statusText: 'В пути',
    restaurant: 'Pizza House',
    items: ['Пицца Маргарита x2', 'Напиток Cola'],
    total: 999,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },
  {
    id: 2,
    number: '12344',
    date: '27 янв, 19:15',
    status: 'completed',
    statusText: 'Доставлен',
    restaurant: 'Суши Мастер',
    items: ['Суши Филадельфия', 'Роллы Калифорния'],
    total: 1289,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a',
  },
  {
    id: 3,
    number: '12343',
    date: '25 янв, 12:00',
    status: 'completed',
    statusText: 'Доставлен',
    restaurant: 'Burger King',
    items: ['Бургер классический', 'Картофель фри'],
    total: 650,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
  },
];

const activeOrders = orders.filter(o => o.status === 'delivering');
const completedOrders = orders.filter(o => o.status === 'completed');

export default function Orders() {
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
            <h1 className="text-2xl font-bold flex-1">Мои заказы</h1>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-6">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="w-full grid grid-cols-2 h-12 mb-6">
            <TabsTrigger value="active" className="text-base">
              Активные ({activeOrders.length})
            </TabsTrigger>
            <TabsTrigger value="history" className="text-base">
              История ({completedOrders.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-0">
            {activeOrders.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-6">
                  <Icon name="Package" size={64} className="text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Нет активных заказов</h2>
                <p className="text-muted-foreground mb-6 text-center">
                  Сделайте заказ и отслеживайте его здесь
                </p>
                <Link to="/catalog">
                  <Button size="lg" className="bg-gradient-primary">
                    Перейти в каталог
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {activeOrders.map((order) => (
                  <Link key={order.id} to={`/tracking/${order.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all border-0">
                      <CardContent className="p-0">
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-lg">Заказ #{order.number}</h3>
                                <Badge className="bg-gradient-primary">
                                  {order.statusText}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{order.date}</p>
                            </div>
                            <Icon name="ChevronRight" size={24} className="text-muted-foreground" />
                          </div>

                          <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                              <img
                                src={order.image}
                                alt={order.restaurant}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold mb-2">{order.restaurant}</p>
                              <div className="text-sm text-muted-foreground space-y-1 mb-2">
                                {order.items.map((item, idx) => (
                                  <p key={idx} className="truncate">{item}</p>
                                ))}
                              </div>
                              <p className="font-bold text-primary">{order.total} ₽</p>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t border-border">
                            <Button className="w-full bg-gradient-secondary">
                              <Icon name="MapPin" size={20} className="mr-2" />
                              Отследить курьера
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <div className="space-y-4">
              {completedOrders.map((order) => (
                <Card key={order.id} className="overflow-hidden border-0">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg">Заказ #{order.number}</h3>
                          <Badge variant="secondary" className="gap-1">
                            <Icon name="CheckCircle2" size={14} />
                            {order.statusText}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={order.image}
                          alt={order.restaurant}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold mb-2">{order.restaurant}</p>
                        <div className="text-sm text-muted-foreground space-y-1 mb-2">
                          {order.items.map((item, idx) => (
                            <p key={idx} className="truncate">{item}</p>
                          ))}
                        </div>
                        <p className="font-bold text-primary">{order.total} ₽</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        Повторить заказ
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Оставить отзыв
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
