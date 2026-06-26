import { Check, Sparkles, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { weCanHelpWith, clientProvides } from "@/content/proposal";

export function CollaborationSection() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Working together
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            You bring the brand. We build it loud.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A clean split of responsibilities keeps the project fast and on-brand.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* What we can handle */}
          <Card className="border-border bg-card">
            <CardContent className="p-7 sm:p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Sparkles className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold">
                We can take care of
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Optional extras we&apos;ll handle if you need them.
              </p>
              <ul className="mt-6 space-y-5">
                {weCanHelpWith.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-brand" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What the client provides */}
          <Card className="border-border bg-card">
            <CardContent className="p-7 sm:p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-foreground">
                <Package className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold">
                What we&apos;ll need from you
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Supplied by Cheeky Media so we can hit the ground running.
              </p>
              <ul className="mt-6 space-y-5">
                {clientProvides.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-accent2" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
