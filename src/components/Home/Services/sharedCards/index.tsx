// Components
import { CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@components/ui/card";

// Utils
import { cn } from "@/lib/utils";


type Props = {
    title: string;
    description: string;
    className?: string;
};

export function ServiceCard({ title, description, className} : Props) {
    return (
        <Card
          className={cn(
            "border-primary/20 shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
            className
          )}
        >
          <CardHeader className="pb-2">
            <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary/50 text-primary/60 ring-1 ring-secondary/90">
              <CheckCircle2 className=" w-full" aria-hidden="true" />
            </div>
            <CardTitle className="text-xl text-foreground">{title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-md leading-relaxed text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      );
    }
    