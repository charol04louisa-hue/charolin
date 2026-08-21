import type { ReactNode } from "react";
import { PLACEHOLDER_LABEL } from "@/lib/links";

/**
 * Renders a CTA as a real link when a destination exists,
 * otherwise as a clearly marked placeholder (never a broken link).
 */
export function CtaLink({
  href,
  children,
  className = "",
  external = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={PLACEHOLDER_LABEL}
        className={`${className} opacity-60 cursor-not-allowed`}
      >
        {children}
        <span className="ml-1 text-[10px] font-mono uppercase tracking-wider text-primary/70">
          {PLACEHOLDER_LABEL}
        </span>
      </span>
    );
  }
  const isHash = href.startsWith("#") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={className}
      target={!isHash && external ? "_blank" : undefined}
      rel={!isHash && external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
