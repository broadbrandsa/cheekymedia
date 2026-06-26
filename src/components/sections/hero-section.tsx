import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero, client, author } from "@/content/proposal";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <span className="size-1.5 rounded-full bg-brand" />
          {hero.eyebrow}
        </span>

        <h1 className="mt-7 max-w-4xl text-balance text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
          {hero.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
          {hero.sub}
        </p>

        <div className="mt-10 flex items-center gap-4">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Prepared for
          </span>
          <span className="h-8 w-px bg-border" />
          <Image
            src={client.logo}
            alt={client.name}
            width={765}
            height={297}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            size="lg"
            nativeButton={false}
            className="bg-brand text-brand-foreground hover:bg-brand/90"
            render={<a href="#scope" />}
          >
            {hero.primaryCta}
            <ArrowRight className="size-4" />
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="#investment" />}>
            {hero.secondaryCta}
          </Button>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-x-6 gap-y-8 border-t border-border pt-8">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">By</dt>
            <dd className="mt-1 font-heading font-semibold">{author.company}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Date</dt>
            <dd className="mt-1 font-heading font-semibold">{author.date}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Valid</dt>
            <dd className="mt-1 font-heading font-semibold">{author.validForDays} days</dd>
          </div>
        </dl>

        <a
          href="#case"
          className="mt-14 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4 animate-bounce" />
          Why rebuild
        </a>
      </div>
    </section>
  );
}
