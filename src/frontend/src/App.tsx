import { SafeStayNav } from "@/components/SafeStayNav";
import {
  CheckItem,
  CustomTooltip,
  MetricCard,
  PhaseCard,
  SectionCard,
  SectionTitle,
  TealBadge,
} from "@/components/SafeStayUI";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AlertTriangle,
  Award,
  BarChart2,
  Bell,
  Brain,
  Building,
  ChevronRight,
  DollarSign,
  FileText,
  Globe,
  Heart,
  Home,
  Lock,
  MapPin,
  MessageSquare,
  QrCode,
  Search,
  Shield,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Video,
  Zap,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TEAL = "#2FC9C2";
const TEAL_DARK = "#1FA8A3";
const CARD_BG = "#122636";
const PIE_COLORS = [TEAL, TEAL_DARK, "#2a7b78", "#1d5a58"];

const revenueData = [
  { year: "Y1", revenue: 0.5 },
  { year: "Y2", revenue: 2 },
  { year: "Y3", revenue: 10 },
  { year: "Y4", revenue: 25 },
  { year: "Y5", revenue: 50 },
];

const tamData = [
  { name: "TAM ($450B)", value: 450 },
  { name: "SAM ($45B)", value: 45 },
  { name: "SOM ($5M)", value: 5 },
];

const fundingData = [
  { name: "Development (40%)", value: 40 },
  { name: "Marketing (30%)", value: 30 },
  { name: "Legal & Insurance (20%)", value: 20 },
  { name: "Operations (10%)", value: 10 },
];

const legendStyle = (value: string) => (
  <span style={{ color: "#9BB0BE", fontSize: 11 }}>{value}</span>
);

const tooltipStyle = {
  background: CARD_BG,
  border: "1px solid #1E3A4A",
  borderRadius: 8,
  fontSize: 12,
};

export default function App() {
  return (
    <div className="dark min-h-screen bg-background font-sans">
      <SafeStayNav />

      <main className="max-w-screen-2xl mx-auto px-4 lg:px-6 py-8 space-y-16">
        {/* ── DASHBOARD ── */}
        <section id="dashboard" className="space-y-8">
          <div className="space-y-3">
            <TealBadge>Investor-Ready · 2026</TealBadge>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              SafeStay <span className="teal-gradient-text">Connect</span>
            </h1>
            <p className="text-secondary-muted text-lg">
              Business Plan — Strategic Overview &amp; Investor Brief
            </p>
            <div className="pt-2 max-w-lg">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-secondary-muted">
                  Plan Completion
                </span>
                <span className="text-xs font-bold text-teal">100%</span>
              </div>
              <Progress value={100} className="h-1.5" />
            </div>
          </div>

          <SectionCard>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <TealBadge>Mission</TealBadge>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                  Empowering strangers to safely help strangers
                </h3>
                <p className="text-secondary-muted text-sm leading-relaxed">
                  SafeStay Connect pairs one male and one female volunteer host
                  who verify each other in-person, then jointly shelter
                  vulnerable guests — travelers, runaways, domestic violence
                  escapees, and the homeless — in a safe, monitored environment
                  with real-time check-ins, AI anomaly detection, and $1M
                  per-stay insurance.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <TealBadge>Seed Stage</TealBadge>
                  <TealBadge>Impact-First</TealBadge>
                  <TealBadge>Safety Verified</TealBadge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:w-72">
                <MetricCard
                  value="Seed"
                  label="Funding Stage"
                  icon={Award}
                  accent
                />
                <MetricCard
                  value="$2M"
                  label="Funding Goal"
                  icon={DollarSign}
                  accent
                />
                <MetricCard
                  value="50M+"
                  label="TAM Users Globally"
                  icon={Globe}
                  accent
                />
                <MetricCard
                  value="15 Cities"
                  label="Year 1 Launch Target"
                  icon={MapPin}
                  accent
                />
              </div>
            </div>
          </SectionCard>
        </section>

        {/* ── EXECUTIVE SUMMARY ── */}
        <section id="executive" className="space-y-6">
          <div className="flex items-center gap-3">
            <TealBadge>01</TealBadge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Executive Summary
            </h2>
          </div>

          <div className="rounded-xl border border-teal/40 bg-card-surface-2 card-glow-teal p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-1">
                  Unique Value Proposition
                </p>
                <p className="text-foreground font-semibold">
                  Opposite-gender host pairing creates built-in mutual vigilance
                  — reducing safety risks through dual accountability,
                  cross-verification, and shared responsibility for every hosted
                  guest.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <MetricCard
              value="50M+"
              label="Potential users globally (UN 2024)"
              icon={Users}
            />
            <MetricCard
              value="$500K"
              label="Year 1 projected revenue"
              icon={TrendingUp}
            />
            <MetricCard
              value="$50M"
              label="5-year revenue target"
              icon={Target}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SectionCard>
              <SectionTitle icon={DollarSign} label="Revenue Model">
                3 Revenue Streams
              </SectionTitle>
              <div className="space-y-3">
                {[
                  {
                    icon: Zap,
                    name: "Commission",
                    desc: "10% of host donations ($20–100/night)",
                  },
                  {
                    icon: Star,
                    name: "Premium Safety",
                    desc: "$5/month for advanced features & badges",
                  },
                  {
                    icon: Building,
                    name: "B2B / NGO",
                    desc: "$500–2,000/month licensing for organizations",
                  },
                ].map(({ icon: Icon, name, desc }) => (
                  <div
                    key={name}
                    className="flex items-start gap-3 p-3 rounded-lg bg-pill"
                  >
                    <Icon className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {name}
                      </p>
                      <p className="text-xs text-secondary-muted">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <SectionTitle icon={BarChart2} label="Projections">
                5-Year Revenue Forecast
              </SectionTitle>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={revenueData}
                  margin={{ top: 4, right: 8, left: -16, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E3A4A" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#9BB0BE", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#9BB0BE", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${v}M`}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "rgba(47,201,194,0.06)" }}
                  />
                  <Bar
                    dataKey="revenue"
                    name="Revenue"
                    fill={TEAL}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </SectionCard>
          </div>
        </section>

        {/* ── MARKET ANALYSIS ── */}
        <section id="market" className="space-y-6">
          <div className="flex items-center gap-3">
            <TealBadge>02</TealBadge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Market Analysis
            </h2>
          </div>

          <SectionCard>
            <SectionTitle icon={Globe} label="Problem Statement">
              The Safe Shelter Gap
            </SectionTitle>
            <p className="text-secondary-muted text-sm leading-relaxed">
              Over 1.6 billion people worldwide lack adequate housing (World
              Bank, 2023). Emergency shelters are overwhelmed, turning away 40%
              of people in crisis. Existing platforms like Airbnb (avg.
              $150/night) are inaccessible for vulnerable individuals, while
              Couchsurfing lacks safety verification. There is no platform that
              pairs vetted, cross-verified volunteer hosts to offer zero-cost
              emergency shelter with institutional-grade safety protocols.
            </p>
          </SectionCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SectionCard>
              <SectionTitle icon={Target} label="Market Size">
                TAM / SAM / SOM
              </SectionTitle>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-subtle">
                      <th className="text-left text-teal text-xs font-semibold py-2 pr-4">
                        Market
                      </th>
                      <th className="text-right text-teal text-xs font-semibold py-2 pr-4">
                        Size
                      </th>
                      <th className="text-right text-teal text-xs font-semibold py-2">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        market: "TAM (Global temp housing)",
                        size: "$450B",
                        source: "Statista 2024",
                      },
                      {
                        market: "SAM (App-addressable)",
                        size: "$45B",
                        source: "World Bank",
                      },
                      {
                        market: "SOM (Year 1 target)",
                        size: "$5M",
                        source: "Internal",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.market}
                        className={`border-b border-subtle/50 ${i % 2 === 1 ? "bg-card-surface-2/50" : ""}`}
                      >
                        <td className="py-2.5 pr-4 text-foreground">
                          {row.market}
                        </td>
                        <td className="py-2.5 pr-4 text-right font-bold text-teal">
                          {row.size}
                        </td>
                        <td className="py-2.5 text-right text-secondary-muted text-xs">
                          {row.source}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionTitle icon={BarChart2} label="Visualization">
                Market Proportion
              </SectionTitle>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={tamData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {tamData.map((entry, i) => (
                      <Cell
                        key={entry.name}
                        fill={PIE_COLORS[i % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend formatter={legendStyle} />
                  <Tooltip
                    formatter={(v: number) => [`$${v}B`, ""]}
                    contentStyle={tooltipStyle}
                  />
                </PieChart>
              </ResponsiveContainer>
            </SectionCard>
          </div>

          <SectionCard>
            <SectionTitle icon={BarChart2} label="Competitive Landscape">
              Competitor Analysis
            </SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-subtle">
                    <th className="text-left text-teal text-xs font-semibold py-2 pr-6">
                      Platform
                    </th>
                    {[
                      "Safety Verification",
                      "Gender Pairing",
                      "Emergency SOS",
                      "NGO Partners",
                      "Insurance",
                      "Free for Guests",
                    ].map((f) => (
                      <th
                        key={f}
                        className="text-center text-teal text-xs font-semibold py-2 px-2"
                      >
                        {f}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Airbnb",
                      checks: [true, false, false, false, true, false],
                      highlight: false,
                    },
                    {
                      name: "Couchsurfing",
                      checks: [false, false, false, false, false, true],
                      highlight: false,
                    },
                    {
                      name: "Trad. Shelters",
                      checks: [true, false, false, true, false, true],
                      highlight: false,
                    },
                    {
                      name: "SafeStay Connect ✦",
                      checks: [true, true, true, true, true, true],
                      highlight: true,
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.name}
                      className={`border-b border-subtle/50 ${
                        row.highlight
                          ? "bg-teal/5"
                          : i % 2 === 1
                            ? "bg-card-surface-2/40"
                            : ""
                      }`}
                    >
                      <td
                        className={`py-2.5 pr-6 font-medium ${row.highlight ? "text-teal" : "text-foreground"}`}
                      >
                        {row.name}
                      </td>
                      {row.checks.map((c, ci) => (
                        <td
                          key={
                            [
                              "safety",
                              "gender",
                              "sos",
                              "ngo",
                              "insurance",
                              "free",
                            ][ci]
                          }
                          className="py-2.5 px-2 text-center"
                        >
                          {c ? (
                            <span className="text-teal text-base">✓</span>
                          ) : (
                            <span className="text-muted-foreground/40 text-base">
                              ✗
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                type: "Host Persona",
                icon: UserCheck,
                name: "Jordan & Sam",
                age: "Ages 25–40",
                desc: "Adventurous, safety-conscious singles who want to make a social impact. Comfortable with technology, motivated by community contribution and karma credits. Passes background checks, values transparency.",
                tags: [
                  "Socially Motivated",
                  "Tech-Savvy",
                  "Background Cleared",
                  "Adventure-Seeker",
                ],
              },
              {
                type: "Guest Persona",
                icon: Heart,
                name: "Alex & River",
                age: "Ages 18–50",
                desc: "Vulnerable individuals in urgent need of temporary safe shelter — travelers stranded, domestic violence survivors, homeless youth, or international students in crisis. Require dignity and zero cost.",
                tags: [
                  "Urgent Need",
                  "Zero Cost",
                  "Safety First",
                  "Dignity Preserved",
                ],
              },
            ].map(({ type, icon: Icon, name, age, desc, tags }) => (
              <SectionCard key={type}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-pill flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-teal font-semibold">{type}</p>
                    <p className="font-bold text-foreground">
                      {name} ·{" "}
                      <span className="text-secondary-muted font-normal">
                        {age}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-secondary-muted mb-3">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <TealBadge key={t}>{t}</TealBadge>
                  ))}
                </div>
              </SectionCard>
            ))}
          </div>
        </section>

        {/* ── PRODUCT ROADMAP ── */}
        <section id="product" className="space-y-6">
          <div className="flex items-center gap-3">
            <TealBadge>03</TealBadge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Product Roadmap
            </h2>
          </div>

          <SectionCard>
            <SectionTitle icon={Smartphone} label="MVP Features">
              Core Platform Capabilities
            </SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  icon: UserCheck,
                  title: "ID Verification",
                  desc: "Government ID + selfie match via AI liveness detection",
                },
                {
                  icon: Brain,
                  title: "AI Host Matching",
                  desc: "Gemini AI pairs hosts by gender balance, location, compatibility",
                },
                {
                  icon: QrCode,
                  title: "QR Meetup Verification",
                  desc: "Hosts scan each other's QR codes at in-person meetup",
                },
                {
                  icon: MessageSquare,
                  title: "Guest Request System",
                  desc: "Guests submit verified shelter requests with urgency level",
                },
                {
                  icon: Video,
                  title: "24/7 Video Check-ins",
                  desc: "Scheduled video calls with AI anomaly detection overlay",
                },
                {
                  icon: AlertTriangle,
                  title: "SOS Button",
                  desc: "One-tap emergency alert directly to local police dispatch",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-lg bg-pill border border-subtle/50 hover:border-teal/40 transition-colors"
                >
                  <Icon className="w-5 h-5 text-teal mb-2" />
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {title}
                  </p>
                  <p className="text-xs text-secondary-muted">{desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SectionCard>
              <SectionTitle icon={Lock} label="Tech Stack">
                Technology Infrastructure
              </SectionTitle>
              <div className="space-y-2">
                {[
                  {
                    tech: "Flutter",
                    role: "Cross-platform mobile app (iOS + Android)",
                    badge: "Frontend",
                  },
                  {
                    tech: "Firebase",
                    role: "Real-time DB, Auth, Cloud Functions, Push Notifications",
                    badge: "Backend",
                  },
                  {
                    tech: "Gemini AI",
                    role: "Matching algorithm, safety scoring, anomaly detection",
                    badge: "AI/ML",
                  },
                  {
                    tech: "Blockchain Logs",
                    role: "Tamper-proof stay audit trail and incident records",
                    badge: "Security",
                  },
                  {
                    tech: "Checkr API",
                    role: "Background checks for all host registrations",
                    badge: "Safety",
                  },
                ].map(({ tech, role, badge }) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-card-surface-2 transition-colors"
                  >
                    <TealBadge>{badge}</TealBadge>
                    <div>
                      <span className="text-sm font-semibold text-foreground">
                        {tech}
                      </span>
                      <span className="text-xs text-secondary-muted ml-2">
                        {role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <SectionTitle icon={MapPin} label="Rollout">
                Phased Launch Plan
              </SectionTitle>
              <div className="grid grid-cols-2 gap-3">
                <PhaseCard
                  phase={1}
                  months="Months 1–6"
                  title="Beta NYC"
                  items={["MVP build", "50 pilot hosts", "Legal setup"]}
                  color={TEAL}
                />
                <PhaseCard
                  phase={2}
                  months="Months 7–9"
                  title="10-City Launch"
                  items={[
                    "App store launch",
                    "NGO partnerships",
                    "PR campaign",
                  ]}
                  color={TEAL_DARK}
                />
                <PhaseCard
                  phase={3}
                  months="Year 2"
                  title="50 Cities"
                  items={[
                    "AI model improvement",
                    "Premium tier launch",
                    "B2B contracts",
                  ]}
                  color="#2a7b78"
                />
                <PhaseCard
                  phase={4}
                  months="Year 3+"
                  title="International"
                  items={["EU & APAC expansion", "Multi-language", "Series A"]}
                  color="#1d5a58"
                />
              </div>
            </SectionCard>
          </div>
        </section>

        {/* ── OPERATIONS ── */}
        <section id="operations" className="space-y-6">
          <div className="flex items-center gap-3">
            <TealBadge>04</TealBadge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Operations &amp; Safety Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SectionCard>
              <SectionTitle icon={Users} label="Protocol">
                Host Pairing Protocol
              </SectionTitle>
              <ol className="space-y-3">
                {[
                  "AI selects 1M + 1F host within 5km, matching availability and compatibility score",
                  "Both hosts receive pairing notification with anonymized profiles",
                  "Mandatory in-person meetup (photo proof uploaded) within 48 hours",
                  "QR codes scanned at meetup to confirm physical presence",
                  "Pair jointly reviews guest request — both must approve",
                  "Stay begins only after both hosts are present at safe space",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-pill border border-teal/40 flex items-center justify-center text-xs font-bold text-teal flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-secondary-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </SectionCard>

            <div className="space-y-4">
              <SectionCard>
                <SectionTitle icon={Shield} label="Safety Measures">
                  6-Layer Safety System
                </SectionTitle>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: DollarSign,
                      label: "$1M Insurance",
                      desc: "Per-stay liability coverage",
                    },
                    {
                      icon: Brain,
                      label: "AI Detection",
                      desc: "Anomaly pattern analysis",
                    },
                    {
                      icon: Star,
                      label: "3-Strike Rating",
                      desc: "Automatic suspension",
                    },
                    {
                      icon: Video,
                      label: "24/7 Monitoring",
                      desc: "Live check-in protocol",
                    },
                    {
                      icon: Heart,
                      label: "NGO Partners",
                      desc: "Shelter network backup",
                    },
                    {
                      icon: Shield,
                      label: "Police API",
                      desc: "Direct emergency dispatch",
                    },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div
                      key={label}
                      className="p-3 rounded-lg bg-pill flex items-start gap-2"
                    >
                      <Icon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          {label}
                        </p>
                        <p className="text-xs text-secondary-muted">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard>
                <SectionTitle icon={FileText} label="Compliance">
                  Legal Framework
                </SectionTitle>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "GDPR Compliant",
                    "CCPA Compliant",
                    "Age 18+ Verified",
                    "Background Checks",
                    "Consent Forms",
                    "Liability Waivers",
                  ].map((item) => (
                    <CheckItem key={item} label={item} />
                  ))}
                </div>
              </SectionCard>
            </div>
          </div>
        </section>

        {/* ── MARKETING ── */}
        <section id="marketing" className="space-y-6">
          <div className="flex items-center gap-3">
            <TealBadge>05</TealBadge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Marketing &amp; Growth Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Users,
                title: "Viral Referral",
                desc: "Hosts earn $10 credits per referral. Target: 30% organic growth MoM.",
              },
              {
                icon: Star,
                title: "Influencer Partnerships",
                desc: "50 travel safety influencers (100K–1M followers). Target: 2M impressions Month 1.",
              },
              {
                icon: MessageSquare,
                title: "PR Safety Stories",
                desc: "10 real rescue stories pitched to major media (NYT, BBC). Build trust and authority.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <SectionCard key={title}>
                <Icon className="w-6 h-6 text-teal mb-3" />
                <p className="font-bold text-foreground mb-2">{title}</p>
                <p className="text-sm text-secondary-muted">{desc}</p>
              </SectionCard>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SectionCard>
              <SectionTitle icon={Globe} label="Channels">
                Marketing Channels
              </SectionTitle>
              <div className="space-y-2.5">
                {[
                  {
                    platform: "TikTok",
                    icon: "📱",
                    strategy: "Safety story shorts, host day-in-life content",
                    reach: "5M+",
                  },
                  {
                    platform: "Instagram",
                    icon: "📷",
                    strategy: "Infographics, testimonials, impact stats",
                    reach: "3M+",
                  },
                  {
                    platform: "SEO / Blog",
                    icon: "🔍",
                    strategy: "'Safe temporary housing near me' keywords",
                    reach: "2M+",
                  },
                  {
                    platform: "NGO Network",
                    icon: "🤝",
                    strategy: "Partner referrals from 200+ shelters",
                    reach: "500K",
                  },
                  {
                    platform: "University Outreach",
                    icon: "🎓",
                    strategy: "Campus ambassador program at 100 universities",
                    reach: "1M+",
                  },
                ].map(({ platform, icon, strategy, reach }) => (
                  <div
                    key={platform}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-pill"
                  >
                    <span className="text-lg">{icon}</span>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-foreground">
                        {platform}
                      </span>
                      <p className="text-xs text-secondary-muted">{strategy}</p>
                    </div>
                    <TealBadge>{reach}</TealBadge>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <SectionTitle icon={TrendingUp} label="Unit Economics">
                CAC / LTV Analysis
              </SectionTitle>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-subtle">
                      {["Segment", "CAC", "LTV", "LTV:CAC"].map((h) => (
                        <th
                          key={h}
                          className="text-left text-teal text-xs font-semibold py-2 pr-4"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { seg: "Hosts", cac: "$15", ltv: "$240", ratio: "16:1" },
                      {
                        seg: "Guests",
                        cac: "$8",
                        ltv: "$0 (free)",
                        ratio: "N/A",
                      },
                      {
                        seg: "Premium Users",
                        cac: "$20",
                        ltv: "$600",
                        ratio: "30:1",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.seg}
                        className={`border-b border-subtle/50 ${i % 2 === 1 ? "bg-card-surface-2/50" : ""}`}
                      >
                        <td className="py-2.5 pr-4 text-foreground font-medium">
                          {row.seg}
                        </td>
                        <td className="py-2.5 pr-4 text-foreground">
                          {row.cac}
                        </td>
                        <td className="py-2.5 pr-4 text-foreground">
                          {row.ltv}
                        </td>
                        <td className="py-2.5 font-bold text-teal">
                          {row.ratio}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          </div>
        </section>

        {/* ── FINANCIALS ── */}
        <section id="financials" className="space-y-6">
          <div className="flex items-center gap-3">
            <TealBadge>06</TealBadge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Monetization &amp; Financial Projections
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: DollarSign,
                title: "Commission",
                detail: "10% of host donations",
                price: "$20–100/night avg",
                note: "Core revenue from voluntary host donations",
              },
              {
                icon: Star,
                title: "Premium Safety",
                detail: "$5 / month",
                price: "Advanced safety features",
                note: "Enhanced badge, priority matching, concierge",
              },
              {
                icon: Building,
                title: "B2B / NGO License",
                detail: "$500–2,000/month",
                price: "Org dashboard access",
                note: "Shelters, universities, government agencies",
              },
            ].map(({ icon: Icon, title, detail, price, note }) => (
              <SectionCard key={title} className="card-glow-teal">
                <div className="w-10 h-10 rounded-xl bg-pill flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <p className="font-bold text-foreground mb-1">{title}</p>
                <p className="text-xl font-extrabold text-teal">{detail}</p>
                <p className="text-xs text-secondary-muted mt-1">{price}</p>
                <p className="text-xs text-secondary-muted mt-2 leading-relaxed">
                  {note}
                </p>
              </SectionCard>
            ))}
          </div>

          <SectionCard>
            <SectionTitle icon={TrendingUp} label="Revenue Model">
              5-Year Revenue Projection
            </SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-subtle">
                    {[
                      "Year",
                      "Active Users",
                      "Avg Revenue/User",
                      "Total Revenue",
                      "MoM Growth",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left text-teal text-xs font-semibold py-2 pr-6"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      year: "Year 1",
                      users: "10,000",
                      avg: "$50",
                      total: "$500K",
                      growth: "20%",
                    },
                    {
                      year: "Year 2",
                      users: "50,000",
                      avg: "$40",
                      total: "$2M",
                      growth: "15%",
                    },
                    {
                      year: "Year 3",
                      users: "200,000",
                      avg: "$50",
                      total: "$10M",
                      growth: "12%",
                    },
                    {
                      year: "Year 4",
                      users: "500,000",
                      avg: "$50",
                      total: "$25M",
                      growth: "10%",
                    },
                    {
                      year: "Year 5",
                      users: "1,000,000",
                      avg: "$50",
                      total: "$50M",
                      growth: "8%",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.year}
                      className={`border-b border-subtle/50 ${i % 2 === 1 ? "bg-card-surface-2/50" : ""}`}
                    >
                      <td className="py-3 pr-6 font-bold text-foreground">
                        {row.year}
                      </td>
                      <td className="py-3 pr-6 text-foreground">{row.users}</td>
                      <td className="py-3 pr-6 text-foreground">{row.avg}</td>
                      <td className="py-3 pr-6 font-bold text-teal">
                        {row.total}
                      </td>
                      <td className="py-3">
                        <TealBadge>{row.growth}</TealBadge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SectionCard>
              <SectionTitle icon={BarChart2} label="P&L">
                5-Year Profit & Loss (USD $000s)
              </SectionTitle>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-subtle">
                      {["Metric", "Y1", "Y2", "Y3", "Y4", "Y5"].map((h) => (
                        <th
                          key={h}
                          className="text-left text-teal font-semibold py-2 pr-3"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-secondary-muted">
                    {[
                      {
                        label: "Revenue",
                        vals: ["500", "2,000", "10,000", "25,000", "50,000"],
                        cls: "font-bold text-foreground",
                      },
                      {
                        label: "COGS",
                        vals: ["150", "500", "2,500", "5,000", "10,000"],
                        cls: "",
                      },
                      {
                        label: "Gross Profit",
                        vals: ["350", "1,500", "7,500", "20,000", "40,000"],
                        cls: "font-semibold text-teal",
                      },
                      {
                        label: "Opex",
                        vals: ["800", "1,800", "5,000", "10,000", "18,000"],
                        cls: "",
                      },
                      {
                        label: "EBITDA",
                        vals: ["-450", "-300", "2,500", "10,000", "22,000"],
                        cls: "dynamic",
                      },
                      {
                        label: "Net Income",
                        vals: ["-500", "-400", "2,000", "8,500", "19,000"],
                        cls: "dynamic",
                      },
                    ].map(({ label, vals, cls }) => (
                      <tr key={label} className="border-b border-subtle/30">
                        <td
                          className={`py-1.5 pr-3 ${cls === "dynamic" ? "" : cls}`}
                        >
                          {label}
                        </td>
                        {vals.map((v) => (
                          <td
                            key={`${label}-${v}`}
                            className={`py-1.5 pr-3 ${
                              cls === "dynamic"
                                ? v.startsWith("-")
                                  ? "text-red-400"
                                  : "text-green-400"
                                : cls.includes("teal")
                                  ? "text-teal font-semibold"
                                  : cls.includes("foreground")
                                    ? "text-foreground font-bold"
                                    : ""
                            }`}
                          >
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-pill">
                  <p className="text-xs text-secondary-muted">Break-Even</p>
                  <p className="font-bold text-teal">Month 18</p>
                </div>
                <div className="p-3 rounded-lg bg-pill">
                  <p className="text-xs text-secondary-muted">Profitability</p>
                  <p className="font-bold text-teal">Month 24</p>
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionTitle icon={DollarSign} label="Seed Round">
                $2M Funding Allocation
              </SectionTitle>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={fundingData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {fundingData.map((entry, i) => (
                      <Cell
                        key={entry.name}
                        fill={PIE_COLORS[i % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend formatter={legendStyle} />
                  <Tooltip
                    formatter={(v: number) => [`${v}%`, ""]}
                    contentStyle={tooltipStyle}
                  />
                </PieChart>
              </ResponsiveContainer>
            </SectionCard>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section id="team" className="space-y-6">
          <div className="flex items-center gap-3">
            <TealBadge>07</TealBadge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Team &amp; Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                role: "CEO",
                name: "Vision & Strategy",
                icon: Star,
                desc: "Serial entrepreneur with 2 successful exits. 10+ years in safety tech and social impact ventures.",
              },
              {
                role: "CTO",
                name: "Tech & AI",
                icon: Brain,
                desc: "Ex-Google engineer. Built ML safety systems at scale. Expert in Flutter, Firebase, and Gemini AI.",
              },
              {
                role: "Chief Safety Officer",
                name: "Compliance & Partnerships",
                icon: Shield,
                desc: "Former law enforcement + NGO director. Builds police API integrations and NGO network agreements.",
              },
              {
                role: "Head of Marketing",
                name: "Growth & Brand",
                icon: TrendingUp,
                desc: "Growth hacker with 3 viral app launches. Specializes in social impact storytelling.",
              },
              {
                role: "Legal Counsel",
                name: "Risk & Compliance",
                icon: FileText,
                desc: "Privacy law specialist. Leads GDPR/CCPA compliance, insurance partnerships, liability frameworks.",
              },
              {
                role: "Community Manager",
                name: "Host & Guest Relations",
                icon: Heart,
                desc: "24/7 support lead. Manages 3-strike system, community guidelines, host training.",
              },
            ].map(({ role, name, icon: Icon, desc }) => (
              <SectionCard key={role}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-pill flex items-center justify-center">
                    <Icon className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-teal font-semibold">{role}</p>
                    <p className="text-sm font-bold text-foreground">{name}</p>
                  </div>
                </div>
                <p className="text-xs text-secondary-muted leading-relaxed">
                  {desc}
                </p>
              </SectionCard>
            ))}
          </div>

          <SectionCard>
            <SectionTitle icon={MapPin} label="Timeline">
              Milestone Roadmap
            </SectionTitle>
            <div className="space-y-3">
              {[
                {
                  period: "Month 1–3",
                  title: "Foundation",
                  tasks: [
                    "Team formation & legal entity",
                    "GDPR/CCPA framework",
                    "Seed funding close",
                  ],
                  color: TEAL,
                },
                {
                  period: "Month 4–6",
                  title: "MVP Build",
                  tasks: [
                    "App development (Flutter)",
                    "AI matching v1",
                    "Background check integration",
                  ],
                  color: TEAL_DARK,
                },
                {
                  period: "Month 7–9",
                  title: "Beta Launch NYC",
                  tasks: [
                    "50 pilot host pairs",
                    "100 beta guests",
                    "NGO partnership #1",
                  ],
                  color: "#2a7b78",
                },
                {
                  period: "Month 10–12",
                  title: "10-City Expansion",
                  tasks: [
                    "App store launch",
                    "1,000 active hosts",
                    "PR campaign",
                  ],
                  color: "#1d5a58",
                },
                {
                  period: "Month 13–18",
                  title: "Scale Operations",
                  tasks: ["50 cities active", "Series A prep", "Premium tier"],
                  color: "#174c49",
                },
                {
                  period: "Month 19–24",
                  title: "Profitability Target",
                  tasks: [
                    "Break-even achieved",
                    "$2M ARR",
                    "International expansion",
                  ],
                  color: TEAL,
                },
              ].map(({ period, title, tasks, color }, i) => (
                <div key={period} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                      style={{ backgroundColor: color }}
                    />
                    {i < 5 && (
                      <div
                        className="w-0.5 flex-1 mt-1"
                        style={{ backgroundColor: color, opacity: 0.3 }}
                      />
                    )}
                  </div>
                  <div className="pb-4 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <TealBadge>{period}</TealBadge>
                      <span className="text-sm font-bold text-foreground">
                        {title}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                      {tasks.map((t) => (
                        <span key={t} className="text-xs text-secondary-muted">
                          • {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* ── RISKS ── */}
        <section id="risks" className="space-y-6">
          <div className="flex items-center gap-3">
            <TealBadge>08</TealBadge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Risk Matrix &amp; Mitigation
            </h2>
          </div>

          <SectionCard>
            <SectionTitle icon={AlertTriangle} label="Risk Assessment">
              Comprehensive Risk Analysis
            </SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-subtle">
                    {[
                      "Risk",
                      "Likelihood",
                      "Impact",
                      "Mitigation Strategy",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left text-teal text-xs font-semibold py-2 pr-4"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      risk: "Safety incidents",
                      likelihood: "Medium",
                      impact: "High",
                      mit: "AI monitoring + $1M insurance + police API integration",
                    },
                    {
                      risk: "Regulatory changes",
                      likelihood: "Medium",
                      impact: "High",
                      mit: "Dedicated legal team + proactive GDPR/CCPA compliance",
                    },
                    {
                      risk: "Low host adoption",
                      likelihood: "High",
                      impact: "High",
                      mit: "Referral incentives + NGO partnerships + karma credits",
                    },
                    {
                      risk: "Data breach",
                      likelihood: "Low",
                      impact: "Very High",
                      mit: "Blockchain logs + AES-256 encryption + Checkr",
                    },
                    {
                      risk: "Fraudulent users",
                      likelihood: "Medium",
                      impact: "High",
                      mit: "Multi-layer ID verification + background checks + AI scoring",
                    },
                    {
                      risk: "Insurance liability",
                      likelihood: "Low",
                      impact: "Very High",
                      mit: "Lloyd's of London partnership + per-stay coverage",
                    },
                    {
                      risk: "Competition (Airbnb)",
                      likelihood: "High",
                      impact: "Medium",
                      mit: "Niche safety focus + free guest model + NGO moat",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.risk}
                      className={`border-b border-subtle/50 ${i % 2 === 1 ? "bg-card-surface-2/50" : ""}`}
                    >
                      <td className="py-2.5 pr-4 font-medium text-foreground">
                        {row.risk}
                      </td>
                      <td className="py-2.5 pr-4">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            row.likelihood === "High"
                              ? "border-red-500/50 text-red-400"
                              : row.likelihood === "Medium"
                                ? "border-yellow-500/50 text-yellow-400"
                                : "border-teal/50 text-teal"
                          }`}
                        >
                          {row.likelihood}
                        </Badge>
                      </td>
                      <td className="py-2.5 pr-4">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            row.impact === "Very High"
                              ? "border-red-500/50 text-red-400"
                              : row.impact === "High"
                                ? "border-orange-500/50 text-orange-400"
                                : "border-yellow-500/50 text-yellow-400"
                          }`}
                        >
                          {row.impact}
                        </Badge>
                      </td>
                      <td className="py-2.5 text-secondary-muted text-xs leading-relaxed">
                        {row.mit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </section>

        {/* ── APPENDIX ── */}
        <section id="appendix" className="space-y-6">
          <div className="flex items-center gap-3">
            <TealBadge>09</TealBadge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Appendix
            </h2>
          </div>

          <SectionCard>
            <SectionTitle icon={FileText} label="User Flows">
              Platform User Journeys
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Host Registration Flow",
                  steps: [
                    "Download app + create account",
                    "Upload government ID + selfie",
                    "AI liveness verification check",
                    "Checkr background check (24–48hr)",
                    "Complete safety training module",
                    "Profile approved + visible to pairs",
                  ],
                },
                {
                  title: "Host Pairing & Meetup Flow",
                  steps: [
                    "AI pairs 1M + 1F within 5km",
                    "Both receive anonymized match",
                    "Mutual acceptance (both agree)",
                    "Schedule meetup at public place",
                    "Scan QR codes to verify presence",
                    "Photo uploaded → pair activated",
                  ],
                },
                {
                  title: "Guest Request & Stay Flow",
                  steps: [
                    "Guest submits request with urgency",
                    "Basic ID verified + safety briefing",
                    "Matched to nearest active host pair",
                    "Both hosts approve guest request",
                    "Check-in QR scan at safe space",
                    "24/7 check-ins + SOS available",
                  ],
                },
              ].map(({ title, steps }) => (
                <div key={title}>
                  <p className="text-sm font-bold text-teal mb-3">{title}</p>
                  <ol className="space-y-2">
                    {steps.map((step, i) => (
                      <li key={step} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-pill border border-teal/40 flex items-center justify-center text-xs font-bold text-teal flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-xs text-secondary-muted">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <SectionTitle icon={Lock} label="Legal Framework">
              Compliance & Liability Notes
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "GDPR / CCPA Compliance",
                  body: "All user data stored in EU-compliant servers with 90-day retention. Users retain right to deletion. Explicit consent collected at onboarding for biometric and background data processing.",
                },
                {
                  title: "Liability & Insurance",
                  body: "Each stay covered by $1M Lloyd's of London liability policy. Hosts protected from personal financial liability. Per-incident claim automated via app with 48-hour resolution SLA.",
                },
                {
                  title: "Consent Architecture",
                  body: "Multi-layered consent at account creation, pairing, guest acceptance, and stay initiation — each requiring explicit digital signatures stored as blockchain-verified records.",
                },
                {
                  title: "Age & Identity Verification",
                  body: "18+ age gate enforced via government ID AI scan. Facial liveness check prevents spoofing. Secondary verification required before first hosting event.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="p-4 rounded-lg bg-pill border border-subtle/50"
                >
                  <p className="text-sm font-bold text-foreground mb-2">
                    {title}
                  </p>
                  <p className="text-xs text-secondary-muted leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <SectionTitle icon={Smartphone} label="Screen Descriptions">
              Key Screen Wireframes
            </SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  screen: "Onboarding Screen",
                  desc: "Mission statement, 3-step progress indicator, ID upload CTA with privacy assurance badge",
                },
                {
                  screen: "Host Dashboard",
                  desc: "Active pair status, pending guest requests, safety score ring, upcoming check-in timer, SOS button",
                },
                {
                  screen: "Guest Request Form",
                  desc: "Urgency level slider, location input, brief story field, safety briefing acknowledgment",
                },
                {
                  screen: "Stay Monitor View",
                  desc: "Active stay map, check-in countdown, video call shortcut, SOS button, pair quick-dial",
                },
              ].map(({ screen, desc }) => (
                <div
                  key={screen}
                  className="rounded-lg border border-subtle bg-card-surface-2 p-4"
                >
                  <div className="w-full h-20 rounded-md bg-navy-deep mb-3 flex items-center justify-center border border-subtle/30">
                    <Smartphone className="w-6 h-6 text-teal opacity-50" />
                  </div>
                  <p className="text-xs font-bold text-teal mb-1">{screen}</p>
                  <p className="text-xs text-secondary-muted">{desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Footer */}
        <footer className="section-divider pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4 text-teal" />
            <span className="font-display font-bold text-foreground text-sm">
              SafeStay Connect
            </span>
            <TealBadge>Confidential · 2026</TealBadge>
          </div>
          <p className="text-xs text-secondary-muted">
            © {new Date().getFullYear()}. Built with{" "}
            <Heart className="inline w-3 h-3 text-teal" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
