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

export function LearnCard() {
  return (
    <div className="pt-2 pb-2">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Training Resourses</CardTitle>
          <CardDescription>Everything to get you started.</CardDescription>
        </CardHeader>

        <CardFooter>
          <a
            href="https://guide.acidgambit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full">Training Resources</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
