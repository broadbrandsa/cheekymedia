import { process } from "@/content/proposal";

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            How we get there
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Live in about four weeks.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A milestone-driven process with sign-off at each stage — no surprises, no
            black box.
          </p>
        </div>

        <ol className="mt-12 space-y-0">
          {process.map((p, i) => (
            <li
              key={p.step}
              className="group relative grid gap-2 border-t border-border py-7 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-2xl font-semibold text-brand sm:text-3xl">
                {p.step}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold">{p.title}</h3>
                <p className="mt-1.5 max-w-xl text-muted-foreground">{p.body}</p>
              </div>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-right">
                {p.duration}
              </span>
              {i === process.length - 1 && (
                <span className="absolute -bottom-px left-0 h-px w-full bg-border" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
