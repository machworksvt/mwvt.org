import Hero from "./components/Hero";
import RedefiningImpossible from "./components/RedefiningImpossible";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-ink">
      <Hero />
      <RedefiningImpossible />
      <Team />
      <Footer />
    </main>
  );
}