interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="section-num">{number} /</span>
      <h2
        className="mt-2 text-2xl md:text-3xl font-bold tracking-tight"
        style={{ color: "#f0f4ff", letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base" style={{ color: "#9ba3b2" }}>
          {subtitle}
        </p>
      )}
      <div
        className="mt-4 h-px w-12"
        style={{ backgroundColor: "#4a7fff" }}
      />
    </div>
  );
}
