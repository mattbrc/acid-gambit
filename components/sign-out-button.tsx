'use client';

import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  return (
    <div>
      <form action="/auth/signout" method="post">
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            router.refresh();
            router.push('/login');
          }}
          type="submit"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}
