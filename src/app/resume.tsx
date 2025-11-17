import { memo, useEffect } from "react";

const Resume = memo(function Resume() {
    useEffect(() => {
        // Open the PDF in a new tab when the component mounts
        window.open("/IsaacBlanco_CV.pdf", "_blank");
    }, []);

    return (
        <div className="font-mono text-gray-300">
            <p className="mb-2">Opening resume in a new tab...</p>
            <p className="text-sm text-gray-400">
                If the resume doesn't open automatically, you can{" "}
                <a 
                    href="/IsaacBlanco_CV.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline cursor-pointer"
                >
                    click here
                </a>
                .
            </p>
        </div>
    );
});

export default Resume;

