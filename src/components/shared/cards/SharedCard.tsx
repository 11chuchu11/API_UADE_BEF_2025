import {} from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import {Card, CardHeader, CardTitle, CardContent} from "../../ui/card";
import { cn } from '../../../lib/utils';


type Props = {
    title: string;
    description: string;
    className?: string;
};

export function ServiceCard({ title, description, className} : Props) {
    return (
        <Card
          className={cn(
            "border-emerald-100 shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
            className
          )}
        >
          <CardHeader className="pb-2">
            <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            </div>
            <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm leading-relaxed text-slate-600">{description}</p>
          </CardContent>
        </Card>
      );
    }
    