"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Branded replacements for the browser's own select list, date picker and
// datalist, which can't be styled. Popovers render into <body> with fixed
// positioning so rounded/overflow-hidden cards and the phone quote sheet
// never clip them.

// Base look without padding/background, so tight fields don't fight overrides.
const fieldCore =
  "h-9 w-full border border-gold-soft text-[13px] text-ink outline-none transition placeholder:text-ink-soft/60 hover:border-gold focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15";
export const fieldClass = `${fieldCore} rounded-lg bg-ivory px-2.5`;

const popoverClass =
  "fixed z-[70] overflow-hidden rounded-xl border border-gold-soft bg-white shadow-xl shadow-ink/10";

type Pos = { left: number; top?: number; bottom?: number; width: number; maxHeight: number };

function usePopover(minWidth: number, preferredHeight: number) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<Pos | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const popRef = useRef<HTMLDivElement | null>(null);

  const place = useCallback(() => {
    const r = anchorRef.current?.getBoundingClientRect();
    if (!r) return;
    const width = Math.max(r.width, minWidth);
    const left = Math.min(Math.max(8, r.left), window.innerWidth - width - 8);
    const below = window.innerHeight - r.bottom - 8;
    const above = r.top - 8;
    // Open downwards unless there's clearly more room above.
    if (below >= Math.min(preferredHeight, 220) || below >= above) {
      setPos({ left, top: r.bottom + 4, width, maxHeight: Math.min(preferredHeight, below - 4) });
    } else {
      setPos({ left, bottom: window.innerHeight - r.top + 4, width, maxHeight: Math.min(preferredHeight, above - 4) });
    }
  }, [minWidth, preferredHeight]);

  useLayoutEffect(() => {
    if (open) place();
  }, [open, place]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (!popRef.current?.contains(t) && !anchorRef.current?.contains(t)) setOpen(false);
    };
    const onMove = () => place();
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    window.addEventListener("resize", onMove);
    window.addEventListener("scroll", onMove, true);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      window.removeEventListener("resize", onMove);
      window.removeEventListener("scroll", onMove, true);
    };
  }, [open, place]);

  const style = pos
    ? { left: pos.left, top: pos.top, bottom: pos.bottom, width: pos.width, maxHeight: pos.maxHeight }
    : { visibility: "hidden" as const };

  return { open, setOpen, anchorRef, popRef, style };
}

function Chevron({ open, small }: { open: boolean; small?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className={`${small ? "h-3 w-3" : "h-4 w-4"} shrink-0 text-gold transition ${open ? "rotate-180" : ""}`}>
      <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export type Option = { value: string; label: string; hint?: string };

export function BrandSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "Choose",
  searchable = false,
  minWidth = 0,
  tight = false,
  joinedRight = false,
  ariaLabel,
  display,
}: {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  searchable?: boolean;
  minWidth?: number; // popover can be wider than a narrow field
  tight?: boolean; // narrow field (adults, kids): less padding, small arrow
  joinedRight?: boolean; // left half of a joined pair (country code + number)
  ariaLabel?: string;
  display?: (o: Option) => string; // shorter text in the field than in the list
}) {
  const { open, setOpen, anchorRef, popRef, style } = usePopover(minWidth, 264);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const selected = options.find((o) => o.value === value);
  const shown = query ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())) : options;

  const openList = () => {
    setQuery("");
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    setOpen(true);
  };
  const pick = (o: Option) => {
    onChange(o.value);
    setOpen(false);
    (anchorRef.current as HTMLButtonElement | null)?.focus();
  };

  useEffect(() => {
    if (!open) return;
    if (searchable) searchRef.current?.focus();
    listRef.current?.querySelector<HTMLElement>(`[data-i="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [open, active, searchable]);

  const onKey = (e: React.KeyboardEvent) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, shown.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (shown[active]) pick(shown[active]);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
    }
  };

  const listId = `${id ?? name ?? "select"}-list`;
  return (
    <>
      {name && <input type="hidden" name={name} value={value} />}
      <button
        id={id}
        type="button"
        ref={(el) => {
          anchorRef.current = el;
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={ariaLabel}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKey}
        className={`${fieldCore} flex items-center justify-between text-left ${tight ? "gap-0.5 px-1.5" : "gap-1 px-2.5"} ${
          joinedRight ? "rounded-l-lg border-r-0" : "rounded-lg"
        } ${open ? "border-brand bg-white ring-2 ring-brand/15" : joinedRight ? "bg-panel" : "bg-ivory"}`}
      >
        <span className={`truncate ${selected ? "" : "text-ink-soft/60"}`}>
          {selected ? (display ? display(selected) : selected.label) : placeholder}
        </span>
        <Chevron open={open} small={tight} />
      </button>
      {open &&
        createPortal(
          <div ref={popRef} className={`${popoverClass} flex flex-col`} style={style} onKeyDown={onKey}>
            {searchable && (
              <div className="border-b border-gold-soft/70 p-2">
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  placeholder="Search"
                  aria-label="Search options"
                  className={`${fieldClass} h-8`}
                />
              </div>
            )}
            <ul ref={listRef} id={listId} role="listbox" className="min-h-0 flex-1 overflow-y-auto p-1">
              {shown.map((o, i) => {
                const isSel = o.value === value;
                return (
                  <li
                    key={`${o.value}-${o.label}`}
                    data-i={i}
                    role="option"
                    aria-selected={isSel}
                    onMouseEnter={() => setActive(i)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => pick(o)}
                    className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-2.5 py-1.5 text-[13px] ${
                      isSel ? "bg-brand font-semibold text-white" : i === active ? "bg-brand-tint text-ink" : "text-ink"
                    }`}
                  >
                    <span className="truncate">{o.label}</span>
                    {o.hint && <span className={`shrink-0 text-[11px] ${isSel ? "text-white/80" : "text-ink-soft"}`}>{o.hint}</span>}
                  </li>
                );
              })}
              {shown.length === 0 && <li className="px-2.5 py-2 text-[13px] text-ink-soft">No match</li>}
            </ul>
          </div>,
          document.body,
        )}
    </>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");
const iso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromIso = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export function BrandDatePicker({
  id,
  name,
  value,
  onChange,
  min,
  placeholder = "Pick a date",
}: {
  id?: string;
  name: string;
  value: string; // YYYY-MM-DD or ""
  onChange: (value: string) => void;
  min?: string;
  placeholder?: string;
}) {
  const { open, setOpen, anchorRef, popRef, style } = usePopover(280, 340);
  const start = value ? fromIso(value) : min ? fromIso(min) : new Date();
  const [month, setMonth] = useState(new Date(start.getFullYear(), start.getMonth(), 1));
  const minDate = min ? fromIso(min) : null;
  const today = iso(new Date());

  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const lead = (first.getDay() + 6) % 7; // Monday first
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: days }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1)),
  ];
  const canGoBack = !minDate || month > new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  const shift = (n: number) => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + n, 1));

  const label = value
    ? fromIso(value).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })
    : placeholder;

  return (
    <>
      <input type="hidden" name={name} value={value} />
      <button
        id={id}
        type="button"
        ref={(el) => {
          anchorRef.current = el;
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          if (!open) setMonth(new Date(start.getFullYear(), start.getMonth(), 1));
          setOpen(!open);
        }}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        className={`${fieldCore} flex items-center justify-between gap-1 rounded-lg px-2.5 text-left ${open ? "border-brand bg-white ring-2 ring-brand/15" : "bg-ivory"}`}
      >
        <span className={`truncate ${value ? "" : "text-ink-soft/60"}`}>{label}</span>
        <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M8 2v3M16 2v3M3.5 9h17M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5Z" />
        </svg>
      </button>
      {open &&
        createPortal(
          <div
            ref={popRef}
            role="dialog"
            aria-label="Choose travel date"
            className={`${popoverClass} overflow-y-auto p-3`}
            style={style}
            onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => shift(-1)}
                disabled={!canGoBack}
                aria-label="Previous month"
                className="flex h-8 w-8 items-center justify-center rounded-full text-brand hover:bg-brand-tint disabled:opacity-30"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden><path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
              </button>
              <p className="font-display text-sm font-extrabold text-ink">
                {month.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
              </p>
              <button
                type="button"
                onClick={() => shift(1)}
                aria-label="Next month"
                className="flex h-8 w-8 items-center justify-center rounded-full text-brand hover:bg-brand-tint"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden><path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
              </button>
            </div>
            <div className="mt-2 grid grid-cols-7 gap-0.5 text-center">
              {WEEKDAYS.map((w) => (
                <span key={w} className="py-1 text-[11px] font-semibold text-gold">
                  {w}
                </span>
              ))}
              {cells.map((d, i) => {
                if (!d) return <span key={`e${i}`} />;
                const key = iso(d);
                const disabled = minDate ? d < minDate : false;
                const isSel = key === value;
                return (
                  <button
                    key={key}
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                      onChange(key);
                      setOpen(false);
                      (anchorRef.current as HTMLButtonElement | null)?.focus();
                    }}
                    aria-pressed={isSel}
                    aria-label={d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                    className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[13px] transition ${
                      isSel
                        ? "bg-brand font-semibold text-white"
                        : disabled
                          ? "cursor-not-allowed text-ink-soft/35"
                          : `text-ink hover:bg-brand-tint ${key === today ? "ring-1 ring-gold" : ""}`
                    }`}
                  >
                    {d.getDate()}
                  </button>
                );
              })}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

// Free-text input with branded suggestions (replaces <datalist>).
export function BrandSuggestInput({
  id,
  value,
  onChange,
  suggestions,
  placeholder,
  maxLength,
}: {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  suggestions: Option[];
  placeholder?: string;
  maxLength?: number;
}) {
  const { open, setOpen, anchorRef, popRef, style } = usePopover(200, 240);
  return (
    <>
      <input
        id={id}
        ref={(el) => {
          anchorRef.current = el;
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => (e.key === "Escape" || e.key === "Tab") && setOpen(false)}
        maxLength={maxLength}
        autoComplete="off"
        placeholder={placeholder}
        className={fieldClass}
      />
      {open &&
        createPortal(
          <div ref={popRef} className={`${popoverClass} overflow-y-auto p-1`} style={style}>
            <p className="px-2.5 pb-1 pt-1.5 text-[11px] font-semibold text-gold">Per person, or type your own</p>
            {suggestions.map((s) => (
              <button
                key={s.value}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(s.value);
                  setOpen(false);
                }}
                className={`block w-full rounded-lg px-2.5 py-1.5 text-left text-[13px] ${
                  s.value === value ? "bg-brand font-semibold text-white" : "text-ink hover:bg-brand-tint"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}
