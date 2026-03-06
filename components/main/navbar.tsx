'use client';

import Image from 'next/image';

export function Navbar() {
    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 32px',
                height: '60px',
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
        >
            {/* Left — Logo + Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image
                    src="/nailart.png"
                    alt="Nailart AI"
                    width={30}
                    height={30}
                    style={{ objectFit: 'contain' }}
                />
                <span
                    style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        color: 'white',
                        fontFamily: 'inherit',
                    }}
                >
                    Nailart AI
                </span>
            </div>

            {/* Center — Nav Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
                {['Features', 'Pricing', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href="#"
                        style={{
                            fontSize: '15px',
                            color: 'rgba(255,255,255,0.65)',
                            textDecoration: 'none',
                            fontFamily: 'inherit',
                            transition: 'color 0.15s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Right — Get Started */}
            <button
                style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.18)',
                    borderRadius: '8px',
                    padding: '8px 20px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    backdropFilter: 'blur(8px)',
                }}
            >
                Get Started
            </button>
        </nav>
    );
}
