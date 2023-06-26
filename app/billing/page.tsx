import {
  getActiveProductsWithPrices,
  getSession,
  getSubscription,
  getUserDetails
} from '@/app/supabase-server';
import { DashboardHeader, DashboardSubHeader } from '@/components/header';
import { DashboardShell } from '@/components/shell';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import ManageSubscriptionButton from './manage-subscription-button';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Pricing } from './pricing';

export default async function Billing() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  if (!session) {
    return redirect('/login');
  }

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency!,
      minimumFractionDigits: 0
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-8">
        <div>
          <BillingCard
            title="Your Plan"
            description={
              subscription
                ? `You are currently on the ${subscription?.prices?.products?.name} plan.`
                : 'You are not currently subscribed to any plan.'
            }
            footer={<ManageSubscriptionButton session={session} />}
          >
            {subscription ? (
              `${subscriptionPrice}/${subscription?.prices?.interval}`
            ) : (
              <p>Choose your plan</p>
            )}
          </BillingCard>
        </div>
        {/* <Card>
          <CardHeader>
            <CardTitle>Pricing Plans</CardTitle>
          </CardHeader>
        </Card> */}
        <DashboardSubHeader
          heading="Choose your plan"
          text="Annual and monthly options."
        />
        <Pricing
          user={session?.user}
          products={products}
          subscription={subscription}
        />
      </div>
    </DashboardShell>
  );
}

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function BillingCard({ title, description, footer, children }: Props) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardDescription className="font-bold">{children}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
          {footer}
        </CardFooter>
      </Card>
    </div>
  );
}
