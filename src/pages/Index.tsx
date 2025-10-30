export default function Index() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <div className="relative z-10 text-center px-8 w-full">
        <h1 
          className="text-white font-bold leading-tight tracking-tight"
          style={{ 
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(4rem, 16vw, 12rem)',
            textShadow: '0 0 40px rgba(234, 56, 76, 0.5), 0 0 80px rgba(234, 56, 76, 0.3)',
            letterSpacing: '0.05em'
          }}
        >
          ПОД ЗАЩИТОЙ<br />ДОНБАССА
        </h1>
      </div>

      <link 
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" 
        rel="stylesheet" 
      />
    </div>
  );
}