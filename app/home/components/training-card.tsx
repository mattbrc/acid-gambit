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
import { Circle } from 'lucide-react';
import Link from 'next/link';

interface UserCardProps {
  program: string | null;
}

export function TrainingCard({ program }: UserCardProps) {
  return (
    <div className="pt-2 pb-2">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Training Dashboard</CardTitle>
          <CardDescription>
            Start/Continue your training program.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {program !== null ? (
              <div className="flex items-center">
                <Circle className="w-3 h-3 mr-1 text-emerald-400 fill-emerald-400" />
                <p>{program}</p>
              </div>
            ) : (
              <div className="flex items-center">
                <Circle className="w-3 h-3 mr-1 text-red-500 fill-red-500" />
                <p>No active program</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Link className="w-full" href="/training">
            <Button className="w-full">Training Dashboard</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
