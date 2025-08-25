interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      {icon && <div className="mb-4 text-indigo-400">{icon}</div>}
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
