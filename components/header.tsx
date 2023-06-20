import { useRouter } from 'next/navigation';

interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  children
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-3xl font-heading md:text-4xl">{heading}</h1>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  );
}

export function DashboardSubHeader({
  heading,
  text,
  children
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-2xl font-heading md:text-3xl">{heading}</h1>
        {text && <p className="text-md text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  );
}
