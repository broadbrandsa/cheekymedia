import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { author } from "@/content/proposal";

export function CtaSection() {
  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/40 p-8 sm:p-14">
          <div className="pointer-events-none absolute -bottom-32 -right-20 size-96 rounded-full bg-brand/20 blur-[100px]" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Ready to give the work the site it deserves?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Pick the option that suits you and we&apos;ll book a kick-off this week.
              Questions first? Reach out — happy to walk through any of it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                nativeButton={false}
                className="bg-brand text-brand-foreground hover:bg-brand/90"
                render={
                  <a href={`mailto:${author.email}?subject=Cheeky Media website rebuild — approved`} />
                }
              >
                Approve the proposal
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={
                  <a href={`mailto:${author.email}?subject=Cheeky Media website rebuild — questions`} />
                }
              >
                Ask a question
              </Button>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:gap-10">
              <a
                href={`mailto:${author.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-brand"
              >
                <Mail className="size-4 text-brand" />
                {author.email}
              </a>
              <a
                href={`tel:${author.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-brand"
              >
                <Phone className="size-4 text-brand" />
                {author.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
