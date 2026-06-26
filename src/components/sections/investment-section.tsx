import { Check, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { investment, included, client, sow } from "@/content/proposal";

export function InvestmentSection() {
  return (
    <section id="investment" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Investment
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            One number. Everything included.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* Price */}
            <div className="relative border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute -top-24 -left-10 size-72 rounded-full bg-brand/15 blur-3xl" />
              <div className="relative">
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {investment.label}
                </span>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-heading text-6xl font-bold sm:text-7xl">
                    {investment.amount}
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground">{investment.note}</p>

                <div className="mt-8 space-y-2.5">
                  {investment.terms.map((t) => (
                    <div key={t} className="flex items-center gap-2.5 text-sm">
                      <span className="size-1.5 rounded-full bg-brand" />
                      {t}
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    size="lg"
                    nativeButton={false}
                    className="w-full bg-brand text-brand-foreground hover:bg-brand/90 sm:w-auto"
                    render={<a href="#contact" />}
                  >
                    Approve &amp; start
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    nativeButton={false}
                    className="w-full sm:w-auto"
                    render={<a href={sow.file} download />}
                  >
                    <Download className="size-4" />
                    {sow.label}
                  </Button>
                </div>
              </div>
            </div>

            {/* Included list */}
            <div className="p-8 sm:p-10">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Everything in the box
              </p>
              <ul className="mt-5 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Prepared for {client.name}. Scope and price fixed for the deliverables listed
          above; out-of-scope items quoted separately.
        </p>
      </div>
    </section>
  );
}
