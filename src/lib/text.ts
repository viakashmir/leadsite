// Title case for headings: capitalises each word except short joining words
// (unless first or after a colon), and leaves words that already carry
// capitals or digits (IXC, McLeodganj, 4x4) exactly as written.
const MINOR = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into", "of", "on", "or", "per", "the", "to", "vs", "via", "with"]);

export function titleCase(text: string): string {
  let afterBreak = true;
  return text
    .split(" ")
    .map((word) => {
      const bare = word.replace(/^[("'“]+|[)"'”:,.?!]+$/g, "");
      let out = word;
      if (bare && !/[A-Z0-9]/.test(bare) && !(MINOR.has(bare) && !afterBreak)) {
        const i = word.indexOf(bare);
        out = word.slice(0, i) + bare[0].toUpperCase() + bare.slice(1) + word.slice(i + bare.length);
      }
      afterBreak = /[:?!]$/.test(word);
      return out;
    })
    .join(" ");
}
