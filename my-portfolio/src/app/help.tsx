import { memo, useMemo } from "react";

const Help = memo(function Help() {
    const commands = useMemo(() => ({
        clear: "Clear the terminal 🧹",
        help: "Show this help message 🤖",
        about: "Show information about me 👨‍💻",
        "about --skills": "Show my main skills 🛠️",
        "about --experience": "Show my experience 💼",
        "about --education": "Show my education 🎓",
        "about --certifications": "Show my certifications 🎖️",
        "about --fun": "Show a fun fact about me 🎲",
        projects: "Show my projects 🚀",
        contact: "Show my contact information 📬",
        resume: "Download my resume 📄",
        exit: "Exit the terminal 👋",
        history: "Show the history of commands 🕑",
        peanut: "Peanut butter jelly time! 🥜🧈🪼⏱️",
    } as Record<string, string>), []);

    const renderCommand = useMemo(() => (command: string) => {
        const commandDescription = commands[command];
        const commandKey = command;
        
        return (
            <li className="font-mono p-2 sm:p-3 border border-gray-700/50 rounded-lg hover:bg-gray-800/50 hover:border-gray-600/50 cursor-pointer transition-all duration-200 mb-2 group" key={commandKey}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-blue-400 text-base sm:text-lg">$</span>
                    <span className="text-white font-semibold text-sm sm:text-base group-hover:text-blue-300 transition-colors">{commandKey}</span>
                    <span className="text-gray-400 flex-1 text-xs sm:text-sm">- {commandDescription}</span>
                </div>
            </li>
        )
    }, [commands]);

    const commandList = useMemo(() => (
        <ul className="flex flex-col gap-2">
            {Object.keys(commands).map((command) => renderCommand(command))}
        </ul>
    ), [commands, renderCommand]);

    return (
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-4 sm:p-6 rounded-xl border border-gray-700/50">
            <div className="flex flex-col gap-3 sm:gap-4">
                <div className="font-mono text-white text-base sm:text-lg font-semibold border-b border-gray-600/50 pb-2">Available commands:</div>
                {commandList}
            </div>
        </div>
    );
});

export default Help;