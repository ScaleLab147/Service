'use client';

import { Inter, Bebas_Neue } from 'next/font/google';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

// 좌측에 보여줄 유튜브 영상 ID를 여기서 변경하세요
const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ';

export default function AuthPage() {
    const { user, loading, signInWithGoogle } = useAuth();
    const router = useRouter();
    const [isSigningIn, setIsSigningIn] = useState(false);

    useEffect(() => {
        if (!loading && user) {
            router.push('/');
        }
    }, [user, loading, router]);

    const handleGoogleSignIn = async () => {
        setIsSigningIn(true);
        await signInWithGoogle();
    };

    return (
        <main
            style={{
                width: '100vw',
                height: '100vh',
                background: '#000',
                overflow: 'hidden',
                display: 'flex',
            }}
        >
            {/* ── 왼쪽 패널 (3/5) ── */}
            <div
                style={{
                    flex: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '48px 52px',
                }}
            >
                {/* 배경: 그리드 패턴 */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                    }}
                />

                {/* 배경: Glowing curves */}
                <svg
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
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
                    <g style={{ transformOrigin: '720px 820px', animation: 'curveSpin 28s linear infinite' }}>
                        <path d="M 720 820 C 300 600, -200 100, 300 -100" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="18" strokeLinecap="round" />
                        <path d="M 720 820 C 300 600, -200 100, 300 -100" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeLinecap="round" filter="url(#glow-soft)" />
                        <path d="M 720 820 C 500 550, 100 200, 500 -80" fill="none" stroke="rgba(220,230,255,0.04)" strokeWidth="14" strokeLinecap="round" />
                        <path d="M 720 820 C 500 550, 100 200, 500 -80" fill="none" stroke="rgba(220,230,255,0.4)" strokeWidth="1.2" strokeLinecap="round" filter="url(#glow-hard)" />
                        <path d="M 720 820 C 900 500, 1500 300, 1600 -50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="16" strokeLinecap="round" />
                        <path d="M 720 820 C 900 500, 1500 300, 1600 -50" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.3" strokeLinecap="round" filter="url(#glow-soft)" />
                    </g>
                    <g style={{ transformOrigin: '1100px 200px', animation: 'curveSpinCCW 40s linear infinite' }}>
                        <path d="M 1100 200 C 1300 500, 900 800, 400 950" fill="none" stroke="rgba(200,215,255,0.05)" strokeWidth="14" strokeLinecap="round" />
                        <path d="M 1100 200 C 1300 500, 900 800, 400 950" fill="none" stroke="rgba(200,215,255,0.35)" strokeWidth="1.1" strokeLinecap="round" filter="url(#glow-soft)" />
                        <path d="M 1100 200 C 800 300, 200 500, -100 750" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="10" strokeLinecap="round" />
                        <path d="M 1100 200 C 800 300, 200 500, -100 750" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" filter="url(#glow-hard)" />
                    </g>
                </svg>

                {/* 반투명 검은 오버레이 */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.55)',
                    }}
                />

                {/* Back 버튼 */}
                <a
                    href="/"
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'rgba(255,255,255,0.45)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 500,
                        letterSpacing: '-0.01em',
                        transition: 'color 0.15s',
                        width: 'fit-content',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                    className={inter.className}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </a>

                {/* 유튜브 영상 */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        width: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        aspectRatio: '16 / 9',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
                        border: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <iframe
                        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            display: 'block',
                        }}
                    />
                </div>

                {/* NAILART 대형 텍스트 */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 10,
                    }}
                >
                    <p
                        style={{
                            margin: '0 0 4px 0',
                            fontSize: '12px',
                            fontWeight: 500,
                            letterSpacing: '0.2em',
                            color: 'rgba(255,255,255,0.35)',
                            textTransform: 'uppercase',
                        }}
                        className={inter.className}
                    >
                        AI-Powered Thumbnail Generator
                    </p>
                    <h1
                        className={bebasNeue.className}
                        style={{
                            margin: 0,
                            fontSize: 'clamp(80px, 11vw, 160px)',
                            lineHeight: 0.88,
                            color: 'white',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase',
                        }}
                    >
                        NAILART
                    </h1>
                </div>
            </div>

            {/* 패널 구분선 */}
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.07)', flexShrink: 0 }} />

            {/* ── 오른쪽 패널 (2/5) ── */}
            <div
                style={{
                    flex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#080808',
                    padding: '48px 32px',
                }}
                className={inter.className}
            >
                {/* 로그인 카드 */}
                <div
                    style={{
                        width: '100%',
                        maxWidth: '360px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '28px',
                    }}
                >
                    {/* Logo */}
                    <span
                        style={{
                            fontSize: '15px',
                            fontWeight: 500,
                            color: 'rgba(255,255,255,0.5)',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Nailart AI
                    </span>

                    {/* Title & Subtitle */}
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                        <h2
                            style={{
                                fontSize: '30px',
                                fontWeight: 700,
                                color: 'white',
                                margin: 0,
                                letterSpacing: '-0.03em',
                                lineHeight: 1.1,
                            }}
                        >
                            Welcome Back
                        </h2>
                        <p
                            style={{
                                fontSize: '15px',
                                color: 'rgba(255,255,255,0.4)',
                                margin: 0,
                                lineHeight: 1.6,
                                letterSpacing: '-0.01em',
                            }}
                        >
                            Sign in to create amazing thumbnails
                        </p>
                    </div>

                    {/* Divider */}
                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.07)' }} />

                    {/* Google Button */}
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isSigningIn || loading}
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            background: isSigningIn ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.07)',
                            color: isSigningIn ? 'rgba(255,255,255,0.35)' : 'white',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '10px',
                            padding: '14px 20px',
                            fontSize: '15px',
                            fontWeight: 500,
                            cursor: isSigningIn ? 'not-allowed' : 'pointer',
                            letterSpacing: '-0.01em',
                            transition: 'background 0.15s, border-color 0.15s',
                        }}
                        onMouseEnter={(e) => {
                            if (!isSigningIn) {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.11)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isSigningIn) {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                            }
                        }}
                    >
                        {isSigningIn ? (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                                <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                                <path d="M9 2 A7 7 0 0 1 16 9" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
                                <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                            </svg>
                        )}
                        {isSigningIn ? 'Signing in...' : 'Continue with Google'}
                    </button>

                    {/* Terms */}
                    <p
                        style={{
                            fontSize: '12px',
                            color: 'rgba(255,255,255,0.2)',
                            textAlign: 'center',
                            margin: 0,
                            lineHeight: 1.7,
                            letterSpacing: '-0.01em',
                        }}
                    >
                        By continuing, you agree to our{' '}
                        <span style={{ color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>Terms of Service</span>
                        {' '}and{' '}
                        <span style={{ color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>Privacy Policy</span>
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes curveSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes curveSpinCCW {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </main>
    );
}
