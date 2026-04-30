import { useEffect } from "react";

interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_URL = "https://delsova.dz";
const DEFAULT_IMAGE = `${BASE_URL}/assets/og-image.png`;

export function useSeoMeta({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
}: SeoMeta) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/create meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Primary
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", "index, follow");

    // Canonical
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    let canonEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonEl) {
      canonEl = document.createElement("link");
      canonEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonEl);
    }
    canonEl.setAttribute("href", canonicalUrl);

    // Open Graph
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", ogImage);

    // Twitter
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
  }, [title, description, canonical, ogImage]);
}