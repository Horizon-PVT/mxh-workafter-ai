import { cn } from "@/lib/utils";

type ChoiceCardProps = {
  label: string;
  selected: boolean;
  multiple?: boolean;
  compact?: boolean;
  onClick: () => void;
};

export function ChoiceCard({
  label,
  selected,
  multiple = false,
  compact = false,
  onClick,
}: ChoiceCardProps) {
  return (
    <button
      aria-pressed={selected}
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border bg-white text-left text-sm font-semibold leading-6 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-100",
        compact ? "min-h-14 p-3.5" : "min-h-20 p-4",
        selected &&
          "border-indigo-500 bg-indigo-50 text-indigo-950 shadow-md ring-2 ring-indigo-100",
      )}
      onClick={onClick}
      type="button"
    >
      <span
        className={cn(
          "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition",
          selected
            ? "border-indigo-600 bg-indigo-600 text-white"
            : "border-slate-300 bg-white text-slate-300",
        )}
      >
        {selected ? "✓" : multiple ? "+" : ""}
      </span>
      <span>{label}</span>
    </button>
  );
}
