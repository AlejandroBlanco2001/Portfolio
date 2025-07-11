"use client"

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
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

    const handleCommand = useCallback((command: string) => {
        runCommand(command);
        setCurrentCommand("");
    }, [runCommand]);

    const handleClose = useCallback(() => {
        runCommand("exit");
    }, [runCommand]);

    const handleKeyInputs = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
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
    }, [currentCommand, handleCommand, history.length, setCurrentIndex]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentCommand(e.target.value);
    }, []);

    const lastCommandIsExit = useMemo(() => 
        history.length > 0 &&
        history[history.length - 1].command.trim().toLowerCase() === "exit",
        [history]
    );

    const inputClassName = useMemo(() => 
        `ml-2 bg-transparent focus:outline-none w-64 ${validateCommand(currentCommand) ? 'text-green-400' : 'text-white'}`,
        [validateCommand, currentCommand]
    );

    return (
        <>
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl w-full h-96 max-w-4xl mx-auto flex flex-col border border-gray-700/50 backdrop-blur-sm sm:h-[28rem] md:h-96 lg:h-[32rem] xl:h-96">
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-t-xl p-2 sm:p-3 flex items-center space-x-2 border-b border-gray-600/50">
                    <button className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-400 transition-colors duration-200 shadow-sm" onClick={handleClose}></button>
                    <button className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors duration-200 shadow-sm"></button>
                    <button className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-400 transition-colors duration-200 shadow-sm"></button>
                    <div className="ml-2 sm:ml-4 text-gray-300 text-xs sm:text-sm font-mono font-medium truncate">Isaac Blanco - Software Engineer - Backend</div>
                </div>

                <div ref={terminalRef} className="p-3 sm:p-4 md:p-6 font-mono text-green-400 flex-1 overflow-y-auto no-scrollbar bg-gradient-to-b from-gray-900/95 to-gray-800/95">
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
                        <div className="mt-2 sm:mt-4 flex items-center flex-wrap">
                            <span className="text-blue-400 font-semibold text-sm sm:text-base">isaac@archlinux</span>
                            <span className="text-gray-400 mx-1">:</span>
                            <span className="text-yellow-400 font-semibold text-sm sm:text-base">~</span>
                            <span className="text-gray-400 mx-1">$</span>
                            <input
                                type="text"
                                className={`ml-2 bg-transparent focus:outline-none w-32 sm:w-48 md:w-64 text-sm sm:text-base lg:text-lg ${validateCommand(currentCommand) ? 'text-green-400' : 'text-white'} placeholder-gray-500`}
                                placeholder="Type a command..."
                                value={currentCommand}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyInputs}
                                autoFocus
                            />
                            <div className="ml-2 w-1 h-4 sm:w-2 sm:h-5 bg-green-400 animate-pulse"></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}