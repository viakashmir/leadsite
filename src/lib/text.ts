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

// Names and places as people type them ("rampur", "ARIBA nigar") shown as
// "Rampur", "Ariba Nigar". Mixed-case words (McLeodganj) are left alone.
export function properCase(text: string): string {
  return text
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((w) => (w === w.toLowerCase() || w === w.toUpperCase() ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ");
}

// Free text with a capital first letter and a closing full stop.
export function sentenceCase(text: string): string {
  const t = text.trim().replace(/\s+/g, " ");
  if (!t) return t;
  const s = t.charAt(0).toUpperCase() + t.slice(1);
  return /[.!?…)]$/.test(s) ? s : `${s}.`;
}
