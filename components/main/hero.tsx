'use client';

export function Hero() {
    return (
        <section
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                background: '#000',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Grid pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
                    `,
                    backgroundSize: '90px 90px',
                }}
            />

            {/* Glowing curves SVG */}
            <svg
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="glow-soft" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="5" result="b1" />
                        <feGaussianBlur stdDeviation="14" result="b2" />
                        <feMerge>
                            <feMergeNode in="b2" />
                            <feMergeNode in="b1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="glow-hard" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="3" result="b1" />
                        <feGaussianBlur stdDeviation="8" result="b2" />
                        <feMerge>
                            <feMergeNode in="b2" />
                            <feMergeNode in="b1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Group 1 — rotates CW, origin: bottom-center */}
                <g style={{ transformOrigin: '720px 820px', animation: 'curveSpin 28s linear infinite' }}>
                    {/* Curve A — wide outer arc */}
                    <path
                        d="M 720 820 C 300 600, -200 100, 300 -100"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="18"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 720 820 C 300 600, -200 100, 300 -100"
                        fill="none"
                        stroke="rgba(255,255,255,0.55)"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        filter="url(#glow-soft)"
                    />

                    {/* Curve B — slightly tighter */}
                    <path
                        d="M 720 820 C 500 550, 100 200, 500 -80"
                        fill="none"
                        stroke="rgba(220,230,255,0.04)"
                        strokeWidth="14"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 720 820 C 500 550, 100 200, 500 -80"
                        fill="none"
                        stroke="rgba(220,230,255,0.45)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        filter="url(#glow-hard)"
                    />

                    {/* Curve C — sweeps right */}
                    <path
                        d="M 720 820 C 900 500, 1500 300, 1600 -50"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="16"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 720 820 C 900 500, 1500 300, 1600 -50"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        filter="url(#glow-soft)"
                    />
                </g>

                {/* Group 2 — rotates CCW, origin: upper-right */}
                <g style={{ transformOrigin: '1100px 200px', animation: 'curveSpinCCW 40s linear infinite' }}>
                    {/* Curve D */}
                    <path
                        d="M 1100 200 C 1300 500, 900 800, 400 950"
                        fill="none"
                        stroke="rgba(200,215,255,0.05)"
                        strokeWidth="14"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 1100 200 C 1300 500, 900 800, 400 950"
                        fill="none"
                        stroke="rgba(200,215,255,0.38)"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                        filter="url(#glow-soft)"
                    />

                    {/* Curve E */}
                    <path
                        d="M 1100 200 C 800 300, 200 500, -100 750"
                        fill="none"
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 1100 200 C 800 300, 200 500, -100 750"
                        fill="none"
                        stroke="rgba(255,255,255,0.32)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        filter="url(#glow-hard)"
                    />
                </g>

                {/* Radial vignette — darkens edges */}
                <defs>
                    <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.65)" />
                    </radialGradient>
                </defs>
                <rect width="1440" height="900" fill="url(#vignette)" />
            </svg>

            {/* Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    color: 'white',
                    padding: '0 24px',
                }}
            >
                <h1
                    style={{
                        fontSize: 'clamp(36px, 5.5vw, 76px)',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.1,
                        marginBottom: '24px',
                    }}
                >
                    AI로 만드는 유튜브 썸네일
                </h1>

                <p
                    style={{
                        fontSize: 'clamp(15px, 1.6vw, 18px)',
                        lineHeight: 1.75,
                        opacity: 0.6,
                        marginBottom: '40px',
                    }}
                >
                    클릭을 부르는 썸네일, 이제 AI가 만들어드립니다.<br />
                    몇 초 만에 전문가 수준의 썸네일을 생성하세요.
                </p>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.22)',
                            borderRadius: '8px',
                            padding: '12px 28px',
                            fontSize: '15px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)',
                            fontFamily: 'inherit',
                        }}
                    >
                        Get Started
                    </button>
                    <button
                        style={{
                            background: 'transparent',
                            color: 'rgba(255,255,255,0.7)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '8px',
                            padding: '12px 28px',
                            fontSize: '15px',
                            fontWeight: 400,
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                        }}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
