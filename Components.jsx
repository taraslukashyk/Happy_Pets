// Happy Pets — Shared components for the website UI kit
// Load order: React, ReactDOM, Babel, then this file.

const Paw = ({ size = 16, color = 'currentColor', style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} aria-hidden>
    <ellipse cx="12" cy="15" rx="6" ry="5" />
    <circle cx="5.5" cy="9" r="2.2" />
    <circle cx="10" cy="5.5" r="2" />
    <circle cx="14" cy="5.5" r="2" />
    <circle cx="18.5" cy="9" r="2.2" />
  </svg>
);

const Button = ({ variant = 'primary', size = 'md', children, icon, onClick, style }) => {
  const sz = { sm:{py:8,px:14,fs:13}, md:{py:12,px:20,fs:15}, lg:{py:16,px:28,fs:16} }[size];
  const vr = {
    primary:   { bg:'var(--hp-rose)', fg:'#fff', bd:'transparent', sh:'var(--hp-shadow-sm)' },
    secondary: { bg:'#fff', fg:'var(--hp-rose-deep)', bd:'var(--hp-rose)', sh:'none' },
    ghost:     { bg:'transparent', fg:'var(--hp-ink)', bd:'var(--hp-rule)', sh:'none' },
    ink:       { bg:'var(--hp-ink)', fg:'#fff', bd:'transparent', sh:'none' },
    soft:      { bg:'var(--hp-rose-soft)', fg:'var(--hp-rose-deep)', bd:'transparent', sh:'none' },
  }[variant];
  return (
    <button onClick={onClick} style={{
      display:'inline-flex', alignItems:'center', gap:8,
      padding:`${sz.py}px ${sz.px}px`, borderRadius:'var(--hp-r-pill)',
      border:`1.5px solid ${vr.bd}`, background:vr.bg, color:vr.fg,
      fontFamily:'var(--hp-font-text)', fontWeight:700, fontSize:sz.fs,
      letterSpacing:'0.01em', boxShadow:vr.sh, cursor:'pointer',
      transition:'all var(--hp-dur-2) var(--hp-ease)',
      ...style,
    }}>
      {icon && <span style={{ display:'inline-flex' }}>{icon}</span>}
      {children}
    </button>
  );
};

const Chip = ({ active, onClick, children }) => (
  <span onClick={onClick} style={{
    display:'inline-flex', alignItems:'center', gap:6, padding:'7px 14px',
    borderRadius:'var(--hp-r-pill)',
    background: active ? 'var(--hp-rose)' : 'var(--hp-rose-soft)',
    color: active ? '#fff' : 'var(--hp-rose-deep)',
    fontWeight:700, fontSize:13, cursor:'pointer',
    transition:'all var(--hp-dur-2) var(--hp-ease)',
  }}>{children}</span>
);

const Badge = ({ tone = 'rose', children }) => {
  const t = {
    rose:  { bg:'var(--hp-rose-soft)', fg:'var(--hp-rose-deep)' },
    lilac: { bg:'#EBDCEE', fg:'#6B3D70' },
    ink:   { bg:'var(--hp-ink)', fg:'#fff' },
    cream: { bg:'var(--hp-paper-2)', fg:'var(--hp-ink)' },
    solid: { bg:'var(--hp-rose)', fg:'#fff' },
  }[tone];
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:6, padding:'4px 10px',
      borderRadius:4, background:t.bg, color:t.fg,
      fontFamily:'var(--hp-font-text)', fontWeight:800, fontSize:11,
      letterSpacing:'0.12em', textTransform:'uppercase',
    }}>{children}</span>
  );
};

const Input = ({ label, placeholder, value, onChange, state, error }) => {
  const [focused, setFocused] = React.useState(false);
  const isFocus = focused || state === 'focus';
  const border = state === 'error' ? 'var(--hp-error)' : isFocus ? 'var(--hp-rose)' : 'var(--hp-rule)';
  return (
    <div style={{ display:'grid', gap:6 }}>
      {label && <div className="hp-label" style={{ fontSize:10 }}>{label}</div>}
      <input
        value={value || ''} placeholder={placeholder}
        onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          padding:'14px 16px', borderRadius:'var(--hp-r-md)',
          border:`1.5px solid ${border}`, background:'#fff',
          boxShadow: isFocus ? 'var(--hp-shadow-ring)' : 'none',
          fontFamily:'var(--hp-font-text)', fontSize:15, color:'var(--hp-ink)',
          outline:'none',
          transition:'all var(--hp-dur-2) var(--hp-ease)',
        }}
      />
      {state === 'error' && error && <div style={{ fontSize:12, color:'var(--hp-error)' }}>{error}</div>}
    </div>
  );
};

const Card = ({ children, tone = 'white', style, onClick }) => {
  const bg = tone === 'rose' ? 'var(--hp-rose-soft)' : tone === 'cream' ? 'var(--hp-paper-2)' : '#fff';
  return (
    <div onClick={onClick} style={{
      background: bg, borderRadius:'var(--hp-r-lg)', padding:24,
      border: tone === 'white' ? '1px solid var(--hp-rule-soft)' : 'none',
      boxShadow: 'var(--hp-shadow-xs)',
      ...style,
    }}>{children}</div>
  );
};

// Icon wrapper for Lucide
const Ico = ({ name, size = 20, color, stroke = 1.5, style }) => (
  <i data-lucide={name} style={{ width:size, height:size, color, display:'inline-flex', ...style }}
     data-stroke-width={stroke} />
);

Object.assign(window, { Paw, Button, Chip, Badge, Input, Card, Ico });
