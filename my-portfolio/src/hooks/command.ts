import { useState, useMemo, useCallback } from "react";
import { Command } from "./types";

export default function useTerminal() {
    const [history, setHistory] = useState<{ command: string, output: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const commands = useMemo(() => Object.freeze<Record<string, Command>>(
        {
            "help": {
                command: "help",
                output: "HELP_COMPONENT",
                subCommands: null,
            },
            "about": {
                command: "about",
                output: "ABOUT_COMPONENT",
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
                    "fun": {
                        command: "fun",
                        output: "fun",
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
    ), [history]);

    const runCommand = useCallback((command: string) => {
        if (command === "clear") {
            setHistory([]);
        } else {
            executeCommand(command);
        }
    }, []);

    const findCommand = useCallback((
        commandArgs: string[],
        commandList: Record<string, Command>
    ): { commandObj: Command | null, fullCommand: string } => {
        if (commandArgs.length === 0) {
            return { commandObj: null, fullCommand: "" };
        }
        const [current, ...rest] = commandArgs;
        const cmdObj = commandList[current];
        if (!cmdObj) {
            return { commandObj: null, fullCommand: commandArgs.join(" ") };
        }
        if (rest.length > 0 && cmdObj.subCommands) {
            const subResult = findCommand(rest, cmdObj.subCommands);
            if (subResult.commandObj) {
                return {
                    commandObj: subResult.commandObj,
                    fullCommand: [current, ...rest].join(" ")
                };
            }
        }

        
        return { commandObj: cmdObj, fullCommand: [current, ...rest].join(" ") };
    }, []);

    const executeCommand = useCallback((command: string, commandList: Record<string, Command> | null = null) => {
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

        const { commandObj, fullCommand } = findCommand(commandArgs, listCommands);

        if (commandObj) {
            setHistory((prev) => [
                ...prev,
                { command: command.trim(), output: commandObj.output }
            ]);
        } else {
            setHistory((prev) => [
                ...prev,
                { command: command.trim(), output: "Command not found" }
            ]);
        }
    }, [commands, findCommand]);

    const validateCommand = useCallback((command: string) => {
        const cleanedCommand = command.replace(/[^a-zA-Z\s]/g, "");
        const commandArgs = cleanedCommand.split(" ").filter(Boolean);
        let currentCommands = commands;
        for (let i = 0; i < commandArgs.length; i++) {
            const cmd = commandArgs[i];
            const cmdObj = currentCommands[cmd];
            if (!cmdObj) return false;
            if (i === commandArgs.length - 1) return true;
            if (!cmdObj.subCommands) return false;
            currentCommands = cmdObj.subCommands;
        }
        return true;
    }, [commands]);

    return { history, runCommand, validateCommand, currentIndex, setCurrentIndex };
}
