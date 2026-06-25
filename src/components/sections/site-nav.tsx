"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/content/proposal";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-heading text-lg font-semibold">
          <span className="inline-block size-2.5 rounded-full bg-brand" />
          Cheeky<span className="text-muted-foreground">Media</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            className="bg-brand text-brand-foreground hover:bg-brand/90"
            render={<a href="#investment" />}
          >
            Approve &amp; start
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button
              nativeButton={false}
              className="mt-2 bg-brand text-brand-foreground hover:bg-brand/90"
              render={<a href="#investment" onClick={() => setOpen(false)} />}
            >
              Approve &amp; start
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
