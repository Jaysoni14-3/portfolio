import AnimatedCursor from "react-animated-cursor";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  let isMobile;
  const width = window.innerWidth;

  width < "768" ? (isMobile = true) : (isMobile = false);

  return (
    <div className="bg-light dark:bg-dark">
      {/*  <div className="bg-slate-50"> */}
      {isMobile ? (
        <AnimatedCursor
          showSystemCursor={true}
          innerSize={0}
          outerSize={0}
          color="243, 156, 18"
          outerAlpha={0}
          innerScale={0}
          outerScale={0}
        />
      ) : (
        <AnimatedCursor
          innerSize={16}
          outerSize={16}
          color="243, 156, 18"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={4}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
        />
      )}

      <Header />
      <main className="max-container flex flex-col gap-12 overflow-hidden">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
