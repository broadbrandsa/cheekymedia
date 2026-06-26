import { AlertTriangle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { audit, digitalAudit } from "@/content/proposal";

const priorityStyles: Record<string, string> = {
  critical: "border-red-500/30 bg-red-500/10 text-red-300",
  high: "border-brand/40 bg-brand/10 text-brand",
  medium: "border-accent2/40 bg-accent2/10 text-accent2",
  low: "border-border bg-secondary text-muted-foreground",
};

const priorityDot: Record<string, string> = {
  critical: "bg-red-400",
  high: "bg-brand",
  medium: "bg-accent2",
  low: "bg-muted-foreground",
};

function scoreColor(score: number) {
  if (score < 40) return "text-red-400";
  if (score < 55) return "text-accent2";
  if (score < 70) return "text-brand";
  return "text-emerald-400";
}

function barColor(score: number) {
  if (score < 40) return "bg-red-400";
  if (score < 55) return "bg-accent2";
  if (score < 70) return "bg-brand";
  return "bg-emerald-400";
}

function PriorityBadge({ priority }: { priority: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${priorityStyles[priority]}`}
    >
      <span className={`size-1.5 rounded-full ${priorityDot[priority]}`} />
      {priority}
    </span>
  );
}

function Finding({ text, priority }: { text: string; priority: string }) {
  return (
    <li className="flex flex-col gap-2 border-t border-border py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <p className="text-sm text-muted-foreground sm:max-w-3xl">{text}</p>
      <PriorityBadge priority={priority} />
    </li>
  );
}

export function AuditSection() {
  const { overall } = digitalAudit;

  return (
    <section id="audit" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header + intro */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Current website audit
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Cheeky Media, today.</h2>
          <p className="mt-4 text-lg text-muted-foreground">{audit.intro}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {audit.builtOn.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Narrative issues */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {audit.issues.map((issue, i) => (
            <Card key={issue.title} className="border-border bg-card">
              <CardContent className="flex h-full flex-col p-6 sm:p-7">
                <span className="font-mono text-sm text-brand">0{i + 1}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold">{issue.title}</h3>

                <div className="mt-5 space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      What you have
                    </p>
                    <p className="mt-1 text-muted-foreground">{issue.have}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-red-300/80">
                      The problem
                    </p>
                    <p className="mt-1 text-muted-foreground">{issue.problem}</p>
                  </div>
                  <div className="rounded-xl border border-brand/30 bg-brand/5 p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-brand">
                      How we solve it
                    </p>
                    <p className="mt-1 text-foreground/90">{issue.solve}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Digital audit dashboard */}
        <div className="mt-20 border-t border-border pt-14">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Digital audit · cheekymedia.co.za
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{digitalAudit.meta}</p>

          {/* Overall score */}
          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.4fr]">
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-start gap-2 p-7 sm:p-8">
                <div className="flex items-end gap-2">
                  <span className={`font-heading text-7xl font-bold ${scoreColor(overall.score)}`}>
                    {overall.score}
                  </span>
                  <span className="pb-3 text-2xl text-muted-foreground">/{overall.max}</span>
                </div>
                <p className="font-heading text-lg font-semibold">{overall.label}</p>
                <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-300">
                  <AlertTriangle className="size-3.5" />
                  {overall.status}
                </span>
                <p className="mt-1 text-sm text-muted-foreground">{overall.note}</p>
              </CardContent>
            </Card>

            {/* Platform scores */}
            <Card className="border-border bg-card">
              <CardContent className="p-7 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Platform scores
                </p>
                <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
                  {digitalAudit.platformScores.map((p) => (
                    <div key={p.label}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-muted-foreground">{p.label}</span>
                        <span className={`font-heading text-lg font-semibold ${scoreColor(p.score)}`}>
                          {p.score}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className={`h-full rounded-full ${barColor(p.score)}`}
                          style={{ width: `${p.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metric + finding groups */}
          {digitalAudit.groups.map((group) => (
            <div key={group.title} className="mt-12">
              <h3 className="font-heading text-xl font-semibold">{group.title}</h3>

              {group.metrics.length > 0 && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {group.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-border bg-card p-4"
                    >
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {m.label}
                      </p>
                      <p className="mt-1.5 font-heading font-semibold">{m.value}</p>
                      <p className="mt-0.5 text-xs text-brand">{m.note}</p>
                    </div>
                  ))}
                </div>
              )}

              <ul className="mt-6">
                {group.findings.map((f, i) => (
                  <Finding key={i} text={f.text} priority={f.priority} />
                ))}
              </ul>
            </div>
          ))}

          {/* Strengths */}
          <div className="mt-14">
            <h3 className="font-heading text-xl font-semibold">Brand &amp; content strengths</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {digitalAudit.strengths.map((s, i) => (
                <Card key={i} className="border-emerald-500/20 bg-emerald-500/5">
                  <CardContent className="flex gap-3 p-5">
                    <Star className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="text-sm text-foreground/90">{s}</p>
                      <span className="mt-2 inline-block text-xs font-medium uppercase tracking-wider text-emerald-400">
                        Asset to leverage
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Top recommendations */}
          <div className="mt-14">
            <h3 className="font-heading text-xl font-semibold">Top recommendations</h3>
            <ol className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {digitalAudit.recommendations.map((r) => (
                <li
                  key={r.n}
                  className="flex gap-4 border-t border-border py-6"
                >
                  <span className="font-mono text-xl font-semibold text-brand">{r.n}</span>
                  <div>
                    <p className="font-heading font-semibold">{r.title}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{r.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
