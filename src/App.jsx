import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Tracks from "./components/Tracks.jsx";
import Timeline from "./components/Timeline.jsx";
import Prizes from "./components/Prizes.jsx";
import Sponsors from "./components/Sponsors.jsx";
import Faq from "./components/Faq.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <div className="pointer-events-none fixed inset-0 grid-glow opacity-60" />
      <div className="pointer-events-none fixed -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-mint-500/20 blur-[130px] animate-pulse-slow" />
      <div className="pointer-events-none fixed top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-aqua-400/15 blur-[130px] animate-pulse-slow" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Tracks />
          <Timeline />
          <Prizes />
          <Sponsors />
          <Faq />
          <Register />
        </main>
        <Footer />
      </div>
    </div>
  );
}
