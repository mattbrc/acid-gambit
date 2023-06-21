'use client';

import { DashboardSubHeader } from '@/components/header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Database } from '@/types_db';
import Link from 'next/link';

type Program = Database['public']['Tables']['programs']['Row'];

interface ProgramListProps {
  programs: Program[];
}

export function ProgramList({ programs }: ProgramListProps) {
  return (
    <div className="pt-2 pb-2">
      <DashboardSubHeader
        heading="Select a Training Program"
        text="So many options!"
      />
      <div>
        {programs?.map((program, index) => (
          <ProgramCard
            key={index}
            title={program.program_name}
            description={program.program_description}
            type={program.program_type}
          />
        ))}
      </div>
    </div>
  );
}

interface ProgramCardProps {
  title: string | null;
  description: string | null;
  type: string | null;
}

const ProgramCard = ({ title, description, type }: ProgramCardProps) => {
  return (
    <div className="pt-3">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardDescription>{type}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4"></CardContent>
        {/* <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Select a Training Program</CardTitle>
          <CardDescription>So many options!</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Separator />
        </CardContent> */}
        <CardFooter>
          <Link className="w-full" href="/training">
            <Button className="w-full">Start Program</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
