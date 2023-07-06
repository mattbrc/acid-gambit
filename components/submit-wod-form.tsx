import { CreditCard } from 'lucide-react';

import { Icons } from '@/components/icons';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';

export function SubmitWodForm() {
  return (
    <div>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="month">hours</Label>
            <Select>
              <SelectTrigger id="month">
                <SelectValue placeholder="0" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="minutes">minutes</Label>
            <Select>
              <SelectTrigger id="minutes">
                <SelectValue placeholder="0" />
              </SelectTrigger>
              <SelectContent>
                <ScrollArea className="w-18 h-72">
                  <div>
                    {Array.from({ length: 61 }, (_, i) => (
                      <SelectItem key={i} value={`${i}`}>
                        {i}
                      </SelectItem>
                    ))}
                  </div>
                </ScrollArea>
                {/* {Array.from({ length: 61 }, (_, i) => (
                  <SelectItem key={i} value={`${i}`}>
                    {i}
                  </SelectItem>
                ))} */}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="month">seconds</Label>
            <Select>
              <SelectTrigger id="seconds">
                <SelectValue placeholder="0" />
              </SelectTrigger>
              <SelectContent>
                <ScrollArea className="w-18 h-72">
                  {Array.from({ length: 61 }, (_, i) => (
                    <SelectItem key={i} value={`${i}`}>
                      {i}
                    </SelectItem>
                  ))}
                </ScrollArea>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit WOD Time</Button>
      </CardFooter>
    </div>
  );
}
