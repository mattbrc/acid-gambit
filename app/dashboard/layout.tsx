import { getSession } from '../supabase-server';
import { MainNav } from '@/components/main-nav';
import SignOutButton from '@/components/sign-out-button';
import { SiteFooter } from '@/components/site-footer';
import { redirect } from 'next/navigation';

// import { UserAccountNav } from "@/components/user-account-nav";
// import { DashboardNav } from "@/components/nav";
// import { dashboardConfig } from "@/config/dashboard";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children
}: DashboardLayoutProps) {
  // if (!user) {
  //   return notFound();
  // }

  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col min-h-screen space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex items-center justify-between h-16 py-4">
          <MainNav />
          {/* <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          /> */}
          <nav>
            <SignOutButton />
          </nav>
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
