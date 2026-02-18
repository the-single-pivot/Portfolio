/* eslint-disable @next/next/no-img-element */
import { AppLogo } from "@/components/app-logo";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function AppsSection() {
  if (!DATA.apps?.length) return null;

  return (
    <section id="apps" className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold">Apps I’ve worked with</h2>
      </BlurFade>
      <div className="flex flex-col gap-8">
        {DATA.apps.map((app, index) => (
          <BlurFade
            key={app.title + app.href}
            delay={BLUR_FADE_DELAY * 2 + index * 0.05}
          >
            <Link
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-3 group transition-colors hover:opacity-80"
            >
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                {app.logoUrl ? (
                  <AppLogo
                    src={app.logoUrl}
                    alt={app.title}
                    title={app.title}
                    className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
                  />
                ) : (
                  <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden flex-none bg-muted" />
                )}
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {app.title}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" aria-hidden />
                  </div>
                  {app.description && (
                    <p className="font-sans text-sm text-muted-foreground line-clamp-2">
                      {app.description}
                    </p>
                  )}
                  {("downloads" in app && app.downloads != null) || ("dau" in app && app.dau != null) ? (
                    <div className="flex flex-wrap gap-x-3 gap-y-0 text-xs text-muted-foreground mt-0.5">
                      {"downloads" in app && app.downloads != null && (
                        <span className="tabular-nums">Downloads <span className="text-foreground font-medium">{String(app.downloads)}</span></span>
                      )}
                      {"dau" in app && app.dau != null && (
                        <span className="tabular-nums">DAU <span className="text-foreground font-medium">{String(app.dau)}</span></span>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
