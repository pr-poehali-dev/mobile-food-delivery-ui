import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { path: '/', icon: 'Home', label: 'Главная' },
  { path: '/catalog', icon: 'Store', label: 'Каталог' },
  { path: '/search', icon: 'Search', label: 'Поиск' },
  { path: '/cart', icon: 'ShoppingCart', label: 'Корзина' },
  { path: '/profile', icon: 'User', label: 'Профиль' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 flex-1 transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={22} 
                  className={isActive ? 'fill-primary/20' : ''}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
