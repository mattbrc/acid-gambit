import { getSession, getUserDetails } from '../supabase-server';
import { HomeNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { UserNav } from '@/components/user-nav';
import { redirect } from 'next/navigation';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function NutritionLayout({
  children
}: DashboardLayoutProps) {
  const session = await getSession();
  const user = await getUserDetails();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col min-h-screen space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex items-center justify-between h-16 py-4">
          <HomeNav />
          <UserNav
            name={user?.full_name || null}
            email={session?.user.email || ''}
          />
        </div>
      </header>
      <div className="container grid flex-1">
        {/* <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside> */}
        <main className="flex flex-col flex-1 w-full overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
