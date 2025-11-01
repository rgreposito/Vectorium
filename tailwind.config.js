module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        vectBlack: "#000000",
        ink: "#0A0E1A",
        midnight: "#0b1220",
        deepBlue: "#020024",
        ocean: "#051a2d",
        neonCyan: "#00d4ff",
        neonViolet: "#8b5cf6",
        gold: "#D4AF37",
        goldLight: "#E6C76E",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212,175,55,0.15)",
      },
      backgroundImage: {
        'mesh': 'radial-gradient(1000px 400px at 0% 0%, rgba(212,175,55,0.06), transparent 60%), radial-gradient(800px 300px at 100% 0%, rgba(0,212,255,0.06), transparent 60%), radial-gradient(1200px 500px at 50% 100%, rgba(139,92,246,0.06), transparent 60%)',
        'grid': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '40px 40px',
      }
    },
  },
  plugins: [],
};
