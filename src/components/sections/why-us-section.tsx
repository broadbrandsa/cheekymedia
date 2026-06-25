import { whyUs } from "@/content/proposal";

export function WhyUsSection() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => (
            <div key={item.label}>
              <div className="font-heading text-5xl font-bold text-brand sm:text-6xl">
                {item.stat}
              </div>
              <div className="mt-3 font-heading text-lg font-semibold">{item.label}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
