'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Icons } from '@/components/icons';
import { ReactNode } from 'react';
import Link from 'next/link';
import { postData } from '@/utils/helpers';
import { Session } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

interface BillingProps extends React.HTMLAttributes<HTMLFormElement> {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export function BillingForm({
  title,
  description,
  footer,
  children,
  className
}: BillingProps) {
  const router = useRouter();
  const redirectToCustomerPortal = async () => {
    try {
      const { url } = await postData({
        url: '/api/create-portal-link'
      });
      router.push(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
  };
  return (
    <form className={cn(className)}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {children}
        <CardContent>
          <p>Manage your subscription on Stripe.</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
          {/* <button
            type="submit"
            className={cn(buttonVariants())}
            onClick={redirectToCustomerPortal}
            // disabled={!session}
          >
            Open customer portal
          </button> */}
          {footer}
        </CardFooter>
      </Card>
    </form>
  );
}
