import {
  CreditCard,
  Dumbbell,
  GraduationCap,
  Home,
  LogOut,
  Pizza,
  PlusCircle,
  Settings,
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
          <DropdownMenuItem>
            <Home className="w-4 h-4 mr-2" />
            <Link href="/home">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Dumbbell className="w-4 h-4 mr-2" />
            <Link href="/dashboard">Training Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <GraduationCap className="w-4 h-4 mr-2" />
            <Link href="https://guide.acidgambit.com">Learn</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Pizza className="w-4 h-4 mr-2" />
            <Link href="/nutrition">Nutrition</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User className="w-4 h-4 mr-2" />
            <Link href="/account">Account</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="w-4 h-4 mr-2" />
            <span>Billing</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
