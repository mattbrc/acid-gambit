'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="items-center space-x-2 md:flex">
        <Image src="/ag_logo_black.png" alt="AG Logo" width={30} height={30} />
      </Link>
    </div>
  );
}

export function HomeNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/home" className="items-center space-x-2 md:flex">
        <Image src="/ag_logo_black.png" alt="AG Logo" width={30} height={30} />
      </Link>
    </div>
  );
}
