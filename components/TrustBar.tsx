const trustItems = [
  { icon: '🏛', label: 'State Contract', value: '#VC195059' },
  { icon: '📅', label: 'In business since', value: '2008' },
  { icon: '🎪', label: 'Shows annually', value: '250+' },
  { icon: '👥', label: 'Touring crews', value: '18 active' },
  { icon: '⚡', label: 'Stage support', value: '24 / 7' },
];

export function TrustBar() {
  return (
    <div className="trust-bar" aria-label="Company trust indicators">
      {trustItems.map((item) => (
        <div key={item.label} className="trust-item" role="listitem">
          <span className="trust-item-icon" aria-hidden="true">{item.icon}</span>
          <span>
            <strong>{item.value}</strong>
            {' '}
            <span>{item.label}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
