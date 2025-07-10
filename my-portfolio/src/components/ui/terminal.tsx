"use client"

import { useState, useRef, useEffect } from "react";
import useTerminal from "@/hooks/command";
import CommandLine from "./command";
import { INITIAL_PHRASE } from "@/constants";

export default function Terminal() {
    const { history, runCommand, validateCommand, currentIndex, setCurrentIndex } = useTerminal();
    const [currentCommand, setCurrentCommand] = useState("");
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (command: string) => {
        runCommand(command);
        setCurrentCommand("");
    }

    const handleClose = () => {
        runCommand("exit");
    }

    const handleKeyInputs = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case "Enter":
                e.preventDefault();

                if (currentCommand.trim() === "") return;
                handleCommand(currentCommand);
                setCurrentIndex(null);
                break;
            case "ArrowUp":
                e.preventDefault();
                if (history.length === 0) return;
                setCurrentIndex((prev) => {
                    const newIndex = prev === null ? history.length - 1 : Math.max(prev - 1, 0);
                    setCurrentCommand(history[newIndex].command);
                    return newIndex;
                });
                break;
            case "ArrowDown":
                e.preventDefault();
                if (history.length === 0) return;
                setCurrentIndex((prev) => {
                    if (prev === null) return null

                    const newIndex = prev + 1;
                    if(newIndex >= history.length) {
                        setCurrentCommand("");
                        return null
                    }
                    setCurrentCommand(history[newIndex].command);
                    return newIndex;
                });
                break;
            default:
                break;
        }
    }

    const lastCommandIsExit =
        history.length > 0 &&
        history[history.length - 1].command.trim().toLowerCase() === "exit";

    return (
        <>
            <div className="bg-gray-900 rounded-lg shadow-2xl w-full h-96 max-w-4xl mx-auto flex flex-col">
                <div className="bg-gray-800 rounded-t-lg p-3 flex items-center space-x-2">
                    <button className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={handleClose}></button>
                    <button className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></button>
                    <button className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></button>
                    <div className="ml-4 text-gray-400 text-sm font-mono">Isaac Blanco - Software Engineer - Backend</div>
                </div>

                <div ref={terminalRef} className="p-4 font-mono text-green-400 flex-1 overflow-y-auto no-scrollbar">
                    <CommandLine 
                        command="whoami" 
                        output={INITIAL_PHRASE}
                    />

                    {history.map((item, index) => (
                        <div key={index}>
                            <CommandLine 
                                command={item.command} 
                                output={item.output}
                            />
                        </div>
                    ))}

                    {!lastCommandIsExit && (
                        <div className="mt-2">
                            <span className="text-blue-400">isaac@archlinux</span>
                            <span className="text-gray-400">:</span>
                            <span className="text-yellow-400">~</span>
                            <span className="text-gray-400">$</span>
                            <input
                                type="text"
                                className={`ml-2 bg-transparent focus:outline-none w-64 ${validateCommand(currentCommand) ? 'text-green-400' : 'text-white'}`}
                                placeholder="Type a command..."
                                value={currentCommand}
                                onChange={(e) => setCurrentCommand(e.target.value)}
                                onKeyDown={(e) => handleKeyInputs(e)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}