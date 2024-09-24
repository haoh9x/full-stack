import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Social } from "@/components/auth/social";

interface Props {
  headerTitle: string;
  headerDescription: string;
  children: React.ReactNode;
  backButtonHref: string;
  backButtonLabel: string;
}

export const FormWrapper = ({
  headerTitle,
  headerDescription,
  children,
  backButtonHref,
  backButtonLabel,
}: Props) => {
  return (
    <Card className="w-[380px] md:w-[480px]">
      <CardHeader className="items-center">
        <CardTitle>{headerTitle}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Social />
      </CardFooter>
      <CardFooter>
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
          <Link href={backButtonHref}>{backButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
