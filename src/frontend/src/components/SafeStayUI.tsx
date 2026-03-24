import { Badge } from "@/components/ui/badge";
import { CheckCircle, ChevronRight, XCircle } from "lucide-react";
import type { ElementType, ReactNode } from "react";

export function SectionCard({
  children,
  className = "",
}: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-subtle bg-card-surface card-glow p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  icon: Icon,
  label,
  children,
}: { icon?: ElementType; label?: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      {Icon && (
        <div className="w-8 h-8 rounded-lg bg-pill flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-teal" />
        </div>
      )}
      <div>
        {label && (
          <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-0.5">
            {label}
          </p>
        )}
        <h2 className="text-xl font-bold text-foreground">{children}</h2>
      </div>
    </div>
  );
}

export function MetricCard({
  value,
  label,
  icon: Icon,
  accent = false,
}: { value: string; label: string; icon?: ElementType; accent?: boolean }) {
  return (
    <div
      className={`rounded-xl border p-4 flex flex-col gap-2 ${
        accent
          ? "card-glow-teal border-teal/30 bg-card-surface-2"
          : "border-subtle bg-card-surface-2 card-glow"
      }`}
    >
      {Icon && <Icon className="w-5 h-5 text-teal" />}
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-secondary-muted">{label}</p>
    </div>
  );
}

export function TealBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-pill text-teal text-xs font-semibold border border-teal/30">
      {children}
    </span>
  );
}

export function CheckItem({
  label,
  checked = true,
}: { label: string; checked?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {checked ? (
        <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
      ) : (
        <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      )}
      <span
        className={`text-sm ${checked ? "text-foreground" : "text-muted-foreground"}`}
      >
        {label}
      </span>
    </div>
  );
}

export function PhaseCard({
  phase,
  months,
  title,
  items,
  color,
}: {
  phase: number;
  months: string;
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="rounded-xl border border-subtle bg-card-surface-2 p-4 card-glow">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {phase}
        </span>
        <span className="text-xs text-secondary-muted">{months}</span>
      </div>
      <p className="font-semibold text-foreground text-sm mb-2">{title}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className="text-xs text-secondary-muted flex items-center gap-1"
          >
            <ChevronRight className="w-3 h-3 text-teal flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RiskBadge({ level }: { level: string }) {
  const cls =
    level === "Very High"
      ? "border-red-500/50 text-red-400"
      : level === "High"
        ? "border-orange-500/50 text-orange-400"
        : level === "Medium"
          ? "border-yellow-500/50 text-yellow-400"
          : "border-teal/50 text-teal";
  return (
    <Badge variant="outline" className={`text-xs ${cls}`}>
      {level}
    </Badge>
  );
}

export function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ color: string; name: string; value: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-subtle bg-card-surface p-3 text-sm">
      <p className="text-secondary-muted mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="font-bold" style={{ color: p.color }}>
          {p.name}: ${p.value}M
        </p>
      ))}
    </div>
  );
}
