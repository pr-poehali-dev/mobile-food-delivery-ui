import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Главная', icon: 'Home', path: '/' },
  { name: 'Каталог', icon: 'Search', path: '/catalog' },
  { name: 'Корзина', icon: 'ShoppingCart', path: '/cart' },
  { name: 'Заказы', icon: 'Package', path: '/orders' },
  { name: 'Профиль', icon: 'User', path: '/profile' },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border pb-safe">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-all",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon 
                name={item.icon} 
                size={22} 
                className={cn(
                  "transition-transform",
                  isActive && "scale-110"
                )}
              />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
