// Happy Pets — Website sections (Nav, Hero, Services, Masters, Pricing, Footer, BookingModal)

const Nav = ({ onBook }) => (
  <nav style={{
    position: 'sticky', top: 0, zIndex: 10,
    background: 'rgba(253,250,251,0.85)', backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--hp-rule-soft)',
  }}>
    <div style={{
      maxWidth: 1200, margin: '0 auto', padding: '16px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="../../assets/logo-official.jpg" alt="Happy Pets"
          style={{ width: 44, height: 44, objectFit: 'contain', borderRadius: '50%', background: '#fff' }} />
        <div style={{ fontFamily: 'var(--hp-font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.01em' }}>
          Happy Pets
        </div>
      </div>
      <div style={{ display: 'flex', gap: 28, fontSize: 14, fontWeight: 600, color: 'var(--hp-ink-2)' }}>
        <a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Послуги</a>
        <a href="#team" style={{ color: 'inherit', textDecoration: 'none' }}>Команда</a>
        <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Ціни</a>
        <a href="#reviews" style={{ color: 'inherit', textDecoration: 'none' }}>Відгуки</a>
        <a href="#contacts" style={{ color: 'inherit', textDecoration: 'none' }}>Контакти</a>
      </div>
      <Button variant="primary" size="sm" icon={<Paw size={14} color="#fff" />} onClick={onBook}>
        Записатися
      </Button>
    </div>
  </nav>
);

const Hero = ({ onBook }) => (
  <section style={{
    position: 'relative', overflow: 'hidden',
    background: 'var(--hp-rose-soft)',
    padding: '72px 0 64px',
  }}>
    {/* paw pattern */}
    <svg style={{ position: 'absolute', inset: 0, opacity: 0.07 }} width="100%" height="100%" aria-hidden>
      <defs>
        <pattern id="paw-hero" width="120" height="120" patternUnits="userSpaceOnUse">
          <g transform="translate(30 30) scale(0.6)" fill="#A6245A">
            <ellipse cx="0" cy="10" rx="14" ry="11" />
            <circle cx="-12" cy="-6" r="4.5" /><circle cx="-4" cy="-14" r="4" />
            <circle cx="4" cy="-14" r="4" /><circle cx="12" cy="-6" r="4.5" />
          </g>
          <g transform="translate(90 90) scale(0.5) rotate(25)" fill="#A6245A">
            <ellipse cx="0" cy="10" rx="14" ry="11" />
            <circle cx="-12" cy="-6" r="4.5" /><circle cx="-4" cy="-14" r="4" />
            <circle cx="4" cy="-14" r="4" /><circle cx="12" cy="-6" r="4.5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#paw-hero)" />
    </svg>

    <div style={{
      position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 32px',
      display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 48, alignItems: 'center',
    }}>
      <div>
        <div style={{
          display: 'inline-flex', gap: 10, alignItems: 'center',
          padding: '6px 14px', background: '#fff', borderRadius: 'var(--hp-r-pill)',
          boxShadow: 'var(--hp-shadow-sm)', marginBottom: 20,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--hp-rose)' }} />
          <span className="hp-label" style={{ color: 'var(--hp-rose-deep)' }}>SPA · Озон · Три рівні майстрів</span>
        </div>
        <h1 style={{
          fontFamily: 'var(--hp-font-display)', fontSize: 72, fontWeight: 700,
          color: 'var(--hp-rose-deep)', letterSpacing: '-0.03em', lineHeight: 0.98, margin: 0,
        }}>
          Спа-ритуал<br />
          <span style={{ fontStyle: 'italic', fontWeight: 500 }}>для вашого</span><br />
          улюбленця.
        </h1>
        <p style={{ marginTop: 20, fontSize: 17, color: 'var(--hp-ink)', maxWidth: 480, lineHeight: 1.55 }}>
          Єдиний салон у центрі Черкас, де великі і малі отримують повноцінний SPA-догляд – включно з озонотерапією.
        </p>
        <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" icon={<Paw size={16} color="#fff" />} onClick={onBook}>
            Онлайн-запис
          </Button>
          <Button variant="secondary" size="lg">Переглянути прайс</Button>
        </div>
        <div style={{
          marginTop: 28, display: 'flex', gap: 22, fontSize: 13, color: 'var(--hp-rose-deep)',
          fontWeight: 600, flexWrap: 'wrap',
        }}>
          <span>⭐ 4.9 · 340+ відгуків</span>
          <span>📍 Симоненка, 5</span>
          <span>⏱ Пн–Пт 9:00–18:00</span>
        </div>
      </div>

      <div style={{ position: 'relative', minHeight: 460 }}>
        {/* Photo placeholder — asks for real before/after photo */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'var(--hp-ink)', borderRadius: 'var(--hp-r-2xl)',
          boxShadow: 'var(--hp-shadow-lg)',
          overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, opacity: 0.14 }}>
            <defs><pattern id="h-stripe" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2.5" height="5" fill="#FFD6E8" />
            </pattern></defs>
            <rect width="100" height="100" fill="url(#h-stripe)" />
          </svg>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div className="hp-mono" style={{
              color: '#FFD6E8', fontSize: 13, padding: '8px 14px',
              background: 'rgba(255,255,255,0.08)', borderRadius: 6,
            }}>hero photo · йорк до/після · 4:5</div>
          </div>
        </div>
        {/* Floating review card */}
        <div style={{
          position: 'absolute', bottom: -24, left: -24, zIndex: 2,
          background: '#fff', borderRadius: 'var(--hp-r-lg)', padding: '14px 18px',
          boxShadow: 'var(--hp-shadow-md)', maxWidth: 220,
          transform: 'rotate(-3deg)',
        }}>
          <div style={{ fontSize: 18, color: '#D6932E' }}>★★★★★</div>
          <div style={{ fontSize: 13, color: 'var(--hp-ink)', marginTop: 4, lineHeight: 1.4 }}>
            «Наш Барсик виходить звідти якийсь особливо щасливий 🥰»
          </div>
          <div style={{ fontSize: 11, color: 'var(--hp-ink-3)', marginTop: 6 }}>— Олена, власниця йорка</div>
        </div>
      </div>
    </div>
  </section>
);

const Services = ({ onBook }) => {
  const items = [
    {
      lvl: 'Базовий · Junior', t: 'Гігієнічна стрижка',
      d: 'Підстригання пазурів, вух, санвузлів. Для охайності між основними стрижками.',
      p: '450 ₴', time: '45 хв', featured: false
    },
    {
      lvl: 'Комплекс · Грумер', t: 'Повний груминг',
      d: 'Купання, сушіння, розчісування, стрижка за стандартом породи, обрізання пазурів та вух.',
      p: '900 ₴', time: '1 год 30 хв', featured: true
    },
    {
      lvl: 'Спа · Топ-грумер', t: 'SPA з озоном',
      d: 'Озонотерапія, глибоке очищення, маска-кондиціонер, аромаспа, дзеркальна сушка.',
      p: '1 450 ₴', time: '2 год', featured: false
    },
  ];
  return (
    <section id="services" style={{ padding: '88px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
          <div>
            <div className="hp-label" style={{ color: 'var(--hp-rose)' }}>02 · Послуги</div>
            <h2 className="hp-h1" style={{ marginTop: 10 }}>Оберіть свій ритуал</h2>
          </div>
          <a href="#pricing" style={{ color: 'var(--hp-rose)', fontWeight: 700, textDecoration: 'none' }}>
            Повний прайс →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {items.map((s, i) => (
            <article key={i} style={{
              background: s.featured ? 'var(--hp-rose)' : '#fff',
              color: s.featured ? '#fff' : 'var(--hp-ink)',
              border: s.featured ? 'none' : '1px solid var(--hp-rule-soft)',
              borderRadius: 'var(--hp-r-lg)', padding: 24,
              boxShadow: s.featured ? 'var(--hp-shadow-md)' : 'var(--hp-shadow-xs)',
              display: 'flex', flexDirection: 'column', gap: 12, minHeight: 280, position: 'relative',
            }}>
              {s.featured && (
                <div style={{ position: 'absolute', top: 16, right: 16 }}>
                  <span style={{
                    padding: '4px 10px', borderRadius: 4, background: '#fff',
                    color: 'var(--hp-rose)', fontSize: 10, fontWeight: 800,
                    letterSpacing: '0.14em', textTransform: 'uppercase'
                  }}>Рекомендовано</span>
                </div>
              )}
              <div style={{
                fontSize: 10, fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: s.featured ? 'var(--hp-rose-soft)' : 'var(--hp-rose-deep)'
              }}>
                {s.lvl}
              </div>
              <div style={{
                fontFamily: 'var(--hp-font-display)', fontWeight: 700, fontSize: 26,
                letterSpacing: '-0.015em', lineHeight: 1.1
              }}>{s.t}</div>
              <div style={{
                fontSize: 14, lineHeight: 1.5,
                color: s.featured ? 'rgba(255,255,255,0.86)' : 'var(--hp-ink-2)'
              }}>{s.d}</div>
              <div style={{
                marginTop: 'auto', display: 'flex', justifyContent: 'space-between',
                alignItems: 'baseline', paddingTop: 14,
                borderTop: s.featured ? '1px solid rgba(255,255,255,.25)' : '1px dashed var(--hp-rule)',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--hp-font-display)', fontWeight: 700,
                    fontSize: 30, letterSpacing: '-0.02em'
                  }}>{s.p}</div>
                  <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>від · {s.time}</div>
                </div>
                <button onClick={onBook} style={{
                  padding: '10px 16px', borderRadius: 'var(--hp-r-pill)',
                  background: s.featured ? '#fff' : 'var(--hp-ink)',
                  color: s.featured ? 'var(--hp-rose)' : '#fff',
                  fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer',
                }}>Записатися →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Masters = ({ active, setActive }) => {
  const team = [
    {
      n: 'Анастасія', r: 'Топ-грумер · 8 років', c: '#D4457A',
      bio: 'Спеціаліст зі складних стрижок, робота з великими породами, навчання команди.'
    },
    {
      n: 'Іра', r: 'Грумер · 4 роки', c: '#9B5EA0',
      bio: 'Породна стрижка, делікатний підхід до боязких тварин, SPA-процедури.'
    },
    {
      n: 'Юлія', r: 'Молодший грумер', c: '#E67AA2',
      bio: 'Гігієнічний груминг, купання, догляд за котами. У процесі сертифікації.'
    },
  ];
  return (
    <section id="team" style={{ padding: '88px 0', background: 'var(--hp-paper-2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="hp-label" style={{ color: 'var(--hp-rose)' }}>03 · Команда</div>
        <h2 className="hp-h1" style={{ marginTop: 10, marginBottom: 36 }}>Ваш майстер — три рівні експертизи</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {team.map((p, i) => (
            <div key={p.n} onClick={() => setActive(i)} style={{
              background: active === i ? 'var(--hp-rose)' : '#fff',
              color: active === i ? '#fff' : 'var(--hp-ink)',
              borderRadius: 'var(--hp-r-lg)', padding: 24,
              border: active === i ? 'none' : '1px solid var(--hp-rule-soft)',
              boxShadow: active === i ? 'var(--hp-shadow-md)' : 'var(--hp-shadow-xs)',
              cursor: 'pointer', transition: 'all var(--hp-dur-2) var(--hp-ease)',
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: active === i ? '#fff' : p.c,
                color: active === i ? p.c : '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--hp-font-display)', fontWeight: 700, fontSize: 32,
                marginBottom: 16,
              }}>{p.n[0]}</div>
              <div style={{ fontFamily: 'var(--hp-font-display)', fontWeight: 700, fontSize: 24 }}>{p.n}</div>
              <div style={{ fontSize: 13, opacity: 0.8, marginTop: 4, fontWeight: 600 }}>{p.r}</div>
              <div style={{
                fontSize: 14, marginTop: 14, lineHeight: 1.5,
                color: active === i ? 'rgba(255,255,255,0.88)' : 'var(--hp-ink-2)'
              }}>{p.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PriceTable = () => {
  const rows = [
    ['Йорк · Мальтезе', '350', '750', '1 200', '1:15'],
    ['Шпіц · Пекінес', '400', '850', '1 300', '1:30'],
    ['Кокер · Спанієль', '500', '1 000', '1 500', '1:45'],
    ['Лабрадор · Великі', '650', '1 300', '1 950', '2:15'],
    ['Кіт · усі породи', '400', '800', '1 200', '1:00'],
  ];
  return (
    <section id="pricing" style={{ padding: '88px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div className="hp-label" style={{ color: 'var(--hp-rose)' }}>04 · Прайс</div>
        <h2 className="hp-h1" style={{ marginTop: 10, marginBottom: 8 }}>Все прозоро — і без сюрпризів</h2>
        <p style={{ color: 'var(--hp-ink-2)', fontSize: 16, maxWidth: 600, marginBottom: 28 }}>
          Час процедури фіксований. Ціна — теж. Якщо є протипоказання чи особливості — ми чесно проговоримо це до запису.
        </p>
        <div style={{ background: 'var(--hp-paper-2)', borderRadius: 'var(--hp-r-lg)', padding: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
            <thead>
              <tr style={{ color: 'var(--hp-ink-3)' }}>
                {['Порода · Розмір', 'Гігієнічна', 'Комплекс', 'SPA · Озон', 'Час'].map((h, i) => (
                  <th key={i} style={{
                    textAlign: i === 4 ? 'right' : 'left',
                    padding: '8px 0', fontWeight: 700, fontSize: 11,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ borderTop: '1px dashed var(--hp-rule)' }}>
                  <td style={{ padding: '16px 0', fontWeight: 700 }}>{r[0]}</td>
                  <td style={{ padding: '16px 0' }}>{r[1]} ₴</td>
                  <td style={{ padding: '16px 0' }}>{r[2]} ₴</td>
                  <td style={{ padding: '16px 0', color: 'var(--hp-rose-deep)', fontWeight: 700 }}>{r[3]} ₴</td>
                  <td style={{
                    padding: '16px 0', textAlign: 'right', color: 'var(--hp-ink-3)',
                    fontFamily: 'var(--hp-font-mono)', fontSize: 13
                  }}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contacts" style={{ background: 'var(--hp-ink)', color: '#fff', padding: '64px 0 32px' }}>
    <div style={{
      maxWidth: 1200, margin: '0 auto', padding: '0 32px',
      display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <img src="../../assets/logo-official.jpg" alt="" style={{
            width: 48, height: 48, borderRadius: '50%', background: '#fff'
          }} />
          <div style={{ fontFamily: 'var(--hp-font-display)', fontWeight: 700, fontSize: 22 }}>Happy Pets</div>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, maxWidth: 320 }}>
          Груминг & SPA для собак і котів у центрі Черкас. Делікатно та з любов'ю — з 2021 року.
        </p>
      </div>
      <div>
        <div className="hp-label" style={{ color: 'var(--hp-rose-soft)' }}>Адреса</div>
        <div style={{ marginTop: 10, lineHeight: 1.7, fontSize: 14 }}>
          вул. Симоненка, 5<br />Черкаси<br />Пн–Пт 9:00–18:00<br />Сб 10:00–16:00
        </div>
      </div>
      <div>
        <div className="hp-label" style={{ color: 'var(--hp-rose-soft)' }}>Запис</div>
        <div style={{ marginTop: 10, lineHeight: 1.9, fontSize: 14 }}>
          <div>EasyWeek · Dikidi</div>
          <div>Telegram · Direct</div>
          <div>+380 XX XXX XX XX</div>
        </div>
      </div>
      <div>
        <div className="hp-label" style={{ color: 'var(--hp-rose-soft)' }}>Соцмережі</div>
        <div style={{ marginTop: 10, lineHeight: 1.9, fontSize: 14 }}>
          <div>@happy_pets_che</div>
          <div>Instagram · TikTok</div>
        </div>
      </div>
    </div>
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 40, paddingTop: 20,
      fontSize: 12, color: 'rgba(255,255,255,0.5)', textAlign: 'center'
    }}>
      © 2026 Happy Pets Grooming & Spa Salon · З любов'ю до кожної лапки
    </div>
  </footer>
);

const BookingModal = ({ open, onClose }) => {
  const [step, setStep] = React.useState(1);
  const [name, setName] = React.useState('');
  const [pet, setPet] = React.useState('Барсик');
  const [breed, setBreed] = React.useState('Йорк');
  const [svc, setSvc] = React.useState('Комплекс');
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(26,26,46,0.55)', zIndex: 20,
      backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'fadeIn 200ms var(--hp-ease)',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: 520, maxWidth: '92vw', background: '#fff', borderRadius: 'var(--hp-r-xl)',
        padding: 32, boxShadow: 'var(--hp-shadow-xl)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <div className="hp-label" style={{ color: 'var(--hp-rose)' }}>Крок {step} з 3</div>
            <h3 style={{ fontFamily: 'var(--hp-font-display)', fontSize: 28, marginTop: 4 }}>
              {step === 1 ? 'Познайомимось?' : step === 2 ? 'Хто прийде?' : 'Майже готово 🐾'}
            </h3>
          </div>
          <button onClick={onClose} style={{
            width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--hp-rule-soft)',
            background: '#fff', cursor: 'pointer', fontSize: 16, color: 'var(--hp-ink-2)'
          }}>×</button>
        </div>

        {step === 1 && (
          <div style={{ display: 'grid', gap: 14 }}>
            <Input label="Ваше ім'я" placeholder="Як до вас звертатися?" value={name} onChange={setName} />
            <Input label="Телефон" placeholder="+380 XX XXX XX XX" />
          </div>
        )}
        {step === 2 && (
          <div style={{ display: 'grid', gap: 14 }}>
            <Input label="Ім'я тварини" value={pet} onChange={setPet} state="focus" />
            <div>
              <div className="hp-label" style={{ fontSize: 10, marginBottom: 8 }}>Порода</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Йорк', 'Мальтезе', 'Шпіц', 'Лабрадор', 'Кіт', 'Інше'].map(b => (
                  <Chip key={b} active={breed === b} onClick={() => setBreed(b)}>{b}</Chip>
                ))}
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div style={{ display: 'grid', gap: 12 }}>
            <div className="hp-label" style={{ fontSize: 10 }}>Послуга</div>
            <div style={{ display: 'grid', gap: 8 }}>
              {['Гігієнічна', 'Комплекс', 'SPA з озоном'].map(s => (
                <div key={s} onClick={() => setSvc(s)} style={{
                  padding: '14px 18px', borderRadius: 'var(--hp-r-md)',
                  border: `1.5px solid ${svc === s ? 'var(--hp-rose)' : 'var(--hp-rule)'}`,
                  background: svc === s ? 'var(--hp-rose-50)' : '#fff',
                  cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                  fontWeight: svc === s ? 700 : 500,
                  color: svc === s ? 'var(--hp-rose-deep)' : 'var(--hp-ink)',
                }}>
                  <span>{s}</span>
                  <span className="hp-mono" style={{ fontSize: 13, opacity: 0.7 }}>
                    {s === 'Гігієнічна' ? '450 ₴ · 45 хв' : s === 'Комплекс' ? '900 ₴ · 1:30' : '1 450 ₴ · 2:00'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{
          marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 20, borderTop: '1px dashed var(--hp-rule)',
        }}>
          {step > 1
            ? <Button variant="ghost" size="sm" onClick={() => setStep(step - 1)}>← Назад</Button>
            : <div />}
          {step < 3
            ? <Button variant="primary" onClick={() => setStep(step + 1)}>Далі →</Button>
            : <Button variant="primary" icon={<Paw size={14} color="#fff" />} onClick={onClose}>Підтвердити</Button>}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Nav, Hero, Services, Masters, PriceTable, Footer, BookingModal });
