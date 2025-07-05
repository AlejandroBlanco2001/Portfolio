import { githubService } from "@/lib/services";
import { JSX, useState } from "react";

export default function useTerminal() {
    const [history, setHistory] = useState<{ command: string, output: string | JSX.Element }[]>([]);

    const AVAILABLE_COMMANDS = [
        "clear",
        "help",
        "about",
        "projects",
        "contact",
        "resume",
        "exit",
        "history",
    ]

    const runCommand = (command: string) => {
        executeCommand(command);
    };

    const executeCommand = (command: string) => {
        console.log(`command: ${command}`);
        switch (command) {
            case "clear":
                setHistory([]);
                break;
            case "help":
                setHistory((prev) => [...prev, { command: "help", output: "Available commands: clear, help, about, projects, contact, resume, exit" }]);
                break;
            case "about":
                setHistory((prev) => [...prev, { command: "about", output: "About me" }]);
                break;
            case "projects":
                githubService.getRepos().then((repos) => {
                    setHistory((prev) => [...prev, { command: "projects", output: repos.map((repo: any) => repo.name).join("\n") }]);
                });
                break;
            case "contact":
                setHistory((prev) => [...prev, { command: "contact", output: "Contact" }]);
                break;
            case "resume":
                setHistory((prev) => [...prev, { command: "resume", output: "Resume" }]);
                break;
            case "exit":
                setHistory((prev) => [...prev, { command: "exit", output: "Exiting..." }]);
                break;
            case "history":
                setHistory((prev) => [...prev, { command: "history", output: history.map((item) => item.command).join("\n") }]);
                break;
            default:
                setHistory((prev) => [...prev, { command: command, output: "Command not found" }]);
        }
    }

    const validateCommand = (command: string) => {
        return AVAILABLE_COMMANDS.includes(command.trim());
    }

    return { history, runCommand, validateCommand };
}

