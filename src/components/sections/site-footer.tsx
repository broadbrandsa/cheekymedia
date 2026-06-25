import { client, author } from "@/content/proposal";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2 font-heading font-semibold">
          <span className="inline-block size-2.5 rounded-full bg-brand" />
          Cheeky<span className="text-muted-foreground">Media</span>
        </div>
        <p className="text-sm text-muted-foreground">
          {client.address}
        </p>
        <p className="text-sm text-muted-foreground">
          Proposal by {author.company} · {author.date}
        </p>
      </div>
    </footer>
  );
}
