export const sections = [
  { id: "overview", num: "00", label: "Overview", badge: "bg-slate-900 text-white" },
  { id: "matrix-01", num: "01", label: "Five AI-Native Service Priorities", badge: "bg-violet-100 text-violet-700" },
  { id: "matrix-02", num: "02", label: "Stack Layer × Company Size", badge: "bg-yellow-100 text-yellow-700" },
  { id: "matrix-03", num: "03", label: "SaaS Adoption Difficulty", badge: "bg-orange-100 text-orange-700" },
  { id: "matrix-04", num: "04", label: "Top-of-Pyramid ERP", badge: "bg-blue-100 text-blue-700" },
  { id: "matrix-05", num: "05", label: "Moat Strength", badge: "bg-rose-100 text-rose-700" },
  { id: "matrix-06", num: "06", label: "CIO Adoption Journey", badge: "bg-teal-100 text-teal-700" },
  { id: "matrix-07", num: "07", label: "Engineering Roles Journey", badge: "bg-cyan-100 text-cyan-700" },
];

export const overviewTabs = [
  {
    id: "thesis",
    label: "The Core Thesis",
    icon: "target",
    paragraphs: [
      "AI adoption is a wide spectrum — and where you land depends entirely on which part of your stack you are looking at.",
      "At the easy end, bottom-of-pyramid tools — CRUDs, dashboards, workflow builders — can be replicated by a single engineer in days. That market is already disrupted.",
      "In the middle, data-rich platforms have spent years accumulating proprietary training corpora and thousands of certified integrations. AI cannot trivially replicate that.",
      "At the top, zero-error tolerance, regulatory liability, and 400 million lines of embedded code make replacement the wrong frame entirely. Augmentation is the only sane move.",
      "The most important shift these matrices will force is this: AI adoption is not one decision. For most enterprise stacks, the honest answer is layered — fast at the bottom, deliberate in the middle, augment-only at the top.",
    ],
  },
  {
    id: "who",
    label: "Who This Is For",
    icon: "users",
    paragraphs: [
      "This guide works at every level — and works best when all matrices are read together. A CIO uses it to see the full stack at once: which layers are at risk, which are stable, and which need investment.",
      "An architect uses it to move from platform evaluation to platform conviction — distinguishing true defensibility from surface-level AI features.",
      "Every category has a different curve. The real value comes when all four perspectives are in the same room at the same time.",
    ],
  },
  {
    id: "how",
    label: "How to Read These Matrices",
    icon: "grid",
    paragraphs: [
      "Think of each matrix as a map, not a verdict. Here is how to navigate each one.",
    ],
    items: [
      ["Matrix 1", "Five areas are the CIO's core responsibility to make AI-native, whether through vendors, system integrators, or internal teams. The remaining areas are critical to monitor for potential challenges in achieving AI-native goals and will help guide efforts to avoid common pitfalls."],
      ["Matrix 2", "Exposure and Friction by Stack Layer and Company Size gives you a bird's-eye view of how exposure and friction are stacked based on company size and software used. It provides a generic overview, with more specificity added in subsequent matrices."],
      ["Matrix 3", "Laid out as a grid with software categories as rows and difficulty levels as columns — from 'Walk in the Park' (AI replaces it in days) to 'Very Hard' (structurally protected for years). Each row has one primary cell: red means the category is highly exposed to AI disruption; green means a strong moat exists and the category is far less susceptible."],
      ["Matrix 4", "A CIO decision guide for top-of-pyramid ERP. Each row covers one critical ERP domain. Read across: the first column shows what AI is actually doing today; the second shows what CIOs should specifically deploy and why; the third lists the key tools in production; the fourth identifies the governance and liability decisions that only a CIO can make."],
      ["Matrix 5", "A vendor comparison — including your own data and custom applications as a fifth column. Read down each column to build a picture of how defensible one vendor is against AI-native disruption. Read across a row to compare all vendors on the same dimension."],
      ["Matrices 6 and 7", "Self-assessment and guidance tools. Find the column that best describes your organization or your engineering team today — that is your current stage. The column immediately to the right shows exactly what the next stage looks like and what it specifically requires to get there."],
    ],
    closing: "These seven matrices give you the vocabulary to speak precisely about where you are, what is at risk, and what to do next. That is why I wrote this.",
  },
];

export const matrix01 = [
  {
    num: "01", title: "Legacy Modernization",
    subtitle: "COBOL, monoliths, undocumented codebases",
    color: "bg-violet-500",
    why: [
      "What once took 10–15 years and two org charts can now be executed in a single planning cycle.",
      "Every quarter you defer modernization, a competitor runs faster on cleaner rails.",
      "Industry will be looking for AI-native CIOs, and legacy modernization will be the jewel in the crown.",
    ],
    how: [
      "Never go dark — the strangler fig pattern keeps the business running while the foundation shifts.",
      "Knowledge-Graph the system before you touch it. The first move is understanding, not migration.",
      "Self-funding modernization — early wins generate the savings that finance the next phase.",
    ],
    risk: [
      "AI-era boards expect CIOs to be business architects, not infrastructure caretakers.",
      "The business doesn't distinguish between 'legacy constraint' and 'CIO failure' — they just know they can't move fast enough.",
      "You will pay the price for the technical debt your predecessors created.",
    ],
  },
  {
    num: "02", title: "Application Development & Maintenance",
    subtitle: "Waterfall and sprint-based feature delivery",
    color: "bg-blue-500",
    why: [
      "AI accelerates coding 10x — but the bigger gain is eliminating review cycles, environment waits, and regression queues that consumed more time than coding ever did.",
      "Requirements ambiguity surfaces at UAT, not at development. Spec-driven AI makes it a conversation cost, not a rework cost.",
      "Every feature request runs against a live Knowledge and Context Graph — dependencies mapped, risks surfaced in minutes, not weeks of senior review.",
    ],
    how: [
      "Embed AI across the entire delivery pipeline.",
      "Spec-Driven Development as the operating model.",
      "Knowledge Graph and Context Graph as the foundation.",
      "Forward Deployment Engineers as the delivery unit.",
      "Shift maintenance from reactive to predictive.",
    ],
    risk: [
      "Business drives funding; speed of software delivery is now speed of business decision-making.",
      "Every month you run the old model, you are funding inefficiency competitors have already eliminated.",
      "Shadow IT expands precisely where ADM fails to deliver.",
    ],
  },
  {
    num: "03", title: "Testing & Quality Engineering",
    subtitle: "Manual test authoring, reactive QA processes",
    color: "bg-emerald-500",
    why: [
      "Manual testing consumes 30–40% of delivery timelines and still misses what AI catches in minutes.",
      "Testing is the last manual bottleneck in an otherwise automatable pipeline — it is where delivery speed goes to die.",
      "AI doesn't just run tests faster — it writes them, maintains them, and evolves them as the codebase changes.",
    ],
    how: [
      "AI generates test coverage from specs before code is written — defects caught at design, not deployment.",
      "Quality gates become autonomous — AI monitors production, detects anomalies, triggers rollback.",
      "Every code change triggers an AI-curated regression suite — only the tests that matter run, cutting regression time by 80%.",
    ],
    risk: [
      "Manual QE becomes the bottleneck that throttles every release — speed gains from AI development are neutralized at the testing gate.",
      "Competitors running AI-native QE ship with higher quality at higher velocity — you are slower and less reliable, simultaneously.",
    ],
  },
  {
    num: "04", title: "Integration & Data Fabric",
    subtitle: "Black-box integration layer; undocumented connectors",
    color: "bg-orange-500",
    why: [
      "Data Fabric is not an architecture upgrade — it is the prerequisite for every AI use case your business wants to run.",
      "Every hour analysts spend reconciling data is an hour they are not generating insight — integration debt is productivity debt.",
      "Without it, AI has nothing reliable to reason over.",
    ],
    how: [
      "Build the Data Fabric as a semantic layer — data contextualized, so AI can reason across domains without bespoke pipelines.",
      "Establish a single integration governance model — every new system enters through the fabric, never around it.",
      "Map every connector before touching one — Knowledge Graph the entire integration layer.",
    ],
    risk: [
      "Every AI initiative will hit the same wall — fragmented, untrustworthy data that makes model outputs unreliable.",
      "The CIO who cannot answer 'where does this data come from and how do you know it is right' is not running an AI-era IT function.",
      "Regulatory exposure grows with every undocumented data flow.",
    ],
  },
  {
    num: "05", title: "IT Operations & SRE",
    subtitle: "Reactive incident response; manual runbooks",
    color: "bg-rose-500",
    why: [
      "AI enables 10x deployment volume — but you cannot accelerate delivery if every major release risks a production crisis.",
      "Your SRE function is spending 70% of its capacity on toil — work AI can own.",
      "The complexity of modern application estates has outpaced human cognitive capacity to manage them.",
    ],
    how: [
      "Build a unified observability layer across logs, metrics, and traces — AI correlates signals across all three simultaneously.",
      "Knowledge-Graph the entire operational estate — every service dependency, failure mode, remediation history.",
      "Implement chaos engineering as a continuous practice, not a quarterly exercise.",
    ],
    risk: [
      "Manual runbooks do not scale with system complexity — the gap between what your runbooks cover and what your architecture can fail on widens every quarter.",
      "Regulatory frameworks increasingly require demonstrable observability and documented incident response.",
      "With 10x more releases, your outages can go 100x.",
    ],
  },
];

export type CellTier = "max" | "high" | "balanced" | "friction" | "heavy";
export const tierStyles: Record<CellTier, string> = {
  max: "bg-orange-500/90 text-white",
  high: "bg-orange-300/70 text-orange-950",
  balanced: "bg-amber-100 text-amber-900",
  friction: "bg-slate-200 text-slate-700",
  heavy: "bg-slate-100 text-slate-600",
};

export const matrix02 = {
  cols: [
    "Small Business\n<50 emp · <$10M",
    "Small-Medium\n50–200 emp · $10–50M",
    "Medium\n200–1K emp · $50–500M",
    "Medium-Large\n1K–5K emp · $500M–2B",
    "Large\n5K–50K emp · $2–50B",
    "Super Large\n50K+ emp · $50B+",
  ],
  rows: [
    {
      name: "Top of Pyramid",
      sub: "Mission-critical ERP; must be right, must scale, must not fail",
      cells: [
        null, null,
        { tier: "heavy" as CellTier, label: "Growing financial\nServiceNow / Workday" },
        { tier: "friction" as CellTier, label: "Regional banks\nWorkday / athenahealth" },
        { tier: "friction" as CellTier, label: "Large health systems / Banks\nCustom Apps / SAP / Guidewire" },
        { tier: "heavy" as CellTier, label: "Apple / Walmart / JPMC\nCustom ERP on SAP / Oracle" },
      ],
    },
    {
      name: "Below Top of Pyramid",
      sub: "Deep departmental + workflow platforms",
      cells: [
        null,
        { tier: "friction" as CellTier, label: "Growth startups\nDynamics 365 / Salesforce" },
        { tier: "friction" as CellTier, label: "Mid-size tech\nSalesforce Enterprise" },
        { tier: "balanced" as CellTier, label: "Insurance\nGuidewire / Duck Creek / Custom" },
        { tier: "friction" as CellTier, label: "Major corps\nServiceNow / Custom Apps" },
        { tier: "heavy" as CellTier, label: "Fortune 50\nFull SAP / Oracle / SF" },
      ],
    },
    {
      name: "Mid Pyramid",
      sub: "Departmental SaaS — more than CRUD, not mission-critical",
      cells: [
        { tier: "balanced" as CellTier, label: "Professional services\nQuickBooks / Zoho CRM" },
        { tier: "balanced" as CellTier, label: "Growing SaaS\nHubSpot Pro / Salesforce" },
        { tier: "balanced" as CellTier, label: "Mid-market\nSalesforce mid-tier / Sage" },
        { tier: "balanced" as CellTier, label: "Growing enterprise\nDynamics 365 / Workday" },
        { tier: "friction" as CellTier, label: "Fortune 500\nCustom Apps / ServiceNow" },
        { tier: "friction" as CellTier, label: "Fortune 50\nCustom Apps / Full Salesforce" },
      ],
    },
    {
      name: "Above Bottom of Pyramid",
      sub: "Light workflow tools; AI disruption accelerating",
      cells: [
        { tier: "high" as CellTier, label: "Small agencies\nMailchimp / Calendly" },
        { tier: "high" as CellTier, label: "Regional firms\nFreshworks / Asana" },
        { tier: "balanced" as CellTier, label: "Media companies\nHubSpot Starter / Klipfolio" },
        { tier: "balanced" as CellTier, label: "Mid-size firms\nRetool / Power BI" },
        null, null,
      ],
    },
    {
      name: "Bottom of Pyramid",
      sub: "Simple CRUD apps, portals, dashboards. Maximum AI disruption risk",
      cells: [
        { tier: "max" as CellTier, label: "Etsy sellers / freelancers\nWix / Canva / Airtable" },
        { tier: "max" as CellTier, label: "Small e-commerce\nShopify / Zoho One" },
        { tier: "high" as CellTier, label: "Startups\nAsana / Geckoboard" },
        { tier: "high" as CellTier, label: "Startup SaaS\nRetool / Appsmith" },
        null, null,
      ],
    },
  ],
};

export const matrix03 = {
  cols: [
    { label: "Walk in the Park", sub: "Hours to days", tier: "max" as CellTier },
    { label: "Easy", sub: "Days to weeks", tier: "high" as CellTier },
    { label: "Medium", sub: "Weeks to months", tier: "balanced" as CellTier },
    { label: "Hard", sub: "Strong moat · 1–3 yrs", tier: "friction" as CellTier },
    { label: "Very Hard", sub: "Regulatory immunity · 5+ yrs", tier: "heavy" as CellTier },
  ],
  rows: [
    {
      name: "Simple Apps & Content",
      sub: "CRUD apps, landing pages, design tools",
      cells: [
        { tier: "max" as CellTier, label: "Cursor: full CRUD app in <60 min\nv0: production UI from one prompt\nReplit: deployed app, same day\nBolt.new: full-stack from a description" },
        null, null, null, null,
      ],
    },
    {
      name: "Engagement, Forms & Email",
      sub: "Email tools, scheduling, forms, booking portals",
      cells: [
        { tier: "max" as CellTier, label: "Beehiiv: newsletter platform, one weekend\nCal.com: booking tool, hours" },
        { tier: "high" as CellTier, label: "HubSpot AI: forms + sequences auto-built\nMake.com: API portal, zero code needed" },
        { tier: "balanced" as CellTier, label: "Behavioral triggers — complex multi-step state\nMulti-resource scheduling — edge cases" },
        null, null,
      ],
    },
    {
      name: "Dashboards, BI & Workflow",
      sub: "KPIs, analytics, no-code automation — Zapier, Tableau, Power BI",
      cells: [
        null,
        { tier: "high" as CellTier, label: "Retool AI: dashboard from a prompt\nMetabase: multi-source dashboards, days" },
        { tier: "balanced" as CellTier, label: "8,000+ Zapier connectors: real switching cost\nETL freshness SLAs: AI cannot guarantee reliability" },
        { tier: "friction" as CellTier, label: "Tableau: 100s of certified semantic layers, years embedded\nSOC 2 audit trails: compliance burden persists" },
        null,
      ],
    },
    {
      name: "CRM, Support & Collaboration",
      sub: "HubSpot, Salesforce, Zendesk, Jira, Intercom, Gainsight",
      cells: [
        null,
        { tier: "high" as CellTier, label: "Notion AI: tasks + docs auto-generated\nFreshdesk AI: ticket routing, days" },
        { tier: "balanced" as CellTier, label: "Jira: 5+ years org project history embedded\nMulti-turn CRM handoff: complex state mgmt" },
        { tier: "friction" as CellTier, label: "HubSpot / Zendesk: years of behavioral data corpus\nGainsight: cross-client churn AI; new entrants start from zero" },
        { tier: "heavy" as CellTier, label: "Embedded in ERP / billing / ops: ripping out = data loss\nRegulated industries: compliance blocks full autonomy" },
      ],
    },
    {
      name: "HR, RevOps & Financial",
      sub: "Rippling, Gusto, Salesforce CPQ, QuickBooks, Shopify-tier",
      cells: [
        null,
        { tier: "high" as CellTier, label: "Stripe Checkout: catalog + payment, hours\nInvoice PDFs: AI-generated, minutes" },
        { tier: "balanced" as CellTier, label: "Single-entity P&L: AI-manageable\nBasic e-commerce: weeks of FDE work" },
        { tier: "friction" as CellTier, label: "VAT / sales tax: 50+ jurisdictions, legally precise\nRippling: 50-state payroll engine built over years" },
        { tier: "heavy" as CellTier, label: "SOX audit readiness: zero-error legal liability\nASC 606 / IFRS 15: global revenue recognition complexity" },
      ],
    },
    {
      name: "Vertical & Field Service SaaS",
      sub: "Procore, Toast, ServiceTitan, Veeva, Jobber",
      cells: [
        null, null,
        { tier: "balanced" as CellTier, label: "Generic vertical workflow: achievable in months\nSurface feature parity: buildable without certs" },
        { tier: "friction" as CellTier, label: "Procore: contractor licensing + millions of project data points\n35–60% higher retention vs horizontal SaaS" },
        { tier: "heavy" as CellTier, label: "Govt-certified data feeds: licensed only, no shortcut\nState licensing verification: not buildable from scratch" },
      ],
    },
  ],
};

export const matrix04Tabs = [
  { id: "scale", label: "Scale & Real-Time Transactions" },
  { id: "data", label: "Critical Data, Behavior & Critical Processes" },
  { id: "integ", label: "Integrations & Multi-Tenant Data" },
  { id: "legacy", label: "Large Code Base & Legacy Modernization" },
  { id: "trust", label: "Enterprise Trust & AI Governance" },
  { id: "reg", label: "Regulatory, Compliance & Localization" },
];

export const matrix04Content: Record<string, { subtitle: string; today: string[]; reco: string[]; tools: string[]; risk: string[] }> = {
  scale: {
    subtitle: "Billions of transactions/day · sub-100ms latency · 99.99% uptime",
    today: ["AI predicts load spikes hours in advance — autoscaling before saturation, not after", "Anomaly detection on transaction patterns flags fraud and outages before SLAs breach", "AI-tuned query plans reduce DB latency by 20–40% in production ERPs"],
    reco: ["Deploy AIOps on real-time transaction layer first — fastest, most measurable ROI", "Set hard latency SLOs before turning on AI optimization — measure before you tune", "Keep humans in the loop on any change to billing or settlement paths"],
    tools: ["Dynatrace Davis AI", "Datadog Watchdog", "New Relic AI", "Oracle Autonomous DB", "SAP HANA Cloud"],
    risk: ["Autonomous remediation on revenue paths without manual override is the fastest way to a board-level incident", "AI tuning a query the wrong way can degrade thousands of customers in seconds", "Vendor SLAs do not cover AI-induced outages — contract this explicitly"],
  },
  data: {
    subtitle: "Master data, customer 360, financial close — the source of truth",
    today: ["AI flags master-data inconsistencies across HR, finance, supply chain in near-real-time", "Auto-classification of unstructured data into ERP entities at 85–95% accuracy", "AI assists financial close — variance analysis in minutes, not days"],
    reco: ["Build a master-data governance layer before pointing AI at it — garbage in, AI garbage out at scale", "Mandate human sign-off on any AI-generated journal entry above a threshold", "Audit AI data quality monthly — drift is silent and expensive"],
    tools: ["Collibra AI", "Informatica CLAIRE", "Microsoft Purview", "SAP Master Data Governance"],
    risk: ["AI training on dirty master data permanently encodes the errors into downstream decisions", "Period-close manipulation by autonomous agents is a material weakness under SOX", "Customer 360 mistakes propagate to every channel within hours"],
  },
  integ: {
    subtitle: "Thousands of connectors · multi-tenant isolation · zero data leakage",
    today: ["AI maps undocumented integration flows from logs and traces — discovery in days, not quarters", "Auto-generation of connector code for common SaaS endpoints", "Tenant-isolation drift detection across multi-tenant SaaS layers"],
    reco: ["Catalog every integration before AI touches any of them — no exceptions", "Require tenant-isolation tests on every AI-generated connector deployment", "Treat integration as a regulated surface — audit AI changes the same way you audit DB schema changes"],
    tools: ["MuleSoft AnyPoint AI", "Boomi AI", "Workato AgentX", "SAP Integration Suite"],
    risk: ["A single mis-scoped connector AI generated yesterday is a multi-tenant data breach today", "Undocumented integrations AI 'rediscovers' may be load-bearing for compliance — touching them breaks audits", "Connector code without provenance fails every meaningful security review"],
  },
  legacy: {
    subtitle: "400M+ lines (SAP, 50 yrs) · COBOL/PL1 · 60–70% traditional failure rate",
    today: ["AI code comprehension: 90% faster assessment than manual review", "AI handles 60–80% of mechanical COBOL→Java translation", "AI-generated unit tests and refactoring suggestions at codebase scale"],
    reco: ["AI comprehension before scoping: eliminates planning-stage budget overruns", "AI owns mechanical translation; human architects own structural and regulatory decisions — write this into contracts", "Reject vendors promising autonomous legacy migration: 77% AI degradation at 100K+ files is documented"],
    tools: ["GalentAI Knowledge Graph", "GitHub Copilot", "Cursor", "IBM watsonx Code Assistant", "AWS Migration Hub", "Microsoft MAAP"],
    risk: ["Traditional modernization: 60–70% failure rate. AI improves odds; CIO still owns accountability.", "Undocumented COBOL business logic: AI cannot extract it; domain experts are non-negotiable", "AI tools carry no liability for modernization failure: vendor contracts must say so explicitly"],
  },
  trust: {
    subtitle: "Board-level governance · model risk · attestable controls",
    today: ["AI control libraries map to NIST AI RMF and EU AI Act automatically", "Continuous model monitoring for drift, bias, and prompt-injection at production scale", "Auto-generated model cards and audit trails per release"],
    reco: ["Stand up an AI governance committee before scaling — not after the first incident", "Mandate model cards on every production deployment — no model card, no deployment", "Run red-team exercises on production AI quarterly"],
    tools: ["Credo AI", "Holistic AI", "IBM watsonx.governance", "Microsoft Purview AI Hub"],
    risk: ["An ungoverned production model is a regulatory finding waiting to land", "Board cannot attest to controls it cannot see — opaque AI is a fiduciary risk", "Insurance carriers are starting to exclude AI-caused losses — read the policy"],
  },
  reg: {
    subtitle: "Country tax engines · data residency · sector-specific compliance",
    today: ["AI parses regulatory updates and proposes config changes in days, not quarters", "Localization gap detection across hundreds of jurisdictions in production tenants", "AI-assisted SOX, GDPR, HIPAA evidence collection"],
    reco: ["Keep the regulatory tax engines vendor-managed — do not let AI rewrite them", "Use AI to surface gaps; let licensed professionals approve changes", "Document AI's role in every compliance workflow — auditors will ask"],
    tools: ["Vertex Cloud AI", "Avalara AvaTax", "Thomson Reuters ONESOURCE", "OneTrust"],
    risk: ["Autonomous AI changes to tax logic create restated financials and class-action exposure", "Data residency violations from AI training on cross-border data are now multi-million-dollar fines", "Regulators expect named human accountability — 'the model decided' is not a defense"],
  },
};

export const matrix05Vendors = [
  { id: "sap", name: "SAP", sub: "S/4HANA · RISE · BTP" },
  { id: "oracle", name: "Oracle", sub: "Fusion · Autonomous DB · NetSuite" },
  { id: "sfdc", name: "Salesforce", sub: "Sales · Service · Marketing Cloud" },
  { id: "own", name: "Your Data & Custom Apps", sub: "Your proprietary data + bespoke systems" },
];

export const matrix05Dimensions = [
  { num: "01", title: "Walled Gardens & Lock-in", sub: "Exit friction: years, not quarters" },
  { num: "02", title: "Data Sovereignty", sub: "Who owns and trains on your data" },
  { num: "03", title: "Integration Ecosystem", sub: "Connector count = switching cost multiplier" },
  { num: "04", title: "Enterprise Trust & Accountability", sub: "Certifications CIOs rely on when systems fail" },
  { num: "05", title: "AI Pricing & Consumption Toll", sub: "Every AI feature = incremental cost CIOs must model" },
];

export const matrix05Content: Record<string, { observation: string; action: string }[]> = {
  sap: [
    { observation: "S/4HANA + BTP + Ariba share one persistence layer — leaving SAP is multi-year, not multi-quarter.", action: "Lock BTP consumption ceilings into the contract before signing — overruns are the norm, not the exception." },
    { observation: "Joule trains on your business processes inside SAP — sovereignty depends entirely on the contract you negotiate.", action: "Require explicit opt-out from training corpora in writing — default settings rarely favor the customer." },
    { observation: "1,500+ certified integrations via BTP — partner ecosystem deeply embedded in finance close cycles.", action: "Inventory every BTP-connected vendor before any platform decision; switching cost lives here." },
    { observation: "SOC 2 / ISO 27001 / FedRAMP across product lines — strongest trust posture in enterprise ERP.", action: "Map your industry-specific certifications per module — gaps live at the edge, not the core." },
    { observation: "Joule is consumption-priced — AI cost scales with usage, not headcount.", action: "Model 12-month AI spend per business unit before activation; surprise overruns are the most common board issue." },
  ],
  oracle: [
    { observation: "Fusion + Autonomous DB + NetSuite share Oracle Cloud Infrastructure — moving off OCI is the real switching cost.", action: "Negotiate OCI consumption caps and rollover terms — Oracle's default contracts compound annually." },
    { observation: "Oracle AI runs on customer data inside Fusion — data never leaves Oracle cloud, but Oracle controls the model.", action: "Demand training opt-out and audit rights in every Oracle AI contract — silence equals consent in legal review." },
    { observation: "Massive partner network in finance and supply chain — switching means replacing dozens of certified integrations.", action: "List every Oracle-certified partner in your stack before considering migration; hidden dependencies surface late." },
    { observation: "Industry-specific certifications across financial services, healthcare, public sector — strongest in regulated verticals.", action: "Verify Oracle's vertical certifications match your regulatory surface before relying on the platform default." },
    { observation: "Oracle AI is bundled then metered — pricing transparency is weak; expect surprises at renewal.", action: "Require itemized AI usage reports monthly — without them, true cost is invisible until renewal." },
  ],
  sfdc: [
    { observation: "Sales + Service + Marketing Cloud share one data model — decomposition is re-architecture, not export.", action: "AppExchange dependency: hidden exit costs discovered after termination, not before." },
    { observation: "Customer 360 trains Einstein AI on your full CRM + service + commerce corpus.", action: "Data usage restrictions in writing before any Einstein or Agentforce activation — verbal assurances are void." },
    { observation: "8,000+ AppExchange + 1,200 MuleSoft connectors — Salesforce integration layer is stickier than the CRM.", action: "Full integration re-work cost in every Salesforce replacement case — most projects underestimate by 50%+." },
    { observation: "Einstein Trust Layer is contractually included — use it as governance wrapper before building your own.", action: "FedRAMP and HIPAA BAA: verify per feature, not per platform; check with your compliance team." },
    { observation: "Einstein: per seat + per agent action. Every Agentforce action is incremental Salesforce revenue.", action: "Hard consumption caps on all Agentforce features first; remove only after validating unit economics per workflow." },
  ],
  own: [
    { observation: "Your data and custom apps have no lock-in beyond your own architecture — the only moat fully under your control.", action: "Treat custom apps with the same modernization discipline as vendor systems — debt compounds equally fast." },
    { observation: "Your proprietary data is the only training corpus no competitor can replicate — protect it accordingly.", action: "Stand up data classification and labeling before any AI training; you cannot govern what you cannot see." },
    { observation: "Integrations between custom apps and SaaS define how much of the moat survives a platform switch.", action: "Maintain an integration registry — connectors built on tribal knowledge fail at the first staff change." },
    { observation: "Trust comes from your own attestable controls — no vendor brand to lean on.", action: "Adopt NIST AI RMF as your operating standard; auditors and customers will both ask for it." },
    { observation: "Cost is fully under your control — but only if you instrument usage; otherwise AI spend hides inside engineering budgets.", action: "Track model + token consumption per workflow from day one; retrofitting cost telemetry is twice the work." },
  ],
};

export const matrix06 = {
  cols: [
    { id: "deploy", label: "DEPLOY THIS", sub: "What to put in place first", icon: "🚀" },
    { id: "watch", label: "WATCH FOR", sub: "Leading indicators of success", icon: "👁" },
    { id: "kills", label: "THIS KILLS PRODUCTION AI", sub: "What causes failure", icon: "⚠" },
  ],
  rows: [
    {
      name: "People", sub: "Roles, skills and accountability for production AI",
      deploy: ["Appoint a named AI Product Owner per initiative — not a title, a specific person accountable for production outcomes.", "Train 2–3 FDEs per initiative in prompt engineering and agentic workflow skills before go-live.", "Assign a named human approver for every AI decision class touching regulated data, customer money, or compliance."],
      watch: ["FDE utilization on live production systems — below 60% signals adoption is a tooling problem, not a people problem.", "Escalation rate from AI to human decisions — rising means model drift; falling too fast means dangerous over-trust.", "Time from AI output to human review for critical decisions — target under 30 minutes."],
      kills: ["No named human accountable when AI errs — accountability vacuum is the #1 root cause of production AI failure.", "Skill gap between AI tool capability and team proficiency — teams using tools they don't understand cause silent failures.", "Shadow AI use without governance oversight — ungoverned AI in production is liability waiting to surface."],
    },
    {
      name: "Process", sub: "How work flows through and around AI in production",
      deploy: ["Define production-ready criteria before any pilot: minimum accuracy, maximum latency, fallback when AI fails.", "Run parallel human-AI process for 30–60 days before removing the human track — schedule pressure will push you to skip this; do not.", "Build and rehearse an AI incident response playbook before go-live — not after the first failure."],
      watch: ["AI output accuracy vs human baseline reviewed weekly, not monthly — monthly is too slow to catch drift.", "Process cycle time reduction in first 90 days — target 30–50%; below 15% signals the process was overlaid, not redesigned.", "Ratio of AI-assisted decisions escalated back to humans — should decline steadily over the first six months."],
      kills: ["Deploying without a defined rollback plan — when AI fails in production without rollback, the entire process stops.", "Skipping parallel validation under schedule pressure — most common shortcut, most common cause of emergency rollbacks.", "Measuring AI outputs (speed, volume) without measuring outcomes (accuracy, customer impact) — confusing activity with value."],
    },
    {
      name: "Technology", sub: "Infra and tooling decisions that determine production AI quality",
      deploy: ["Model selection policy first: Claude, GPT, Gemini by task type; no ad-hoc picks.", "Dev toolchain standard: Cursor + GitHub Copilot + v0; spec-driven delivery with NFRs in every story.", "Context graph per repo and knowledge graph per domain — AI enforces architecture and domain rules at code-gen time."],
      watch: ["Spec adoption rate: % of stories with embedded NFRs rising weekly; flat = AI quality will degrade.", "Context graph coverage: % of repos mapped; uncovered repos are AI blind spots producing violations.", "FDE velocity vs traditional baseline: target 3–4x throughput; below 2x means spec-driven is not embedded."],
      kills: ["No model selection policy — teams pick the cheapest model; output quality variance kills consistency at scale.", "Spec-driven development skipped — AI generates without specs; output is untestable and unreviewable by design.", "Context graph not built — AI generates code without knowing architecture; NFR violations compound every sprint."],
    },
    {
      name: "Vendor", sub: "What to demand from AI vendors before and during production",
      deploy: ["Engage AI-native system integrators: Galent (FDE model), Accenture iX, Infosys Topaz, TCS AI Cloud.", "Require FDE-as-a-service contracts: outcome-based delivery, not time-and-material.", "Pilot outcome-based delivery on one initiative: fixed committed outcome, shared risk, 90-day proof point."],
      watch: ["Vendor's published model deprecation schedule — without one, you're rebranded T&M.", "Outcome delivery rate: % of committed outcomes hit on schedule; falling rate = T&M behavior under outcome label.", "Proof of FDE model in production — demand case studies with named clients and measured velocity."],
      kills: ["Traditional SI on T&M billing AI work — their incentive is hours billed, not outcomes; AI productivity gains disappear into their margin.", "Vendors with traditional revenue to defend will slow your AI adoption.", "No AI-native delivery model — vendor uses AI tools but delivers the same way; no velocity gain for you."],
    },
  ],
};

export const matrix07Roles = [
  { id: "dev", label: "DEVELOPERS", icon: "</>" },
  { id: "qa", label: "QA / TESTING", icon: "🧪" },
  { id: "arch", label: "ARCHITECTS", icon: "✓" },
  { id: "sre", label: "SRE / DEVOPS", icon: "⚙" },
  { id: "sup", label: "SUPPORT / OPS", icon: "🎧" },
  { id: "data", label: "DATA ENGINEERS", icon: "📊" },
  { id: "sec", label: "SECURITY ENGINEERS", icon: "🔒" },
];

type Stage5 = { exposure: string[]; friction: string[]; start: string[]; scale: string[]; expert: string[] };

export const matrix07Content: Record<string, Stage5> = {
  dev: {
    exposure: ["Cursor and Copilot generate 60–80% of boilerplate I used to write by hand.", "Junior tasks I owned a year ago are now AI-completed in minutes."],
    friction: ["AI generates code that compiles but violates our domain rules — only I know why those rules exist.", "Production debugging across services still requires reading our specific architecture, which AI does not yet know."],
    start: ["Adopt Cursor or Copilot as the daily driver, not an occasional tool.", "Write specs before code — AI quality is bounded by spec quality.", "Review AI output against NFRs, not just functionality."],
    scale: ["Embed NFRs into every story so AI generates compliant code by default.", "Use context graph to ground AI in your actual repo, not generic patterns.", "Pair-program with AI on architecture-sensitive code; review every diff."],
    expert: ["AI handles 80% of code; human focus moves to design intent and review.", "Spec-driven delivery is the default; ad-hoc coding is the exception.", "Context graph makes AI code-gen architecture-aware end to end."],
  },
  qa: {
    exposure: ["AI authors regression tests faster than the QA team can write them by hand.", "Test maintenance, historically half my week, is now AI-automated for stable components."],
    friction: ["Exploratory testing on flows I designed cannot yet be replaced by AI — context is too thin.", "Compliance-driven test evidence still requires human-signed artifacts."],
    start: ["Generate test cases from specs using AI; review and sign off.", "Move regression suites into AI-curated runs to cut noise.", "Adopt mutation testing to validate AI-generated coverage."],
    scale: ["Quality gates become autonomous for low-risk paths; humans review high-risk diffs.", "AI generates negative test cases from production logs.", "Test data generation is AI-driven against schema and constraints."],
    expert: ["QE becomes a quality strategy function, not a test-author function.", "AI maintains regression suites as code evolves; humans curate the strategy.", "Compliance evidence is auto-generated with human attestation only."],
  },
  arch: {
    exposure: ["Developers who used to come to me for pattern advice now ask Cursor first and often don't need me.", "AI found circular dependencies in our services in minutes that I missed across three design reviews."],
    friction: ["When a new service must respect EU data residency AND our Oracle dependency — AI gives clean answers that violate both; I catch it.", "Why we chose our current event bus is in no document: I was in that meeting; AI will never know that.", "A junior generated an architecture that looked great until I asked about blast radius — AI had no answer."],
    start: ["Build a knowledge graph of architecture standards; AI enforces at code-review time.", "Embed NFRs (scalability, fault tolerance, data residency) as first-class story requirements.", "Use context graph to map full integration surface before any modernization is scoped."],
    scale: ["Spec-driven architecture: AI generates component specs from high-level intent; human validates.", "Context graph auto-detects architecture violations before code reaches review.", "Knowledge graph is the living architecture — AI queries it to enforce standards continuously."],
    expert: ["AI enforces architecture standards automatically: no violation reaches production.", "Context graph detects cross-repo NFR breaches (latency, coupling, data flow) at commit time.", "Knowledge graph self-updates from merged ADRs — architecture is always current and queryable."],
  },
  sre: {
    exposure: ["Incident triage that took 30 minutes is now AI-summarized in under 2.", "Runbooks I wrote by hand are now generated and updated by AI from prior incidents."],
    friction: ["Production rollback decisions still need human approval — and rightly so.", "Cross-system root-cause analysis requires graph data AI does not yet have end-to-end."],
    start: ["Adopt AIOps for log, metric, and trace correlation.", "AI-generate runbooks from incident history; humans curate.", "Auto-summarize incidents and post-mortems with AI."],
    scale: ["AI proposes remediation steps; humans approve on non-revenue paths.", "Chaos engineering becomes continuous, not quarterly.", "Knowledge graph of services and dependencies is the operational source of truth."],
    expert: ["AI auto-remediates known failure classes; humans focus on novel ones.", "Operational knowledge graph self-updates from every incident.", "MTTR drops by 60–80% with humans only on high-stakes calls."],
  },
  sup: {
    exposure: ["L1 tickets are increasingly closed by AI assistants without human touch.", "Knowledge base maintenance is largely AI-generated from resolved tickets."],
    friction: ["High-empathy customer issues still require human handling — AI escalates them by design.", "Regulatory complaints need licensed humans to respond."],
    start: ["Deploy AI assistants on L1; measure deflection vs satisfaction.", "Auto-generate KB articles from resolved tickets; humans review.", "Use sentiment analysis to route emotionally-loaded tickets to humans."],
    scale: ["AI handles L1 and L2 with human-approved playbooks.", "Routing model improves with every ticket; weekly retraining cycles.", "QA on AI responses is sampled, not exhaustive."],
    expert: ["AI handles 70–80% of tickets end-to-end with human oversight on escalations.", "Support knowledge graph powers both customers and internal teams.", "Human capacity moves to high-value retention and expansion conversations."],
  },
  data: {
    exposure: ["AI generates SQL and dbt models faster than I can write them.", "Data quality monitoring that took weeks to set up now configures from natural language."],
    friction: ["Modeling decisions that affect financial reporting still require human review and sign-off.", "Cross-domain semantics live in tribal knowledge AI does not yet capture."],
    start: ["Adopt AI for SQL and pipeline generation; review every output.", "AI documents lineage automatically; humans curate gaps.", "Use AI to surface anomalies; humans investigate."],
    scale: ["Semantic layer becomes AI-aware — queries are validated against meaning, not just syntax.", "Pipeline self-healing for known failure modes.", "AI participates in data contract reviews; humans approve."],
    expert: ["AI authors and maintains most pipelines; humans focus on data products and semantics.", "Quality SLAs are AI-monitored and human-attested.", "Data org shifts from plumbing to product."],
  },
  sec: {
    exposure: ["AI detects vulnerabilities in code faster than manual review.", "Threat intel summarization that took analysts hours is AI-generated in minutes."],
    friction: ["Incident response in regulated environments requires named human accountability.", "Novel attack patterns still require human analysts; AI lags by definition."],
    start: ["Adopt AI SAST/DAST in CI; humans triage findings.", "Auto-summarize threat intel with AI; humans decide action.", "Use AI to draft policy and control documentation; humans approve."],
    scale: ["AI co-pilots SOC analysts; humans own incident decisions.", "Detection rules are AI-generated from telemetry patterns.", "Tabletop exercises run quarterly with AI as red team."],
    expert: ["AI handles 70%+ of L1 SOC; humans focus on adversary tradecraft.", "Security knowledge graph powers detection, response, and governance.", "Continuous control attestation is AI-evidenced and human-signed."],
  },
};
