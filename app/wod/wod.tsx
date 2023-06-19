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
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { format } from 'path';
import { useEffect, useState } from 'react';
import { Database } from 'types_db';

type WorkoutData = {
  workout: Database['public']['Tables']['wods']['Row']['workout'];
  title: Database['public']['Tables']['wods']['Row']['title'];
  notes: Database['public']['Tables']['wods']['Row']['notes'];
};
// type Workout = Database['public']['Tables']['wods']['Row']['workout'];
// type WorkoutTitle = Database['public']['Tables']['wods']['Row']['title'];
// type WorkoutNotes = Database['public']['Tables']['wods']['Row']['notes'];

interface Props {
  date: String | null;
  workoutDetails: WorkoutData | null;
}

export function WorkoutOfTheDay({ date, workoutDetails }: Props) {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const workoutData2 = {
    a: '100m shuttle run (50m down and back)',
    b: '20 devils press'
  };

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
                {/* <li>100m shuttle run (50m down and back) +</li>
                <li>20 devils press +</li>
                <li>20 walking DB lunges</li> */}
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
  );
}
