import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface CategoryCardProps {
  name: string;
  icon: string;
  color: string;
  items: number;
  href: string;
}

const CategoryCard = ({ name, icon, color, items, href }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <div className={`relative overflow-hidden rounded-2xl p-5 h-32 ${color} transition-all hover:scale-[1.02] active:scale-[0.98]`}>
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
              <p className="text-white/80 text-sm">{items}+ блюд</p>
            </div>
            <div className="text-white/90">
              <Icon name={icon} size={28} />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      </div>
    </Link>
  );
};

export default CategoryCard;
