import Navbar from "./components/Navbar";
import TextAnimator from "./components/TextAnimator";
import About from "./sections/About";
import Skills from "./sections/Skills";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <TextAnimator />
            <About />
            <Skills />
        </div>
    );
};

export default App;
