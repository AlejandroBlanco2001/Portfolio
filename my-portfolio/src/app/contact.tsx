import { useState } from "react";

const EMAIL = "alex.zgz@live.com";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const mailtoUrl = `mailto:${EMAIL}?subject=Contact from ${name}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoUrl;
    }

    return (
        <div>
            <div className="font-mono space-y-4">
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">$</span>
                    <span className="text-green-400">contact</span>
                    <span className="text-gray-400">--name</span>
                    <input 
                        type="text"
                        className="bg-transparent border-none outline-none text-white flex-1 placeholder:text-gray-400/70"
                        placeholder="Enter your name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-blue-400">$</span>
                    <span className="text-green-400">contact</span>
                    <span className="text-gray-400">--email</span>
                    <input
                        type="email"
                        className="bg-transparent border-none outline-none text-white flex-1 placeholder:text-gray-400/70"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-blue-400">$</span>
                        <span className="text-green-400">contact</span>
                        <span className="text-gray-400">--message</span>
                    </div>
                    <textarea
                        rows={4}
                        className="bg-gray-800/50 border border-gray-700 rounded p-2 text-white font-mono resize-none focus:outline-none focus:border-blue-500 placeholder:text-gray-400/70"
                        placeholder="Type your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-blue-400">$</span>
                    <button
                        className="text-green-400 hover:text-green-300 transition-colors"
                        type="submit"
                        onClick={(e) => handleSubmit(e as React.FormEvent<HTMLFormElement>)}
                    >
                        send-message
                    </button>
                </div>
            </div>
        </div>
    )
}