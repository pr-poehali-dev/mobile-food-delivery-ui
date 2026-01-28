import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <main className="h-full">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
