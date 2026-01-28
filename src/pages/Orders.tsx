import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const orders = [
  {
    id: '#12345',
    date: '28 янв, 14:30',
    status: 'delivering',
    items: ['Пепперони × 2', 'Филадельфия × 1'],
    total: 1687,
    courier: 'Иван',
    courierPhone: '+7 999 123-45-67'
  },
  {
    id: '#12344',
    date: '27 янв, 18:20',
    status: 'completed',
    items: ['Маргарита × 1', 'Калифорния × 2'],
    total: 1290,
  },
  {
    id: '#12343',
    date: '25 янв, 12:15',
    status: 'completed',
    items: ['Бургер × 2', 'Картофель фри × 1'],
    total: 890,
  },
];

const Orders = () => {
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'delivering':
        return { text: 'В пути', color: 'text-primary', bg: 'bg-primary/10', icon: 'Truck' };
      case 'completed':
        return { text: 'Завершен', color: 'text-green-600', bg: 'bg-green-100', icon: 'CheckCircle2' };
      default:
        return { text: 'Обработка', color: 'text-amber-600', bg: 'bg-amber-100', icon: 'Clock' };
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Мои заказы</h2>

        <div className="space-y-4">
          {orders.map((order) => {
            const statusInfo = getStatusInfo(order.status);
            
            return (
              <div key={order.id} className="bg-card rounded-2xl p-5 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full ${statusInfo.bg} flex items-center gap-2`}>
                    <Icon name={statusInfo.icon} size={16} className={statusInfo.color} />
                    <span className={`text-sm font-medium ${statusInfo.color}`}>
                      {statusInfo.text}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  {order.items.map((item, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>

                {order.status === 'delivering' && (
                  <div className="mb-4 p-3 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Icon name="User" size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Курьер: {order.courier}</p>
                        <p className="text-sm text-muted-foreground">{order.courierPhone}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      Отследить на карте
                    </Button>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-muted-foreground">Итого</span>
                  <span className="text-xl font-bold">{order.total} ₽</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Orders;
