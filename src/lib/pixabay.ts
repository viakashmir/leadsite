// Fetches a stock photo URL from Pixabay for a given search query. Runs
// server-side only (needs PIXABAY_API_KEY) — this is a real network call
// that only works where outbound internet access is unrestricted (e.g.
// Vercel), not in network-restricted local/CI environments.
export type PixabayHit = { url: string; tags: string; pageUrl: string; user: string };

export async function searchPixabayImage(query: string): Promise<PixabayHit | null> {
  const apiKey = process.env.PIXABAY_API_KEY;
  if (!apiKey) return null;

  const url = new URL("https://pixabay.com/api/");
  url.searchParams.set("key", apiKey);
  url.searchParams.set("q", query);
  url.searchParams.set("image_type", "photo");
  url.searchParams.set("orientation", "horizontal");
  url.searchParams.set("safesearch", "true");
  url.searchParams.set("per_page", "3");

  const res = await fetch(url.toString());
  if (!res.ok) return null;

  const data = (await res.json()) as {
    hits?: Array<{ largeImageURL?: string; webformatURL?: string; tags?: string; pageURL?: string; user?: string }>;
  };
  const hit = data.hits?.[0];
  const imageUrl = hit?.largeImageURL ?? hit?.webformatURL;
  return imageUrl ? { url: imageUrl, tags: hit?.tags ?? "", pageUrl: hit?.pageURL ?? "", user: hit?.user ?? "" } : null;
}

// Pexels (https://www.pexels.com/api/) as a second free source; its licence
// allows downloading and self-hosting. Needs PEXELS_API_KEY. Returns the same
// shape as Pixabay so callers can try one, then the other.
export async function searchPexelsImage(query: string): Promise<PixabayHit | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return null;
  const api = new URL("https://api.pexels.com/v1/search");
  api.searchParams.set("query", query);
  api.searchParams.set("orientation", "landscape");
  api.searchParams.set("per_page", "3");
  const res = await fetch(api.toString(), { headers: { Authorization: apiKey } });
  if (!res.ok) return null;
  const data = (await res.json()) as {
    photos?: Array<{ url?: string; alt?: string; photographer?: string; src?: { large2x?: string; large?: string } }>;
  };
  const photo = data.photos?.[0];
  const imageUrl = photo?.src?.large2x ?? photo?.src?.large;
  return imageUrl ? { url: imageUrl, tags: photo?.alt ?? "", pageUrl: photo?.url ?? "", user: photo?.photographer ?? "" } : null;
}

// Pixabay first, Pexels as fallback.
export async function searchStockImage(query: string): Promise<PixabayHit | null> {
  return (await searchPixabayImage(query)) ?? (await searchPexelsImage(query));
}
