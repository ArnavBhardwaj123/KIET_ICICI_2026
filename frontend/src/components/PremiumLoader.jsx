import React from 'react';

export default function PremiumLoader() {
  return (
    <>
      <style>{`
        @keyframes spin-smooth {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }

        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @keyframes fade-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg,#7c3aed 0%,#6d28d9 50%,#4f46e5 100%)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Floating Particles */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: 'white',
                borderRadius: '9999px',
                left: `${10 + i * 15}%`,
                animation: `floatParticle 4s ease-in-out ${i * 0.5}s infinite`,
                opacity: 0,
              }}
            />
          ))}
        </div>

        {/* Loader Container */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, zIndex: 10 }}>
          {/* Main Loader */}
          <div style={{ position: 'relative', width: 192, height: 192 }}>
            {/* Outer Circle - Pulsing */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              borderRadius: '9999px', border: '8px solid rgba(255,255,255,0.1)',
              animation: 'pulse-scale 2s ease-in-out infinite'
            }} />

            {/* Middle Circle - Spinning */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              borderRadius: '9999px', border: '8px solid transparent',
              borderTop: '8px solid rgba(255,255,255,1)',
              borderRight: '8px solid rgba(255,255,255,1)',
              animation: 'spin-smooth 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
            }} />

            {/* Inner Circle - Counter Spinning */}
            <div style={{
              position: 'absolute', top: 30, left: 30, right: 30, bottom: 30,
              borderRadius: '9999px', border: '6px solid transparent',
              borderBottom: '6px solid rgba(255,255,255,0.6)',
              borderLeft: '6px solid rgba(255,255,255,0.6)',
              animation: 'spin-reverse 2s linear infinite'
            }} />

            {/* Center Dot - Pulsing Scale */}
            <div style={{
              position: 'absolute',
              top: 70, left: 70,
              width: 56, height: 56,
              borderRadius: '9999px',
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,1), rgba(255,255,255,0.8))',
              transformOrigin: 'center',
              animation: 'scale-pulse 1.5s ease-in-out infinite',
              boxShadow: '0 0 40px rgba(255,255,255,0.5)'
            }} />
          </div>

          {/* Loading Text */}
          <div style={{ color: 'white', fontSize: 24, fontWeight: 600, letterSpacing: '0.2em', animation: 'fade-pulse 2s ease-in-out infinite' }}>
            LOADING
          </div>

          {/* Progress Bar */}
          <div style={{ width: 288, height: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: 'linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0.7))', borderRadius: 999, animation: 'progress 3s ease-in-out infinite', boxShadow: '0 0 20px rgba(255,255,255,0.6)' }} />
          </div>
        </div>
      </div>
    </>
  );
}
