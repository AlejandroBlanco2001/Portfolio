"use client"

import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogCancel, AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { useState, useRef, useEffect } from "react";
import { AlertDialogHeader, AlertDialogFooter } from "./alert-dialog";
import useTerminal from "@/hooks/command";

export default function Terminal() {
    const { history, runCommand, validateCommand } = useTerminal();
    const [isClosed, setIsClosed] = useState(false);
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
        window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1";
    }

    return (
        <>
            {isClosed && (
                <AlertDialog open>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="cursor-pointer" onClick={() => setIsClosed(false)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="cursor-pointer" onClick={handleClose}>Close</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}

            <div className="bg-gray-900 rounded-lg shadow-2xl w-full h-96 max-w-4xl mx-auto flex flex-col">

                {/* Terminal Header */}
                <div className="bg-gray-800 rounded-t-lg p-3 flex items-center space-x-2">
                    <button className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={() => setIsClosed(true)}></button>
                    <button className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></button>
                    <button className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></button>
                    <div className="ml-4 text-gray-400 text-sm font-mono">Isaac Blanco - Software Engineer - Backend</div>
                </div>

                {/* Terminal Content */}
                <div ref={terminalRef} className="p-4 font-mono text-green-400 flex-1 overflow-y-auto no-scrollbar">
                    <div className="mb-2">
                        <span className="text-blue-400">isaac@archlinux</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-yellow-400">~</span>
                        <span className="text-gray-400">$</span>
                        <span className="ml-2">whoami</span>
                    </div>
                    <div className="text-white">
                        I'm Isaac Blanco, a backend engineer who builds systems, not screens —
                        but since I have no designer... I made this UI myself, because real programmers use the terminal.
                    </div>
                    
                    {history.map((item, index) => (
                        <div key={index}>
                            <div className="mb-2">
                                <span className="text-blue-400">isaac@archlinux</span>
                                <span className="text-gray-400">:</span>
                                <span className="text-yellow-400">~</span>
                                <span className="text-gray-400">$</span>
                                <span className="text-white">{item.command}</span>
                            </div>
                            <div className="mb-2">
                                {item.output}
                            </div>
                        </div>
                    ))}

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
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleCommand(currentCommand);
                                }
                            }}
                        />
                    </div>
                </div>
            </div>

        </>

    )
}