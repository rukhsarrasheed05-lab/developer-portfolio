import {
  Navbar,
  Hero,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div className="relative bg-[#030014] font-body text-[#f1efff]">
      <Navbar />
      <Hero />
      <main className="relative z-10 bg-[#030014]">
        <About />
        <Tech />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
