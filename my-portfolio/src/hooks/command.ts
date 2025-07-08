import { githubService } from "@/lib/services";
import { JSX, useState } from "react";

export default function useTerminal() {
    const [history, setHistory] = useState<{ command: string, output: string }[]>([]);

    const AVAILABLE_COMMANDS = [
        "clear",
        "help",
        "about",
        "projects",
        "contact",
        "resume",
        "exit",
        "history",
        "socials",
        "peanut",
    ]

    const runCommand = (command: string) => {
        executeCommand(command);
    };

    const executeCommand = (command: string) => {
        switch (command) {
            case "clear":
                setHistory([]);
                break;
            case "help":
                setHistory((prev) => [...prev, { command: "help", output: "HELP_COMPONENT" }]);
                break;
            case "about":
                setHistory((prev) => [...prev, { command: "about", output: "About me" }]);
                break;
            case "projects":
                setHistory((prev) => [...prev, { command: "projects", output: "PROJECTS_COMPONENT" }]);
                break;  
            case "contact":
                setHistory((prev) => [...prev, { command: "contact", output: "CONTACT_COMPONENT" }]);
                break;
            case "resume":
                setHistory((prev) => [...prev, { command: "resume", output: "Resume" }]);
                break;
            case "exit":
                setHistory((prev) => [...prev, { command: "exit", output: "EXIT_COMPONENT"}]);
                break;
            case "socials":
                setHistory((prev) => [...prev, { command: "socials", output: "SOCIALS_COMPONENT" }]);
                break;
            case "history":
                setHistory((prev) => [...prev, { command: "history", output: history.map((item) => item.command).join("\n") }]);
                break;
            case "peanut":
                setHistory((prev) => [...prev, { command: "peanut", output: "PEANUT_COMPONENT" }]);
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

