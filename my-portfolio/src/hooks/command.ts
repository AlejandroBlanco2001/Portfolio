import { useState } from "react";
import { Command } from "./types";

export default function useTerminal() {
    const [history, setHistory] = useState<{ command: string, output: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const commands = Object.freeze<Record<string, Command>>(
        {
            "help": {
                command: "help",
                output: "HELP_COMPONENT",
                subCommands: null,
            },
            "about": {
                command: "about",
                output: "About me",
                subCommands: {
                    "skills": {
                        command: "skills",
                        output: "skills",
                        subCommands: null,
                    },
                    "experience": {
                        command: "experience",
                        output: "experience",
                        subCommands: null,
                    },
                    "education": {
                        command: "education",
                        output: "education",
                        subCommands: null,
                    },
                    "certifications": {
                        command: "certifications",
                        output: "certifications",
                        subCommands: null,
                    },
                    "interests": {
                        command: "interests",
                        output: "interests",
                        subCommands: null,
                    },
                    "fun-facts": {
                        command: "fun-facts",
                        output: "fun-facts",
                        subCommands: null,
                    },
                },
            },
            "projects": {
                command: "projects",
                output: "PROJECTS_COMPONENT",
                subCommands: null,
            },
            "contact": {
                command: "contact",
                output: "CONTACT_COMPONENT",
                subCommands: null,
            },
            "resume": {
                command: "resume",
                output: "Resume",
                subCommands: null,
            },
            "exit": {
                command: "exit",
                output: "EXIT_COMPONENT",
                subCommands: null,
            },
            "history": {
                command: "history",
                output: history.map((item) => item.command).join("\n"),
                subCommands: null,
            },
            "peanut": {
                command: "peanut",
                output: "PEANUT_COMPONENT",
                subCommands: null,
            },
            "clear": {
                command: "clear",
                output: "",
                subCommands: null,
            },
            "socials": {
                command: "socials",
                output: "SOCIALS_COMPONENT",
                subCommands: null,
            }
        }
    );

    const runCommand = (command: string) => {
        if (command === "clear") {
            setHistory([]);
        } else {
            executeCommand(command);
        }
    };

    const executeCommand = (command: string, commandList: Record<string, Command> | null = null) => {
        setCurrentIndex(prev => {
            if (command === "clear") {
                return 0;
            } else {
                return prev === null ? 0 : prev + 1;
            }
        });

        const listCommands = commandList ?? commands;

        const cleanedCommand = command.replace(/[^a-zA-Z\s]/g, "");
        const commandArgs = cleanedCommand.split(" ").filter(Boolean);
        const commandName = commandArgs[0];
        const commandObject = listCommands[commandName] ?? null;

        if (commandObject && commandObject.subCommands) {
            const subCommand = commandArgs[1];
            return executeCommand(subCommand, commandObject.subCommands);
        }

        console.log(commandObject);

        if (commandObject) {
            setHistory((prev) => [...prev, { command: commandObject.command, output: commandObject.output }]);
        } else {
            setHistory((prev) => [...prev, { command: command, output: "Command not found" }]);
        }
    }

    const validateCommand = (command: string) => {
        return commands[command] !== undefined;
    }

    return { history, runCommand, validateCommand, currentIndex, setCurrentIndex };
}

