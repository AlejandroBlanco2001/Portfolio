export default function Help() {
    const commands: Record<string, string> = {
        clear: "Clear the terminal",
        help: "Show this help message",
        about: "Show information about me",
        projects: "Show my projects",
        contact: "Show my contact information",
        resume: "Show my resume",
        exit: "Exit the terminal",
    }

    const renderCommand = (command: string) => {
        const commandDescription = commands[command];
        const commandKey = command.split(" ")[0];
        
        return (
            <li className="font-mono p-1 border-b border-gray-700 hover:bg-gray-800/50 text-sm" key={commandKey}>
                <div className="flex items-center gap-1">
                    <span className="text-blue-400">$</span>
                    <span className="text-white">{commandKey}</span>
                    <span className="text-gray-400">- {commandDescription}</span>
                </div>
            </li>
        )
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="font-mono text-green-400 text-sm">$ Executing alias 'help'</div>
            <div className="font-mono text-white text-sm">Available commands:</div>
            <ul className="flex flex-col gap-1">
                {Object.keys(commands).map((command) => renderCommand(command))}
            </ul>
        </div>
    );
}