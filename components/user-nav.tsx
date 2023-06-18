import {
  CreditCard,
  Dumbbell,
  GraduationCap,
  Home,
  LogOut,
  Pizza,
  User
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import SignOutButton from './sign-out-button';

interface UserNavProps {
  name: string | null;
  email: string;
}

export function UserNav({ name, email }: UserNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative w-8 h-8 rounded-full">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            {name !== null ? (
              <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
            ) : (
              <AvatarFallback>{email.charAt(0).toUpperCase()}</AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/home">
            <DropdownMenuItem>
              <Home className="w-4 h-4 mr-2" />
              <span>Home</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/training">
            <DropdownMenuItem>
              <Dumbbell className="w-4 h-4 mr-2" />
              <span>Training Dashboard</span>
            </DropdownMenuItem>
          </Link>
          <a
            href="https://guide.acidgambit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownMenuItem>
              <GraduationCap className="w-4 h-4 mr-2" />
              {/* <Link href="https://guide.acidgambit.com">Learn</Link> */}
              Learn
            </DropdownMenuItem>
          </a>
          <Link href="/nutrition">
            <DropdownMenuItem>
              <Pizza className="w-4 h-4 mr-2" />
              <span>Nutrition</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/account">
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/billing">
            <DropdownMenuItem>
              <CreditCard className="w-4 h-4 mr-2" />
              <span>Billing</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="w-4 h-4 mr-2" />
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
