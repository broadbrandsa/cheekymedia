import { Card, CardContent } from "@/components/ui/card";
import { problems, services } from "@/content/proposal";

export function CaseSection() {
  return (
    <section id="case" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            The case for a rebuild
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            The work is world-class. The website should keep up.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cheeky Media&apos;s reel speaks for itself — commercials, film, TV, corporate
            and digital. The site in front of it is where we focus.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Card key={p.title} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-brand">0{i + 1}</span>
                  <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            We carry your full offering across
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {services.map((s) => (
              <span
                key={s.name}
                className="group relative rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-brand"
                title={s.desc}
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
