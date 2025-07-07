import { useEffect, useState } from "react";
import { Repo } from "./api/github/repos/types";
import { githubService } from "@/lib/services";

export default function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        githubService.getRepos().then((repos) => {
            setRepos(repos);
        });
    }, []);

    const renderRepos = (repo: Repo) => {
        return (
            <li key={repo.id} className="font-mono p-2 border-b border-gray-700 hover:bg-gray-800/50 cursor-pointer" onClick={() => window.open(repo.url, '_blank')}>
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">$</span>
                    <span className="text-green-400">{repo.name}</span>
                    <span className="text-yellow-400">({repo.language})</span>
                    <span className="text-gray-400">--stars</span>
                    <span className="text-white">{repo.stargazers_count}</span>
                    <span className="text-gray-400">--forks</span> 
                    <span className="text-white">{repo.forks_count}</span>
                    <span className="text-gray-400">--updated</span>
                    <span className="text-white">{new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
                <div className="ml-6 text-gray-400 text-sm">
                    {'>'} {repo.description}
                </div>
            </li>
        )
    }
    
    return (
        <div className="flex flex-col gap-4">
            {repos.length === 0 ? (
                <div className="flex gap-1">
                    <span className="animate-[bounce_1s_ease-in-out_infinite]">.</span>
                    <span className="animate-[bounce_1s_ease-in-out_infinite] delay-[0.2s]">.</span>
                    <span className="animate-[bounce_1s_ease-in-out_infinite] delay-[0.4s]">.</span>
                </div>
            ) : (
                <ul className="animate-[fadeIn_1s_ease-in-out]">
                    {repos.map((repo) => (
                        renderRepos(repo)
                    ))}
                </ul>
            )}
        </div>
    )
}