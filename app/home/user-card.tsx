import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Circle, Dumbbell, Star } from 'lucide-react';

interface UserCardProps {
  name: string | null;
  email: string;
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>Profile</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              {name !== null ? (
                <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
              ) : (
                <AvatarFallback>{email.charAt(0).toUpperCase()}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Circle className="w-3 h-3 mr-1 fill-emerald-400 text-emerald-400" />
            Gambit Pro
          </div>
          <div className="flex items-center">
            <Dumbbell className="w-3 h-3 mr-1" />
            69 workouts completed
          </div>
          <div className="flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Member Since April 2023
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
