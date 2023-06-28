'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Database } from 'types_db';

type WorkoutData = {
  workout: Database['public']['Tables']['wods']['Row']['workout'];
  title: Database['public']['Tables']['wods']['Row']['title'];
  notes: Database['public']['Tables']['wods']['Row']['notes'];
};

type WodTime = Database['public']['Tables']['user_completed_wods']['Row'];

interface Props {
  date: String | null;
  workoutDetails: WorkoutData | null;
  wodTimes: WodTime[] | null;
}

export function WorkoutOfTheDay({ date, workoutDetails, wodTimes }: Props) {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  if (workoutDetails === null) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{date}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="necessary" className="flex flex-col space-y-1">
              <span>Looks like Matt forgot to add today's WOD.</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Go blow him up on{' '}
                <a
                  className="underline text-emerald-400"
                  href="https://instagram.com/acidgambit"
                >
                  instagram
                </a>{' '}
                until he fixes it :)
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

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{date}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="necessary" className="flex flex-col space-y-1">
              <span>{workoutDetails.title}</span>
              <span className="font-normal leading-snug text-muted-foreground">
                <ul>
                  {workoutDetails.workout &&
                    Object.entries(workoutDetails.workout).map(
                      ([section, exercise], index) => (
                        <li key={index}>{exercise}</li>
                      )
                    )}
                </ul>
              </span>
              <span className="pt-6 font-normal leading-snug text-muted-foreground">
                {workoutDetails.notes}
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
      <pre>{JSON.stringify(wodTimes, null, 2)}</pre>
    </div>
  );
}
