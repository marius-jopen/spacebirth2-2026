const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || "";

/**
 * Prefix a local image path with the CDN URL if configured.
 * Only applies to local paths starting with "/".
 * External URLs (http/https) are returned unchanged.
 */
export function cdnImage(src: string): string {
  if (!CDN_URL) return src;
  if (src.startsWith("http")) return src;
  if (src.startsWith("/")) return `${CDN_URL}${src}`;
  return src;
}

/**
 * Whether CDN is enabled.
 */
export const cdnEnabled = !!CDN_URL;
