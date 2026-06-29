// Layered ambient background: aurora orbs + grid + grain.
export default function AnimatedBackground() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      <div className="bg-grain" />
    </div>
  );
}
