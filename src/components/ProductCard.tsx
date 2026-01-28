import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  deliveryTime: string;
}

const ProductCard = ({ name, description, price, image, rating, deliveryTime }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all">
      <div className="relative h-40 bg-gradient-to-br from-muted to-muted/50">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
          <Icon name="Star" size={14} className="text-amber-500 fill-amber-500" />
          <span className="text-xs font-semibold">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-base mb-1">{name}</h3>
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-2 mb-3 text-muted-foreground text-xs">
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={14} />
            <span>{deliveryTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">{price} ₽</span>
          <Button 
            size="sm" 
            className="rounded-full bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <Icon name="Plus" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
