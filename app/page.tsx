import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
// import { MainNav } from "@/components/main-nav";
import { SiteFooter } from '@/components/site-footer';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container z-40 bg-background">
        <div className="flex items-center justify-between h-20 py-6">
          <MainNav />
          <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4'
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="pt-8 pb-12 space-y-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link
              href="https://instagram.com/acidgambit"
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Follow along on Instagram
            </Link>
            <h1 className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl">
              Gambit Training App
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              The official Acid Gambit Training App. No fluff. Pure programming
              and workouts proven by hundreds of athletes from Special
              Operations to Airline Pilots.
            </p>
            <div>
              <Link
                href="/login"
                className={cn(buttonVariants({ size: 'lg', variant: 'ag' }))}
              >
                Start Training
              </Link>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="container py-8 space-y-6 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Who doesn&apos;t like features? I keep it simple and focus on
              getting you results.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icons.programming size={35} />
                <div className="space-y-2">
                  <h3 className="font-bold">Programming</h3>
                  <p className="text-sm text-muted-foreground">
                    Proven programming built specifically for your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icons.wod size={35} />
                <div className="space-y-2">
                  <h3 className="font-bold">WODs</h3>
                  <p className="text-sm">
                    Just here for a workout? Check out the Gambit Workout of the
                    Day.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icons.discord size={35} />
                <div className="space-y-2">
                  <h3 className="font-bold">Discord</h3>
                  <p className="text-sm text-muted-foreground">
                    Official AG Discord for any and all questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icons.tracking size={35} />
                <div className="space-y-2">
                  <h3 className="font-bold">Tracking</h3>
                  <p className="text-sm text-muted-foreground">(Coming Soon)</p>
                </div>
              </div>
            </div>
            <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icons.nutrition size={35} />
                <div className="space-y-2">
                  <h3 className="font-bold">Nutrition</h3>
                  <p className="text-sm text-muted-foreground">(Coming Soon)</p>
                </div>
              </div>
            </div>
            <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icons.strava size={35} />
                <div className="space-y-2">
                  <h3 className="font-bold">Strava Integration</h3>
                  <p className="text-sm text-muted-foreground">(Coming Soon)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
          <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Unlock all features including unlimited workouts.
            </p>
          </div>
          <div className="grid w-full items-start gap-10 rounded-lg border border-emerald-400 p-10 md:grid-cols-[1fr_200px]">
            <div className="grid gap-6">
              <h3 className="text-xl font-bold sm:text-2xl">
                What&apos;s included in the PRO plan
              </h3>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> Unlimited Program
                  Access
                </li>
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> Unlimited Workouts
                </li>
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> Custom User Profile
                </li>
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> Dashboard Analytics
                </li>
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> Access to Discord
                </li>
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> Premium Support
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <div>
                <h4 className="font-bold text-7xl">$9</h4>
                <p className="text-sm font-medium text-muted-foreground">
                  Billed Monthly. Cancel Anytime.
                </p>
              </div>
              <Link
                href="/login"
                className={cn(buttonVariants({ size: 'lg', variant: 'ag' }))}
              >
                Start Training
              </Link>
            </div>
          </div>
          <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
            <div className="grid gap-6">
              <h3 className="text-xl font-bold sm:text-2xl">
                What&apos;s included in the FREE trial
              </h3>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> 30 Day Free Trial
                </li>
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> Unlimited Program
                  Access
                </li>
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> Unlimited Workouts
                </li>
                <li className="flex items-center">
                  <Icons.check className="w-4 h-4 mr-2" /> Access to Discord
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <div>
                <h4 className="font-bold text-7xl">$0</h4>
                <p className="text-sm font-medium text-muted-foreground">
                  Free!
                </p>
              </div>
              <Link
                href="/login"
                className={cn(buttonVariants({ size: 'lg', variant: 'ag' }))}
              >
                Start Training
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
