import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const menuItems = [
  { icon: 'User', label: 'Личные данные', href: '/profile/edit' },
  { icon: 'MapPin', label: 'Адреса доставки', href: '/profile/addresses' },
  { icon: 'CreditCard', label: 'Способы оплаты', href: '/profile/payment' },
  { icon: 'Star', label: 'Избранное', href: '/profile/favorites' },
  { icon: 'Gift', label: 'Бонусы и промокоды', href: '/profile/bonuses' },
  { icon: 'Settings', label: 'Настройки', href: '/profile/settings' },
  { icon: 'HelpCircle', label: 'Помощь', href: '/profile/help' },
];

export default function Profile() {
  return (
    <div className="min-h-screen pb-6">
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">Профиль</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-6">
        <Card className="border-0 mb-6 bg-gradient-primary text-white overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-20 h-20 border-4 border-white/20">
                <AvatarFallback className="bg-white/20 text-white text-2xl font-bold">
                  АИ
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">Александр Иванов</h2>
                <p className="text-white/90">+7 999 123-45-67</p>
              </div>
              <Link to="/profile/edit">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Icon name="Pencil" size={20} />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold mb-1">12</p>
                <p className="text-sm text-white/90">Заказов</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold mb-1">450</p>
                <p className="text-sm text-white/90">Бонусов</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-3xl font-bold mb-1">8</p>
                <p className="text-sm text-white/90">Любимых</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 mb-6">
          <CardContent className="p-0">
            {menuItems.map((item, index) => (
              <Link key={item.label} to={item.href}>
                <button
                  className={`w-full flex items-center gap-4 p-4 hover:bg-muted transition-colors ${
                    index !== menuItems.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-card flex items-center justify-center">
                    <Icon name={item.icon} size={22} className="text-primary" />
                  </div>
                  <span className="flex-1 text-left font-medium text-base">{item.label}</span>
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </button>
              </Link>
            ))}
          </CardContent>
        </Card>

        <Button
          variant="outline"
          className="w-full h-14 text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20"
        >
          <Icon name="LogOut" size={20} className="mr-2" />
          Выйти из аккаунта
        </Button>
      </div>
    </div>
  );
}
