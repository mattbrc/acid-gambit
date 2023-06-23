'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { profileSchema } from '@/lib/validations/user';
import { buttonVariants } from '@/components/ui/button';
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
import { toast } from '@/components/ui/use-toast';
import { Icons } from '@/components/icons';
import { Database } from '@/types_db';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

type User = Database['public']['Tables']['users']['Row'];

interface UserNameFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: User | null;
}

type FormData = z.infer<typeof profileSchema>;

export function UserProfileForm({
  user,
  className,
  ...props
}: UserNameFormProps) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.full_name || '',
      username: user?.username || '',
      bio: user?.bio || ''
    }
  });
  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsSaving(true);

    const response = await fetch(`/api/users/${user?.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        username: data.username,
        bio: data?.bio
      })
    });

    let responseData: { error?: string } = {};
    if (response.headers.get('content-type')?.includes('application/json')) {
      responseData = await response.json();
    }

    setIsSaving(false);

    if (!response?.ok) {
      let errorMessage = 'Your profile was not updated. Please try again.';
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
  }

  return (
    <div className="pt-2">
      <form
        className={cn(className)}
        onSubmit={handleSubmit(onSubmit)}
        {...props}
      >
        <Card>
          <CardContent className="pt-4">
            <div className="grid gap-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                size={32}
                {...register('name')}
                placeholder="Bruce Wayne"
              />
              <p className="text-sm text-muted-foreground">
                Please enter your full name or a display name you are
                comfortable with.
              </p>
              {errors?.name && (
                <p className="px-1 text-xs text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardContent>
            <div className="grid gap-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                className=""
                size={32}
                placeholder="batman69"
                {...register('username')}
              />
              {/* {user?.username ? (
                <Link href={'/u/' + user.username}>
                  <p className="text-sm underline text-muted-foreground">
                    app.acidgambit.com/u/{user.username}
                  </p>
                </Link>
              ) : (
                <p className="text-sm text-muted-foreground">
                  app.acidgambit.com/username
                </p>
              )} */}
              <p className="text-sm text-muted-foreground">
                Set your username.
              </p>
              {errors?.username && (
                <p className="px-1 text-xs text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardContent>
            <div className="grid gap-1">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                placeholder="Back in '82 I could throw a pigskin a quarter mile"
                className="resize-none"
                id="bio"
                {...register('bio')}
              />
              <p className="text-sm text-muted-foreground">
                Tell us about yourself.
              </p>
              {errors?.bio && (
                <p className="px-1 text-xs text-red-600">
                  {errors.bio.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <button
              type="submit"
              className={cn(buttonVariants(), className)}
              disabled={isSaving}
            >
              {isSaving && (
                <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
              )}
              <span>Save</span>
            </button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
