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
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{investment.heading}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{investment.intro}</p>
        </div>

        {/* Two options */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {investment.options.map((opt) => (
            <div
              key={opt.id}
              className={
                opt.highlight
                  ? "relative overflow-hidden rounded-3xl border border-brand bg-card p-8 ring-1 ring-brand/40 sm:p-10"
                  : "relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10"
              }
            >
              {opt.highlight && (
                <div className="pointer-events-none absolute -top-24 -right-10 size-72 rounded-full bg-brand/15 blur-3xl" />
              )}
              <div className="relative flex h-full flex-col">
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {opt.name}
                </span>

                <div className="mt-3 flex items-end gap-2">
                  <span className="font-heading text-5xl font-bold sm:text-6xl">
                    {opt.price}
                  </span>
                  {"priceSuffix" in opt && opt.priceSuffix && (
                    <span className="pb-2 text-lg text-muted-foreground">
                      {opt.priceSuffix}
                    </span>
                  )}
                </div>
                <span className="mt-2 inline-block text-sm font-medium text-brand">
                  {opt.cadence}
                </span>

                <p className="mt-4 text-muted-foreground">{opt.note}</p>

                <div className="mt-7 space-y-3 border-t border-border pt-7">
                  {opt.terms.map((t) => (
                    <div key={t} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  nativeButton={false}
                  className="mt-8 w-full bg-brand text-brand-foreground hover:bg-brand/90"
                  render={<a href="#contact" />}
                >
                  Approve &amp; start
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Shared build inclusions */}
        <div className="mt-8 rounded-3xl border border-border bg-secondary/40 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Every option includes the full build
              </p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6">
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

        <p className="mt-5 text-sm text-muted-foreground">
          Prepared for {client.name}. Scope fixed for the deliverables listed above;
          out-of-scope items quoted separately.
        </p>
      </div>
    </section>
  );
}
