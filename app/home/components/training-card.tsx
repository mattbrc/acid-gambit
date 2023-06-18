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

interface UserCardProps {
  program: string | null;
}

export function TrainingCard({ program }: UserCardProps) {
  return (
    <div className="pt-2 pb-2">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Start a Training Program</CardTitle>
          <CardDescription>Juh</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {program !== null ? <p>{program}</p> : <p>No current program.</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Training Dashboard</Button>
        </CardFooter>
      </Card>
    </div>
  );
}