'use client';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { userAuthSchema } from '@/lib/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export default function StravaAuth() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const clientId = process.env.STRAVA_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URL;

  const stravaConnected = false;

  async function handleStravaAuth() {
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}/redirect&scope=activity:read`;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Integrations</h1>
      <div>
        <label className="label">
          <span className="label-text">Strava</span>
        </label>
        {stravaConnected ? (
          <button disabled={true} className="btn">
            ✅ Connected
          </button>
        ) : (
          <button onClick={handleStravaAuth} className="btn">
            Connect to Strava
          </button>
        )}
      </div>
    </div>
  );
}
