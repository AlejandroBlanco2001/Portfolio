import { useState, memo, useCallback } from "react";
import { EMAIL } from "@/constants";

const Contact = memo(function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const mailtoUrl = `mailto:${EMAIL}?subject=Contact from ${name}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoUrl;
    }, [name, message]);

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }, []);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-4 sm:p-6 rounded-xl border border-gray-700/50">
            <div className="font-mono space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-blue-400 text-base sm:text-lg">$</span>
                        <span className="text-green-400 font-semibold text-sm sm:text-base">contact</span>
                        <span className="text-gray-400 text-sm sm:text-base">--name</span>
                    </div>
                    <input 
                        type="text"
                        className="bg-gray-800/50 border border-gray-600/50 rounded-lg px-3 py-2 outline-none text-white flex-1 placeholder:text-gray-400/70 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm sm:text-base"
                        placeholder="Enter your name..."
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-blue-400 text-base sm:text-lg">$</span>
                        <span className="text-green-400 font-semibold text-sm sm:text-base">contact</span>
                        <span className="text-gray-400 text-sm sm:text-base">--email</span>
                    </div>
                    <input
                        type="email"
                        className="bg-gray-800/50 border border-gray-600/50 rounded-lg px-3 py-2 outline-none text-white flex-1 placeholder:text-gray-400/70 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm sm:text-base"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-blue-400 text-base sm:text-lg">$</span>
                        <span className="text-green-400 font-semibold text-sm sm:text-base">contact</span>
                        <span className="text-gray-400 text-sm sm:text-base">--message</span>
                    </div>
                    <textarea
                        rows={4}
                        className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-3 text-white font-mono resize-none outline-none placeholder:text-gray-400/70 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm sm:text-base"
                        placeholder="Type your message here..."
                        value={message}
                        onChange={handleMessageChange}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-blue-400 text-base sm:text-lg">$</span>
                    <button
                        className="text-green-400 hover:text-green-300 font-semibold hover:bg-green-400/10 px-3 sm:px-4 py-2 rounded-lg hover:scale-105 transform transition-all duration-200 text-sm sm:text-base"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        send-message
                    </button>
                </div>
            </div>
        </div>
    )
});

export default Contact;