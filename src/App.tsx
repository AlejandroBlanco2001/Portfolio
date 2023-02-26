import Navbar from "./components/Navbar";
import TextAnimator from "./components/TextAnimator";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <TextAnimator />
            <About />
            <Skills />
            <Work />
        </div>
    );
};

export default App;
