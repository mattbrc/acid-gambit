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
import { Separator } from '@/components/ui/separator';

export function LearnCard() {
  return (
    <div className="pt-2 pb-2">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Training Resourses</CardTitle>
          <CardDescription>
            Everything to get you started, answer questions, and get you
            involved in the community. For technical support, head to Discord.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="area">Learn</Label>
              <a
                href="https://guide.acidgambit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">Training Guide</Button>
              </a>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="security-level">Community</Label>
              <a
                href="https://discord.gg/c4CMCs7j3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">Discord</Button>
              </a>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="area">Read</Label>
              <a
                href="https://acidgambit.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">AG Blog</Button>
              </a>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="security-level">Run Club</Label>
              <a
                href="https://strava.app.link/xOUgXJDuOAb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">Strava</Button>
              </a>
            </div>
          </div>
        </CardContent>
        <CardContent>
          <Separator className="my-4" />
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-center">
              Have feedback or want to request a feature? Drop it here.
            </h4>
          </div>
        </CardContent>
        <CardFooter>
          <a
            href="https://tally.so/r/wb9DZg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="secondary" className="w-full">
              Feedback/Feature Requests
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
