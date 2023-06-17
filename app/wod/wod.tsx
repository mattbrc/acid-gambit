'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface Props {
  date: String | null;
}

export function WorkoutOfTheDay({ date }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{date}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="necessary" className="flex flex-col space-y-1">
            <span>4 Rounds for Time:</span>
            <span className="font-normal leading-snug text-muted-foreground">
              <ul>
                <li>100m shuttle run (50m down and back) +</li>
                <li>20 devils press +</li>
                <li>20 walking DB lunges</li>
              </ul>
            </span>
            <span className="pt-6 font-normal leading-snug text-muted-foreground">
              Weights: 45/25# scaled.
            </span>
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button disabled={true} variant="outline" className="w-full">
          View Previous WODs
        </Button>
      </CardFooter>
    </Card>
  );
}
