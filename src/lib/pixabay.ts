// Fetches a stock photo URL from Pixabay for a given search query. Runs
// server-side only (needs PIXABAY_API_KEY) — this is a real network call
// that only works where outbound internet access is unrestricted (e.g.
// Vercel), not in network-restricted local/CI environments.
export async function searchPixabayImage(query: string): Promise<string | null> {
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
    hits?: Array<{ largeImageURL?: string; webformatURL?: string }>;
  };
  const hit = data.hits?.[0];
  return hit?.largeImageURL ?? hit?.webformatURL ?? null;
}
