import { Check, Info, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { hosting } from "@/content/proposal";

export function HostingSection() {
  return (
    <section id="hosting" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Hosting &amp; running costs
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Fast, secure hosting on Vercel.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{hosting.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {hosting.plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.recommended
                  ? "relative border-brand bg-card ring-1 ring-brand/40"
                  : "border-border bg-card"
              }
            >
              <CardContent className="flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={
                        plan.recommended
                          ? "flex size-9 items-center justify-center rounded-lg bg-brand/15 text-brand"
                          : "flex size-9 items-center justify-center rounded-lg bg-secondary text-foreground"
                      }
                    >
                      <Server className="size-4.5" />
                    </span>
                    <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
                  </div>
                  <Badge
                    variant={plan.recommended ? "default" : "secondary"}
                    className={plan.recommended ? "bg-brand text-brand-foreground" : ""}
                  >
                    {plan.tag}
                  </Badge>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-heading text-4xl font-bold">{plan.price}</span>
                  {plan.priceNote && (
                    <span className="pb-1 text-sm text-muted-foreground">
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={
                          plan.recommended
                            ? "mt-0.5 size-4 shrink-0 text-brand"
                            : "mt-0.5 size-4 shrink-0 text-muted-foreground"
                        }
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitation && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4 text-sm text-muted-foreground">
                    <Info className="mt-0.5 size-4 shrink-0 text-accent2" />
                    <span>{plan.limitation}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-6 sm:p-7">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Our recommendation
          </p>
          <p className="mt-3 text-muted-foreground">{hosting.recommendation}</p>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">{hosting.currencyNote}</p>
      </div>
    </section>
  );
}
