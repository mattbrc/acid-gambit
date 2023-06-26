import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import UserAuthForm from '@/components/user-auth-form';
import { cn } from '@/lib/utils';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Metadata } from 'next';
import Head from 'next/head';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to the Gambit Training App'
};

export default async function LoginPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/home');
  }

  return (
    <div className="container flex flex-col items-center justify-center w-screen h-screen">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.chevronLeft className="w-4 h-4 mr-2" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex flex-row items-center justify-center">
            <Image
              src="/ag_logo_black.png"
              alt="AG Logo"
              width={48}
              height={48}
            />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-sm text-center text-muted-foreground">
          <Link
            href="/register"
            className="underline hover:text-brand underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
