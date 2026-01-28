import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Icon name="UtensilsCrossed" className="text-white" size={20} />
          </div>
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            FoodExpress
          </h1>
        </div>
        
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Icon name="Bell" size={22} className="text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
