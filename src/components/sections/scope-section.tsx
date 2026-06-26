import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { deliverables, included, excluded } from "@/content/proposal";

export function ScopeSection() {
  return (
    <section id="scope" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            What you get
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A complete, cohesive website — built to convert.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Up to 15 core pages, a reusable component system, and everything wired up
            to launch. No loose ends.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d) => (
            <Card key={d.title} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
                  <Check className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14">
          <Tabs defaultValue="included">
            <TabsList>
              <TabsTrigger value="included">Included</TabsTrigger>
              <TabsTrigger value="excluded">Not included</TabsTrigger>
            </TabsList>

            <TabsContent value="included" className="mt-6">
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="excluded" className="mt-6">
              <p className="mb-4 text-sm text-muted-foreground">
                Out of scope for the fixed fee — happy to quote any of these separately.
              </p>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {excluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <X className="mt-0.5 size-5 shrink-0 opacity-60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
