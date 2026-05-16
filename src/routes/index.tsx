import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import logo from "@/assets/galent-logo.png";
import {
  sections, overviewTabs, matrix01,
  matrix02, matrix03, tierStyles,
  matrix04Tabs, matrix04Content,
  matrix05Vendors, matrix05Dimensions, matrix05Content,
  matrix06,
  matrix07Roles, matrix07Content,
} from "@/lib/galent-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galent · AI-Native Enterprise Strategy Field Guide" },
      { name: "description", content: "Seven matrices for CIOs and architects: how to navigate AI adoption across the full enterprise stack." },
      { property: "og:title", content: "Galent · AI-Native Enterprise Strategy Field Guide" },
      { property: "og:description", content: "Seven matrices for CIOs and architects: how to navigate AI adoption across the full enterprise stack." },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: GalentPage,
});

/* ------------ helpers ------------ */
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

/* ------------ Icons ------------ */
const Icon = {
  Chevron: ({ open = false, className = "" }: { open?: boolean; className?: string }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      style={{ transform: open ? "rotate(180deg)" : undefined, transition: "transform .2s" }} className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  ChevLeft: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>),
  Moon: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>),
  Sun: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>),
  ArrowUp: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>),
  Dots: () => (
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none"><circle cx="6" cy="8" r="5" fill="#F97316"/><circle cx="16" cy="4" r="3" fill="#F97316" opacity="0.6"/></svg>
  ),
  Target: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>),
  Users: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  Grid: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>),
};

const overviewIcon = (k: string) =>
  k === "target" ? <Icon.Target /> : k === "users" ? <Icon.Users /> : <Icon.Grid />;

/* ------------ Top Navbar ------------ */
function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  return (
    <header className="glass-nav fixed top-0 inset-x-0 z-40 h-14 flex items-center px-4 sm:px-6">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Galent" className="h-7 w-auto" />
      </div>
      <div className="ml-auto flex items-center gap-3 text-sm">
        <span className="hidden md:inline text-muted-foreground text-xs">
          Reading as <span className="font-medium text-foreground/80">nirmal.r@galent.com</span>
        </span>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? <Icon.Sun /> : <Icon.Moon />}
        </button>
        <button className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2">
          Sign out
        </button>
      </div>
    </header>
  );
}

/* ------------ Sidebar ------------ */
function Sidebar({
  collapsed, setCollapsed, active,
}: { collapsed: boolean; setCollapsed: (v: boolean) => void; active: string }) {
  return (
    <aside
      className="hidden md:flex flex-col fixed left-0 top-14 bottom-0 z-30 bg-background border-r border-border overflow-hidden"
      style={{
        width: collapsed ? 0 : 240,
        transition: "width .25s ease",
      }}
    >
      <div className="flex items-center justify-between px-4 pt-5 pb-3">
        <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
          On This Page
        </span>
        <button
          onClick={() => setCollapsed(true)}
          className="p-1 rounded hover:bg-muted text-muted-foreground"
          aria-label="Collapse"
        >
          <Icon.ChevLeft />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 pb-6 space-y-0.5">
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group flex items-start gap-2.5 rounded-lg px-2 py-2 text-[13px] leading-snug transition-all ${
                isActive
                  ? "sidebar-active-bar font-semibold text-foreground"
                  : "text-foreground/75 hover:bg-muted"
              }`}
            >
              <span
                className={`shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md text-[11px] font-bold ${s.badge}`}
              >
                {s.num}
              </span>
              <span className="pt-0.5">{s.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

function CollapsedTab({ onExpand }: { onExpand: () => void }) {
  return (
    <button
      onClick={onExpand}
      className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-7 h-16 rounded-r-lg bg-background border border-l-0 border-border shadow-sm hover:bg-muted"
      aria-label="Expand sidebar"
    >
      <span style={{ transform: "rotate(180deg)" }}><Icon.ChevLeft /></span>
    </button>
  );
}

/* ------------ Section heading ------------ */
function SectionHead({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      {label && <div className="matrix-label mb-3">{label}</div>}
      <h2 className="text-[26px] sm:text-[30px] font-bold tracking-tight leading-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
}

/* ------------ OVERVIEW ------------ */
function OverviewSection() {
  const [tab, setTab] = useState(overviewTabs[0].id);
  const active = overviewTabs.find((t) => t.id === tab)!;
  return (
    <section id="overview" className="scroll-mt-24 pt-4">
      <div className="mb-4"><Icon.Dots /></div>
      <h1 className="text-[32px] sm:text-[38px] font-bold tracking-tight leading-tight text-foreground">
        Why I Wrote This — An Overview
      </h1>
      <div className="mt-6 space-y-5 text-[15.5px] leading-[1.75] text-foreground/85">
        <p>Most conversations about AI in enterprise IT happen in silos. Executives want quick wins. Engineers evaluate tools. Each perspective is valid in isolation, but none is sufficient on its own. What's missing is a single view that connects them.</p>
        <p>This guide is an attempt to build that view. When you see all the pieces together in a structured way, something important happens — the sum becomes more valuable than the parts.</p>
        <p>I synthesized this from primary research across Gartner, McKinsey, Bain, IDC, Forrester, Deloitte, Anthropic, BCG, MIT NANDA, and HFS Research, combined with what we've seen working with enterprise IT leaders directly.</p>
      </div>

      <div className="card-base mt-8 overflow-hidden">
        <div className="flex border-b border-border bg-muted/40">
          {overviewTabs.map((t) => {
            const isActive = t.id === tab;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative flex-1 px-4 py-3.5 text-[13px] font-medium flex items-center justify-center gap-2 transition-colors ${
                  isActive ? "text-foreground bg-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={isActive ? "text-primary" : ""}>{overviewIcon(t.icon)}</span>
                {t.label}
                {isActive && <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full" />}
              </button>
            );
          })}
        </div>
        <div className="p-6 sm:p-8 space-y-4 text-[15px] leading-[1.7] text-foreground/85">
          {active.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          {active.items && (
            <ul className="space-y-3 mt-2">
              {active.items.map(([k, v]) => (
                <li key={k} className="flex gap-3">
                  <span className="shrink-0 inline-flex items-center matrix-label pt-1.5">{k}</span>
                  <span className="text-foreground/85">— {v}</span>
                </li>
              ))}
            </ul>
          )}
          {active.closing && <p className="pt-2 text-foreground/85">{active.closing}</p>}
        </div>
      </div>
    </section>
  );
}

/* ------------ MATRIX 01 Accordion ------------ */
function Matrix01Section() {
  const [open, setOpen] = useState<string>("01");
  return (
    <section id="matrix-01" className="scroll-mt-24">
      <SectionHead
        label="Matrix 01"
        title="Five AI-Native Service Priorities"
        subtitle="Five areas that are the CIO's core responsibility to make AI-native — whether through vendors, system integrators, or internal teams. Each row tells you why it matters now, how to act, and what happens if you don't."
      />
      <div className="space-y-3">
        {matrix01.map((c) => {
          const isOpen = open === c.num;
          return (
            <div key={c.num} className="card-base overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? "" : c.num)}
                className="w-full flex items-center gap-4 p-5 text-left"
              >
                <span className={`shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg text-white text-sm font-bold ${c.color}`}>
                  {c.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground text-[16px]">{c.title}</div>
                  <div className="text-[13px] text-muted-foreground">{c.subtitle}</div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 mr-3">
                  <span className="pill bg-blue-50 text-blue-700">Why</span>
                  <span className="pill bg-blue-50 text-blue-700">How</span>
                  <span className="pill bg-rose-50 text-rose-700">Risk</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground flex items-center gap-1">
                  {isOpen ? "Close" : "Tap to Expand"}
                  <Icon.Chevron open={isOpen} />
                </span>
              </button>
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows .28s ease",
                }}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5 pt-1">
                    {[
                      { label: "Why", items: c.why, cls: "bg-blue-50/70 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100" },
                      { label: "How", items: c.how, cls: "bg-blue-50/70 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100" },
                      { label: "Risk If Not Done", items: c.risk, cls: "bg-rose-50 text-rose-950 dark:bg-rose-950/30 dark:text-rose-100" },
                    ].map((col) => (
                      <div key={col.label} className={`rounded-lg p-4 ${col.cls}`}>
                        <div className="text-[11px] font-bold uppercase tracking-wider mb-3 opacity-80">{col.label}</div>
                        <ul className="space-y-2.5 text-[13.5px] leading-snug">
                          {col.items.map((it, i) => (
                            <li key={i} className="flex gap-2"><span className="opacity-50">›</span><span>{it}</span></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------ Legend ------------ */
function Legend() {
  const items: { tier: keyof typeof tierStyles; label: string }[] = [
    { tier: "max", label: "Maximum exposure" },
    { tier: "high", label: "High exposure" },
    { tier: "balanced", label: "Balanced" },
    { tier: "friction", label: "Friction" },
    { tier: "heavy", label: "Heavy friction" },
  ];
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {items.map((i) => (
        <span key={i.tier} className={`pill ${tierStyles[i.tier]}`}>{i.label}</span>
      ))}
    </div>
  );
}

function CellBox({ tier, label }: { tier: keyof typeof tierStyles | null; label?: string | null }) {
  if (!tier || !label) {
    return <div className="rounded-md bg-muted/40 h-full min-h-[72px]" />;
  }
  return (
    <div
      title={label.replace(/\n/g, " · ")}
      className={`rounded-md p-3 text-[11.5px] leading-snug whitespace-pre-line h-full min-h-[72px] cursor-default ${tierStyles[tier]}`}
    >
      {label}
    </div>
  );
}

/* ------------ MATRIX 02 ------------ */
function Matrix02Section() {
  return (
    <section id="matrix-02" className="scroll-mt-24">
      <SectionHead label="Matrix 02" title="Exposure & Friction by Stack Layer × Company Size" />
      <Legend />
      <div className="overflow-x-auto -mx-2 px-2">
        <div className="min-w-[920px]">
          <div className="grid" style={{ gridTemplateColumns: "200px repeat(6, minmax(0,1fr))", gap: 8 }}>
            <div />
            {matrix02.cols.map((c) => (
              <div key={c} className="text-[11px] font-semibold text-muted-foreground whitespace-pre-line p-2">{c}</div>
            ))}
            {matrix02.rows.map((row) => (
              <RowGroup key={row.name} name={row.name} sub={row.sub} cells={row.cells} cols={6} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RowGroup({ name, sub, cells, cols }: { name: string; sub: string; cells: ({ tier: keyof typeof tierStyles; label: string } | null)[]; cols: number }) {
  return (
    <>
      <div className="p-2 pr-3 border-t border-border self-stretch">
        <div className="font-semibold text-[13px] text-foreground">{name}</div>
        <div className="text-[11px] text-muted-foreground leading-snug mt-1">{sub}</div>
      </div>
      {Array.from({ length: cols }).map((_, i) => (
        <div key={i} className="border-t border-border pt-2">
          <CellBox tier={cells[i]?.tier ?? null} label={cells[i]?.label ?? null} />
        </div>
      ))}
    </>
  );
}

/* ------------ MATRIX 03 ------------ */
function Matrix03Section() {
  return (
    <section id="matrix-03" className="scroll-mt-24">
      <SectionHead label="Matrix 03" title="Bottom-to-Mid SaaS · AI Adoption Difficulty" />
      <Legend />
      <div className="overflow-x-auto -mx-2 px-2">
        <div className="min-w-[920px]">
          <div className="grid" style={{ gridTemplateColumns: "220px repeat(5, minmax(0,1fr))", gap: 8 }}>
            <div />
            {matrix03.cols.map((c) => (
              <div key={c.label} className={`rounded-md p-2 text-center ${tierStyles[c.tier]}`}>
                <div className="text-[12px] font-bold uppercase tracking-wide">{c.label}</div>
                <div className="text-[10.5px] opacity-90 mt-0.5">{c.sub}</div>
              </div>
            ))}
            {matrix03.rows.map((r) => (
              <RowGroup key={r.name} name={r.name} sub={r.sub} cells={r.cells} cols={5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ MATRIX 04 ------------ */
function Matrix04Section() {
  const [tab, setTab] = useState("legacy");
  const c = matrix04Content[tab];
  return (
    <section id="matrix-04" className="scroll-mt-24">
      <SectionHead
        label="Matrix 04"
        title="Top-of-Pyramid ERP · AI Adoption Approach"
        subtitle="Top-of-pyramid ERP is where AI's impact on the CIO role is most consequential and most misunderstood. AI augments these systems; it does not replace them. Timelines are measured in years, not quarters."
      />
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-3">
        Tap any ERP domain to switch the view · Showing {matrix04Tabs.length} of 6
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {matrix04Tabs.map((t) => {
          const sel = t.id === tab;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`text-[12.5px] px-3.5 py-2 rounded-lg border transition-all ${
                sel
                  ? "bg-slate-900 text-white border-slate-900 shadow-md dark:bg-white dark:text-slate-900 dark:border-white"
                  : "bg-background text-foreground/80 border-border hover:border-foreground/30"
              }`}
            >
              {t.label} {sel ? "" : "→"}
            </button>
          );
        })}
      </div>
      <div className="card-base p-6">
        <div className="text-[14px] text-muted-foreground mb-5 italic">{c.subtitle}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "What AI Does Today", items: c.today, cls: "bg-blue-50/70 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100" },
            { label: "Recommended for CIOs", items: c.reco, cls: "bg-blue-50/70 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100" },
            { label: "Key Tools in Use", items: c.tools, cls: "bg-blue-50/70 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100", chips: true },
            { label: "CIO Decision Risk", items: c.risk, cls: "bg-rose-50 text-rose-950 dark:bg-rose-950/30 dark:text-rose-100" },
          ].map((col) => (
            <div key={col.label} className={`rounded-lg p-4 ${col.cls}`}>
              <div className="text-[11px] font-bold uppercase tracking-wider mb-3 opacity-80">{col.label}</div>
              {col.chips ? (
                <div className="flex flex-wrap gap-1.5">
                  {col.items.map((t) => (
                    <span key={t} className="pill bg-white/70 text-blue-900 dark:bg-white/10 dark:text-blue-100 normal-case tracking-normal text-[12px] font-medium">{t}</span>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2.5 text-[13.5px] leading-snug">
                  {col.items.map((t, i) => (
                    <li key={i} className="flex gap-2"><span className="opacity-50">›</span><span>{t}</span></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ MATRIX 05 ------------ */
function Matrix05Section() {
  const [vendor, setVendor] = useState("sfdc");
  const content = matrix05Content[vendor];
  return (
    <section id="matrix-05" className="scroll-mt-24">
      <SectionHead
        label="Matrix 05"
        title="Moat Strength of Enterprise SaaS & ERP Incumbents"
        subtitle="Pick an ERP vendor and see what you're locked into across five moat dimensions. The fifth column is your own data and custom apps — the only moat no vendor can replicate."
      />
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-3">
        Tap any vendor to compare moats · Showing {matrix05Vendors.length} of 4
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {matrix05Vendors.map((v) => {
          const sel = v.id === vendor;
          return (
            <button
              key={v.id}
              onClick={() => setVendor(v.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                sel
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background border-border hover:border-primary/40"
              }`}
            >
              <div className="font-semibold text-[14px]">{v.name}</div>
              <div className={`text-[11.5px] mt-1 ${sel ? "text-white/80" : "text-muted-foreground"}`}>{v.sub}</div>
              <div className={`text-[10px] uppercase tracking-wider mt-2 font-semibold ${sel ? "text-white" : "text-primary"}`}>
                {sel ? "✓ Selected" : "Tap to compare →"}
              </div>
            </button>
          );
        })}
      </div>
      <div className="space-y-3">
        {matrix05Dimensions.map((d, i) => {
          const row = content[i];
          return (
            <div key={d.num} className="card-base p-5">
              <div className="flex items-start gap-4">
                <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-violet-100 text-violet-700 text-sm font-bold">{d.num}</span>
                <div className="flex-1">
                  <div className="font-semibold text-foreground text-[16px]">{d.title}</div>
                  <div className="text-[12.5px] text-muted-foreground mb-3">{d.sub}</div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="rounded-lg p-3 bg-blue-50/70 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100">
                      <div className="text-[10.5px] font-bold uppercase tracking-wider mb-1.5 opacity-70">Observation</div>
                      <div className="text-[13.5px] leading-snug">{row.observation}</div>
                    </div>
                    <div className="rounded-lg p-3 bg-amber-50 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100">
                      <div className="text-[10.5px] font-bold uppercase tracking-wider mb-1.5 opacity-70">Action</div>
                      <div className="text-[13.5px] leading-snug">{row.action}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------ MATRIX 06 ------------ */
function Matrix06Section() {
  return (
    <section id="matrix-06" className="scroll-mt-24">
      <SectionHead
        label="Matrix 06"
        title="CIO Adoption Journey"
        subtitle="Getting AI to production is one challenge. Keeping it there is another. This matrix is a practical operating guide across the four dimensions that determine whether AI scales or stalls."
      />
      <p className="text-[13px] text-muted-foreground mb-5">
        Read across each row for the full operating playbook by dimension. Read down each column to compare how People / Process / Technology / Vendor decisions stack up.
      </p>
      <div className="overflow-x-auto -mx-2 px-2">
        <div className="min-w-[860px] grid gap-3" style={{ gridTemplateColumns: "180px repeat(3, minmax(0,1fr))" }}>
          <div />
          {matrix06.cols.map((c, i) => (
            <div key={c.id} className={`rounded-lg p-3 text-center border ${
              i === 0 ? "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100"
              : i === 1 ? "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:text-blue-100"
              : "bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/30 dark:text-rose-100"
            }`}>
              <div className="text-[12px] font-bold uppercase tracking-wider">{c.icon} {c.label}</div>
              <div className="text-[11px] opacity-80 mt-0.5">{c.sub}</div>
            </div>
          ))}
          {matrix06.rows.map((r) => (
            <FragmentRow key={r.name}>
              <div className="p-3 border-t border-border">
                <div className="font-semibold text-[14px]">{r.name}</div>
                <div className="text-[11.5px] text-muted-foreground leading-snug mt-1">{r.sub}</div>
              </div>
              {([r.deploy, r.watch, r.kills] as const).map((items, i) => (
                <div key={r.name + i} className={`rounded-lg p-3 border-t border-border ${
                  i === 0 ? "bg-emerald-50/50 dark:bg-emerald-950/20" :
                  i === 1 ? "bg-blue-50/50 dark:bg-blue-950/20" :
                  "bg-rose-50/50 dark:bg-rose-950/20"
                }`}>
                  <ul className="space-y-2 text-[12.5px] leading-snug">
                    {items.map((t, j) => <li key={j} className="flex gap-2"><span className="opacity-40">›</span><span>{t}</span></li>)}
                  </ul>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ MATRIX 07 ------------ */
function Matrix07Section() {
  const [role, setRole] = useState("arch");
  const c = matrix07Content[role];
  const stages = [
    { id: "exposure", label: "Exposure", sub: "High AI Disruption Signals", cls: "text-orange-600 dark:text-orange-400", body: c.exposure },
    { id: "friction", label: "Friction", sub: "Why AI Disruption Isn't Easy Here", cls: "italic text-foreground/70", body: c.friction },
    { id: "start", label: "Start", sub: "Best First Move for This Role", cls: "text-blue-600 dark:text-blue-400", body: c.start },
    { id: "scale", label: "Scale", sub: "Make the Role AI-Native at Team Level", cls: "text-blue-600 dark:text-blue-400", body: c.scale },
    { id: "expert", label: "Expert", sub: "Full AI-Native Mastery", cls: "text-emerald-600 dark:text-emerald-400", body: c.expert },
  ];
  return (
    <section id="matrix-07" className="scroll-mt-24">
      <SectionHead
        label="Matrix 07"
        title="Engineering Roles · AI Adoption Journey"
        subtitle="Every engineering role across five stages of AI adoption. Exposure shows where the role is vulnerable. Friction shows why disruption stalls. Start, Scale, Expert show the path forward."
      />
      <p className="text-[13px] text-muted-foreground mb-5">
        Pick your role. Find the column that describes your team today. The next column to the right is what the next stage actually requires.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {matrix07Roles.map((r) => {
          const sel = r.id === role;
          return (
            <button
              key={r.id}
              onClick={() => setRole(r.id)}
              className={`text-[12px] font-semibold px-3 py-2 rounded-full border transition-all ${
                sel
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white"
                  : "bg-background text-foreground/80 border-border hover:border-foreground/30"
              }`}
            >
              <span className="mr-1.5">{r.icon}</span>{r.label}
            </button>
          );
        })}
      </div>
      <div className="overflow-x-auto -mx-2 px-2">
        <div className="min-w-[980px] grid gap-3" style={{ gridTemplateColumns: "repeat(5, minmax(0,1fr))" }}>
          {stages.map((s, i) => (
            <div key={s.id} className="card-base p-4">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Stage 0{i + 1}</div>
              <div className={`text-[18px] font-bold mb-1 ${s.cls}`}>{s.label}</div>
              <div className="text-[10.5px] uppercase tracking-wider font-semibold text-muted-foreground mb-3">{s.sub}</div>
              <ul className="space-y-2.5 text-[13px] leading-snug text-foreground/85">
                {s.body.map((t, j) => <li key={j} className="flex gap-2"><span className="opacity-40">›</span><span>{t}</span></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <blockquote className="mt-10 mx-auto max-w-2xl text-center italic text-[18px] sm:text-[20px] leading-relaxed text-foreground/85">
        "The roles do not disappear. They re-tier. The question is not whether your team gets to the expert column. The question is <span className="font-semibold not-italic text-foreground">how many quarters it takes</span>, and whether <span className="font-semibold not-italic text-foreground">your competitors get there first</span>."
      </blockquote>
    </section>
  );
}

/* ------------ Page ------------ */
function GalentPage() {
  const [dark, setDark] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const ids = useMemo(() => sections.map((s) => s.id), []);
  const active = useScrollSpy(ids);
  const progress = useScrollProgress();

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("galent-dark") : null;
    if (stored === "1") setDark(true);
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("galent-dark", dark ? "1" : "0");
  }, [dark]);
  useEffect(() => {
    const f = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent">
        <div className="h-full bg-primary transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>
      <Navbar dark={dark} setDark={setDark} />
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} active={active} />
      {collapsed && <CollapsedTab onExpand={() => setCollapsed(false)} />}

      <main
        className="pt-14 transition-[padding] duration-300"
        style={{ paddingLeft: collapsed ? 0 : undefined }}
      >
        <div
          className="mx-auto px-5 sm:px-8 py-12"
          style={{ maxWidth: 900, marginLeft: collapsed ? "auto" : undefined }}
        >
          <div className={collapsed ? "" : "md:pl-[60px]"}>
            {/* offset for sidebar handled by margin on main */}
          </div>
          <div className="space-y-16" style={{ marginLeft: collapsed ? 0 : 0 }}>
            <OverviewSection />
            <hr className="border-border" />
            <Matrix01Section />
            <hr className="border-border" />
            <Matrix02Section />
            <hr className="border-border" />
            <Matrix03Section />
            <hr className="border-border" />
            <Matrix04Section />
            <hr className="border-border" />
            <Matrix05Section />
            <hr className="border-border" />
            <Matrix06Section />
            <hr className="border-border" />
            <Matrix07Section />
          </div>
        </div>

        <footer className="border-t border-border mt-10">
          <div
            className="mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-2 text-[12px] text-muted-foreground"
            style={{ maxWidth: 1200, paddingLeft: collapsed ? undefined : 260 }}
          >
            <div className="flex-1">
              Sourced from Gartner, McKinsey, Bain, IDC, Forrester, Deloitte, Anthropic, BCG, MIT NANDA, HFS Research, GitHub, AltePartners, MITI.
            </div>
            <div>© 2026 Galent · Ashwin Bharath · April 2026</div>
          </div>
        </footer>
      </main>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Back to top"
        >
          <Icon.ArrowUp />
        </button>
      )}
    </div>
  );
}
