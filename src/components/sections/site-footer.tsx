import Image from "next/image";
import { author } from "@/content/proposal";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-3">
          <Image
            src={author.logo}
            alt={author.company}
            width={642}
            height={160}
            className="h-6 w-auto self-start"
          />
          <p className="max-w-xs text-sm text-muted-foreground">{author.strapline}</p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
          <span>
            Prepared for {author.preparedFor} · {author.date}
          </span>
          <a href={`mailto:${author.email}`} className="transition-colors hover:text-foreground">
            {author.contactName} — {author.email}
          </a>
          <span>{author.phone}</span>
        </div>
      </div>
    </footer>
  );
}
