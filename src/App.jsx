import AnimatedCursor from "react-animated-cursor";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-slate-900">
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
      <Header />
      <main className="max-container">
        <Home />
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default App;
