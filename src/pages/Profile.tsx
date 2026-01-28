import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: 'User', label: 'Личные данные', href: '/profile/edit' },
  { icon: 'MapPin', label: 'Адреса доставки', href: '/profile/addresses' },
  { icon: 'CreditCard', label: 'Способы оплаты', href: '/profile/payment' },
  { icon: 'Star', label: 'Избранное', href: '/profile/favorites' },
  { icon: 'Gift', label: 'Бонусы и промокоды', href: '/profile/bonuses' },
  { icon: 'Settings', label: 'Настройки', href: '/profile/settings' },
  { icon: 'HelpCircle', label: 'Помощь', href: '/profile/help' },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gradient-primary rounded-3xl p-6 mb-6 text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl backdrop-blur-sm">
              <Icon name="User" size={36} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Александр</h2>
              <p className="text-white/80">+7 999 123-45-67</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-white/80">Заказов</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <p className="text-2xl font-bold">450</p>
              <p className="text-sm text-white/80">Бонусов</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-white/80">Любимых</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl overflow-hidden border border-border mb-6">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 p-4 hover:bg-muted transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name={item.icon} size={20} className="text-primary" />
              </div>
              <span className="flex-1 text-left font-medium">{item.label}</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </button>
          ))}
        </div>

        <Button variant="outline" className="w-full h-12 text-destructive hover:text-destructive hover:bg-destructive/10">
          <Icon name="LogOut" size={20} className="mr-2" />
          Выйти
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
