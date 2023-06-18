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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/icons';

export function WodCard() {
  return (
    <div className="pt-2 pb-2">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Workout of the Day</CardTitle>
          <CardDescription>View today's WOD.</CardDescription>
        </CardHeader>

        <CardFooter>
          <Button className="w-full">WOD</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
