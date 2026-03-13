type Stat = {
  value: string;
  label: string;
};

type StatsBarProps = {
  stats: Stat[];
};

export function StatsBar({ stats }: StatsBarProps) {
  if (!stats.length) return null;

  return (
    <div className="stat-bar" role="list">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-pill" role="listitem">
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
