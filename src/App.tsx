import Navbar from "./components/Navbar";
import TextAnimator from "./components/TextAnimator";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <TextAnimator />
            <About />
            <Skills />
            <Work />
            <Contact />
            <footer>
                <p>Created by Alejandro Blanco Amador - 2023 </p>
            </footer>
        </div>
    );
};

export default App;
