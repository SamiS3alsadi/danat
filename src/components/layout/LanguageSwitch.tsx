"use client";

import Link from "next/link";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Locale } from "@/i18n/translations";
import { pathFor, routeFromPathname } from "@/i18n/routes";

type Variant = "desktop" | "mobile";

const STYLES: Record<Variant, React.CSSProperties> = {
    desktop: {
        fontSize: '12px',
        fontWeight: 700,
        color: 'var(--accent-gold)',
        background: 'none',
        border: '1px solid var(--border-medium)',
        borderRadius: '999px',
        padding: '6px 14px',
        cursor: 'pointer',
        letterSpacing: '0.05em',
        transition: 'var(--transition-fast)',
        textDecoration: 'none',
    },
    mobile: {
        fontSize: '11px',
        fontWeight: 700,
        color: 'var(--accent-gold)',
        background: 'none',
        border: '1px solid var(--border-medium)',
        borderRadius: '999px',
        padding: '10px 16px',
        cursor: 'pointer',
        minWidth: '44px',
        minHeight: '44px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
    },
};

const LABELS: Record<Variant, Record<Locale, string>> = {
    desktop: { en: "العربية", ar: "English" },
    mobile: { en: "ع", ar: "EN" },
};

function SwitchLink({
    href,
    variant,
    locale,
    other,
}: {
    href: string;
    variant: Variant;
    locale: Locale;
    other: Locale;
}) {
    return (
        <Link
            href={href}
            hrefLang={other}
            lang={other}
            dir={other === "ar" ? "rtl" : "ltr"}
            style={STYLES[variant]}
            className={variant === "desktop" ? "hover:bg-gold/10 transition-colors" : undefined}
            aria-label={other === "ar" ? "التبديل إلى العربية" : "Switch to English"}
        >
            {LABELS[variant][locale]}
        </Link>
    );
}

/** Carries the current query string (e.g. ?category=Sedan) across the switch. */
function SwitchLinkWithQuery(props: {
    href: string;
    variant: Variant;
    locale: Locale;
    other: Locale;
}) {
    const query = useSearchParams().toString();
    return <SwitchLink {...props} href={query ? `${props.href}?${query}` : props.href} />;
}

/**
 * Navigates between /path and /ar/path instead of toggling client state, so the
 * chosen language is a real URL that can be linked, shared and indexed.
 */
export default function LanguageSwitch({ variant }: { variant: Variant }) {
    const { locale } = useLanguage();
    const { route } = routeFromPathname(usePathname() ?? "/");
    const other: Locale = locale === "en" ? "ar" : "en";
    const base = pathFor(other, route);
    const props = { href: base, variant, locale, other };

    // The prerendered HTML carries the plain href; the query is added on the client.
    return (
        <Suspense fallback={<SwitchLink {...props} />}>
            <SwitchLinkWithQuery {...props} />
        </Suspense>
    );
}
