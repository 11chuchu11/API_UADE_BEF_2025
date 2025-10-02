import * as React from "react";
import { Card } from "@components/ui/card";
import { cn } from "@/lib/utils";
import { useData } from "@/Hooks/useData";
import { InsuranceRow } from "./InsuranceRow";
import { AddInsuranceBar } from "./AddInsuranceBar";
import type { Insurance } from "./types";

type Props = { className?: string };

export const InsurancesSection: React.FC<Props> = ({ className }) => {
    const { data, updateData } = useData();
    const items: Insurance[] = (data?.insurances as Insurance[]) ?? [];

    const upsert = (next: Insurance[]) => updateData({ insurances: next });

    const handleToggle = (it: Insurance) =>
        upsert(items.map((x) => (x.id === it.id ? { ...x, active: !x.active } : x)));

    const handleDelete = (it: Insurance) =>
        upsert(items.filter((x) => x.id !== it.id));

    const handleSave = (it: Insurance) =>
        upsert(items.map((x) => (x.id === it.id ? { ...x, ...it } : x)));

    const handleAdd = (it: Insurance) =>
        upsert([...(items ?? []), it]);

    return (
        <section className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
            <div className="mb-6 mt-8 sm:mt-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-foreground">
                    Obras Sociales disponibles
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-primary font-bold">
                    Agregá, editá o desactivá las obras sociales con las que trabajás
                </p>
            </div>

            <Card className="rounded-2xl bg-background ring-1 ring-violet-200/60 shadow-sm">
                <div className="px-4 sm:px-5 py-4">
                    <p className="text-sm sm:text-md font-semibold text-primary/100">
                        Configuración de las Obras Sociales
                    </p>
                </div>

                <div className="px-4 sm:px-5 pb-2 divide-y divide-secondary">
                    {items.map((it) => (
                        <InsuranceRow
                            key={it.id}
                            item={it}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                            onSave={handleSave}
                        />
                    ))}
                </div>

                <AddInsuranceBar onAdd={handleAdd} />
            </Card>
        </section>
    );
};
