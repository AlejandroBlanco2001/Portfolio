"use client"

import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogCancel, AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { useState } from "react";
import { AlertDialogHeader, AlertDialogFooter } from "./alert-dialog";

export default function Terminal() {

    const [command, setCommand] = useState("");
    const [isClosed, setIsClosed] = useState(false);

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

            <div className="bg-gray-900 rounded-lg shadow-2xl w-full h-96 max-w-4xl mx-auto">

                {/* Terminal Header */}
                <div className="bg-gray-800 rounded-t-lg p-3 flex items-center space-x-2">
                    <button className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={() => setIsClosed(true)}></button>
                    <button className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></button>
                    <button className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></button>
                    <div className="ml-4 text-gray-400 text-sm font-mono">Isaac Blanco - Software Engineer - Backend</div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-green-400">
                    <div className="mb-2">
                        <span className="text-blue-400">isaac@archlinux</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-yellow-400">~</span>
                        <span className="text-gray-400">$</span>
                        <span className="ml-2">whoami</span>
                    </div>
                    <div className="text-white">
                        Isaac Blanco -- Software Engineer -- Backend
                    </div>

                    <div className="mt-2">
                        <span className="text-blue-400">isaac@archlinux</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-yellow-400">~</span>
                        <span className="text-gray-400">$</span>
                        <span className="ml-2">ls -la | grep -i 'Commands to run'</span>
                    </div>

                    <div className="mt-2 text-white">
                        About Projects Contact
                    </div>

                    <div className="mt-2">
                        <span className="text-blue-400">isaac@archlinux</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-yellow-400">~</span>
                        <span className="text-gray-400">$</span>
                        <input
                            type="text"
                            className="ml-2 bg-transparent text-white focus:outline-none w-64"
                            placeholder="Type a command..."
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    console.log(command);
                                    setCommand("");
                                }
                            }}
                        />
                    </div>
                </div>
            </div>

        </>

    )
}