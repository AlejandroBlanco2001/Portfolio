import { useEffect, useState } from "react";

const TextAnimator = () => {
    const [index, setIndex] = useState<number>(0);

    const pharses: string[] = [
        "optimist. 🥛",
        "bookworm. 📚",
        "gymnast. 🤸",
        "traveler. 🌎",
        "data scientist. 👨‍🔬",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % pharses.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="text-animator">
            <div className="main-wrapper">
                <h1>
                    G'day my name is Isaac Blanco, a{" "}
                    <span className="highlight">Web Developer</span>{" "}
                </h1>
                <h1>
                    and{" "}
                    <span className="pharse-animated">{pharses[index]}</span>
                </h1>
            </div>
        </div>
    );
};

export default TextAnimator;
