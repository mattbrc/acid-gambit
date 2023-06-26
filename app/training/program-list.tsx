'use client';

import { DashboardSubHeader } from '@/components/header';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Database } from '@/types_db';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';

type Program = Database['public']['Tables']['programs']['Row'];

interface ProgramListProps {
  programs: Program[];
  id: string | undefined;
}

export function ProgramList({ programs, id }: ProgramListProps) {
  return (
    <div className="pt-2 pb-2">
      <DashboardSubHeader
        heading="Select a Training Program"
        text="View program details + sample weeks"
      />
      <div>
        {programs?.map((program, index) => (
          <ProgramCard id={id} key={index} program={program} />
        ))}
      </div>
    </div>
  );
}

interface ProgramCardProps extends React.HTMLAttributes<HTMLFormElement> {
  id: string | undefined;
  program: Program;
}

const ProgramCard = ({ id, program, className }: ProgramCardProps) => {
  const router = useRouter();
  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  const handleNewProgram = async (programId: number, programName: string) => {
    setIsSaving(true);
    const response = await fetch('/api/update-program', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, programId, programName })
    });

    let responseData: { error?: string } = {};
    if (response.headers.get('content-type')?.includes('application/json')) {
      responseData = await response.json();
    }

    setIsSaving(false);

    if (!response?.ok) {
      let errorMessage = 'Your program was not updated. Please try again.';
      if (responseData.error) {
        errorMessage = responseData.error;
      }
      return toast({
        title: 'Something went wrong.',
        description: errorMessage,
        variant: 'destructive'
      });
    }
    toast({
      description: '✅ Your profile has been updated.'
    });

    router.refresh();
  };

  return (
    <div className="pt-3">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{program.program_name}</CardTitle>
          <CardDescription>{program.program_description}</CardDescription>
          <a
            href={
              'https://guide.acidgambit.com/programs/' + program.program_slug
            }
            target="_blank"
            rel="noopener noreferrer"
            className="pb-1 underline"
          >
            <CardDescription>Program details + sample week</CardDescription>
          </a>
          <div className="flex space-x-2">
            <Badge variant="secondary">{program.program_type}</Badge>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4"></CardContent>
        <CardFooter>
          <Link className="w-full" href="/training">
            <Button
              onClick={() => {
                if (program.id && program.program_name)
                  handleNewProgram(program.id, program.program_name);
              }}
              className={cn(buttonVariants(), className)}
              disabled={isSaving}
            >
              Start Program
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
