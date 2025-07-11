import { memo, useMemo } from "react";
import About from "@/app/about";
import Exit from "@/app/exit";
import Help from "@/app/help";
import Peanut from "@/app/peanut";
import Projects from "@/app/projects";
import Socials from "@/app/socials";
import { Contact } from "lucide-react";

interface CommandLineProps {
    command: string;
    output: string;
}

const CommandLine = memo(function CommandLine({ command, output }: CommandLineProps) {
    const selectOutput = useMemo(() => {
        switch (output) {
            case "PEANUT_COMPONENT":
                return <Peanut />;
            case "PROJECTS_COMPONENT":
                return <Projects />;
            case "CONTACT_COMPONENT":
                return <Contact />;
            case "SOCIALS_COMPONENT":
                return <Socials />;
            case "HELP_COMPONENT":
                return <Help />;
            case "EXIT_COMPONENT":
                return <Exit />;
            case "ABOUT_COMPONENT":
                return <About command={command} />;
            case "skills":
            case "experience":
            case "education":
            case "certifications":
            case "interests":
            case "fun":
                return <About command={output} />;
            default:
                return output;
        }
    }, [output, command]);
    
    return (
        <div className="mb-3 sm:mb-4 group hover:bg-gray-800/30 rounded-lg p-2 sm:p-3 transition-all duration-200">
            <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 flex-wrap">
                <span className="text-blue-400 font-semibold text-sm sm:text-base">isaac@archlinux</span>
                <span className="text-gray-400">:</span>
                <span className="text-yellow-400 font-semibold text-sm sm:text-base">~</span>
                <span className="text-gray-400">$</span>
                <span className="text-white font-medium text-sm sm:text-base break-all">{command}</span>
            </div>
            <div className="ml-2 sm:ml-6 animate-fade-in">
                {selectOutput}
            </div>
        </div>
    )
});

export default CommandLine;