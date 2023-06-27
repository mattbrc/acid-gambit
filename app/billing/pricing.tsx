'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Icons } from '@/components/icons';
import { ReactNode } from 'react';
import Link from 'next/link';
import { postData } from '@/utils/helpers';
import { Session, User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { getStripe } from '@/utils/stripe-client';
import { Database } from '@/types_db';
import { useState } from 'react';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];

interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

type BillingInterval = 'lifetime' | 'year' | 'month';

export function Pricing({ user, products, subscription }: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (price.product_id === subscription?.prices?.products?.id) {
      return router.push('/account');
    }
    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  return (
    <div>
      <div className="grid w-full items-start gap-10 rounded-lg border-2 border-emerald-400 p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">Pro Annual</h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="w-4 h-4 mr-2" /> Save 50% with Annual
            </li>
            <li className="flex items-center">
              <Icons.check className="w-4 h-4 mr-2" /> Unlimited Program Access
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
            <h4 className="text-4xl font-bold">$10/mo</h4>
            <p className="text-sm font-medium text-muted-foreground">
              $120 billed every year.
            </p>
          </div>
          {/* <Button
            type="button"
            onClick={() => handleCheckout(products[7].prices[0])}
            variant={'ag'}
            disabled={priceIdLoading !== undefined}
          >
            {priceIdLoading && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            {products[0].name === subscription?.prices?.products?.name
              ? 'Manage'
              : 'Subscribe'}
          </Button> */}
          <Button type="button" variant={'ag'} disabled={true}>
            Coming Soon
          </Button>
        </div>
      </div>
      <div className="my-8 grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">Pro Monthly</h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="w-4 h-4 mr-2" /> Unlimited Program Access
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
            <h4 className="text-4xl font-bold">$19/mo</h4>
            <p className="text-sm font-medium text-muted-foreground">
              $19 billed monthly. Cancel anytime.
            </p>
          </div>
          {/* <Button
            type="button"
            onClick={() => handleCheckout(products[8].prices[0])}
            variant={'ag'}
            disabled={priceIdLoading !== undefined}
          >
            {priceIdLoading && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            {products[0].name === subscription?.prices?.products?.name
              ? 'Manage'
              : 'Subscribe'}
          </Button> */}
          <Button type="button" variant={'ag'} disabled={true}>
            Coming Soon
          </Button>
        </div>
      </div>
      {/* <pre>{JSON.stringify(products[7].prices[0], null, 2)}</pre> */}
    </div>
  );
}
