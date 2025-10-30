export default function Index() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-[60vh] bg-contain bg-no-repeat bg-center opacity-80"
        style={{ 
          backgroundImage: `url('https://cdn.poehali.dev/projects/f2f243f8-5ed9-4b9f-af1e-6bade75886ff/files/d7a6a8de-6087-49b3-a35a-234ca925c97d.jpg')`,
          filter: 'drop-shadow(0 0 40px rgba(234, 56, 76, 0.4))'
        }}
      />

      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-[60vh] bg-contain bg-no-repeat bg-center opacity-80"
        style={{ 
          backgroundImage: `url('https://cdn.poehali.dev/projects/f2f243f8-5ed9-4b9f-af1e-6bade75886ff/files/d7a6a8de-6087-49b3-a35a-234ca925c97d.jpg')`,
          filter: 'drop-shadow(0 0 40px rgba(234, 56, 76, 0.4))'
        }}
      />

      <div className="relative z-10 text-center px-8 max-w-5xl">
        <h1 
          className="text-white font-bold leading-tight tracking-tight"
          style={{ 
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(3rem, 12vw, 8rem)',
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