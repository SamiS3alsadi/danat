import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE } from "@/i18n/routes";

/**
 * Locale routing. Arabic is served from /ar/*; English keeps the bare paths
 * and is rewritten onto the internal /en tree, so /about renders
 * app/[lang]/about with lang="en" while the address bar still reads /about.
 *
 * Next 16 renamed this file convention from middleware to proxy, and the
 * exported function must be named `proxy` (or be the default export).
 */
export const config = {
    // Skip Next internals and anything with a file extension (public assets,
    // llms.txt, robots.txt, sitemap.xml, favicon.ico).
    matcher: ["/((?!_next/|.*\\.).*)"],
};

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Arabic is already on its public path.
    if (pathname === "/ar" || pathname.startsWith("/ar/")) {
        return NextResponse.next();
    }

    // /en/* is internal only — redirect so English has exactly one public URL.
    if (pathname === "/en" || pathname.startsWith("/en/")) {
        const url = request.nextUrl.clone();
        url.pathname = pathname.slice(3) || "/";
        return NextResponse.redirect(url, 308);
    }

    // Everything else is English at the root: rewrite onto the /en tree.
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
}
