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
import { Database } from 'types_db';

type Workouts =
  Database['public']['Tables']['user_training']['Row']['completed_workouts'];
type Subscription = string | null | undefined;

interface UserCardProps {
  name: string | null;
  email: string;
  subscription: Subscription;
  workouts: Workouts;
}

export function UserCard({
  name,
  email,
  subscription,
  workouts
}: UserCardProps) {
  return (
    <div className="pt-2 pb-2">
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>Profile</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4 jutify-content-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                {name !== null ? (
                  <AvatarFallback>
                    {name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                ) : (
                  <AvatarFallback>
                    {email.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{name}</p>
                <p className="text-sm text-muted-foreground">{email}</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <div className="flex items-center pt-4">
              <Circle className="w-3 h-3 mr-1 fill-emerald-400 text-emerald-400" />
              {subscription ? `${subscription} Pro` : 'No Active Subscription'}
            </div>
            <div className="flex items-center pt-1">
              <Dumbbell className="w-3 h-3 mr-1" />
              {workouts ? workouts : 0} Workouts Completed
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
