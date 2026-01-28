import { Link, useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const orderStatuses = [
  { id: 1, label: 'Заказ принят', time: '14:30', completed: true },
  { id: 2, label: 'Готовится', time: '14:35', completed: true },
  { id: 3, label: 'Передан курьеру', time: '14:50', completed: true },
  { id: 4, label: 'В пути', time: '15:00', completed: true },
  { id: 5, label: 'Доставлен', time: '', completed: false },
];

export default function Tracking() {
  const { id } = useParams();

  return (
    <div className="min-h-screen pb-6">
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/orders">
              <Button variant="ghost" size="icon">
                <Icon name="ArrowLeft" size={24} />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold flex-1">Заказ #{id}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-6">
        <Card className="border-0 mb-6 overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse">
                <Icon name="Truck" size={64} className="text-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Время доставки</span>
                  <Badge className="bg-gradient-primary">В пути</Badge>
                </div>
                <p className="text-2xl font-bold">~15 минут</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-0 mb-6">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Статус заказа</h3>
            <div className="space-y-4">
              {orderStatuses.map((status, index) => (
                <div key={status.id} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        status.completed
                          ? 'bg-gradient-primary'
                          : 'bg-muted'
                      }`}
                    >
                      {status.completed ? (
                        <Icon name="Check" size={20} className="text-white" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                      )}
                    </div>
                    {index < orderStatuses.length - 1 && (
                      <div
                        className={`w-0.5 h-12 ${
                          status.completed ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <p
                      className={`font-semibold mb-1 ${
                        status.completed ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {status.label}
                    </p>
                    {status.time && (
                      <p className="text-sm text-muted-foreground">{status.time}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 mb-6 bg-gradient-card">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Курьер</h3>
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-gradient-primary text-white text-xl font-bold">
                  ИП
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-bold text-lg">Иван Петров</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Icon name="Star" size={16} className="text-primary fill-primary" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-muted-foreground">(234 доставки)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="lg" className="h-12">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
              <Button variant="outline" size="lg" className="h-12">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 mb-6">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Адрес доставки</h3>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-1">ул. Ленина, 15</p>
                <p className="text-sm text-muted-foreground">кв. 42, подъезд 2, этаж 5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-4">Состав заказа</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Пицца Маргарита × 2</span>
                <span className="font-semibold">900 ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Напиток Cola × 1</span>
                <span className="font-semibold">99 ₽</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Итого</span>
                <span className="font-bold text-2xl text-primary">999 ₽</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
