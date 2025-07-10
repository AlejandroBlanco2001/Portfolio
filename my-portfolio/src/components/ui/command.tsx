import About from "@/app/about";
import Exit from "@/app/exit";
import Help from "@/app/help";
import Peanut from "@/app/peanut";
import Projects from "@/app/projects";
import Socials from "@/app/socials";
import { Contact } from "lucide-react";

export default function CommandLine({ command, output }: { command: string, output: string  }) {
    const selectOutput = (output: string) => {
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
            case "skills":
            case "experience":
            case "education":
            case "certifications":
            case "interests":
            case "fun-facts":
                return <About command={command} />;
            default:
                return output;
        }
    }
    
    return (
        <div className="mb-2">
            <div className="flex items-center gap-2">
                <span className="text-blue-400">isaac@archlinux</span>
                <span className="text-gray-400">:</span>
                <span className="text-yellow-400">~</span>
                <span className="text-gray-400">$</span>
                <span className="text-white">{command}</span>
            </div>
            <div className="mb-2">
                {selectOutput(output)}
            </div>
        </div>
    )
}