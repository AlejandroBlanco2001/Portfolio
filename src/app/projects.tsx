import { useEffect, useState, memo, useCallback, useMemo } from "react";
import { Repo } from "./api/github/repos/types";
import { githubService } from "@/lib/services";

const Projects = memo(function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        githubService.getRepos().then((repos) => {
            setRepos(repos);
        });
    }, []);

    const formatDate = useCallback((date: string) => {
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        }).format(new Date(date));
    }, []);

    const handleRepoClick = useCallback((url: string) => {
        window.open(url, '_blank');
    }, []);

    const renderRepos = useCallback((repo: Repo) => {
        return (
            <li key={repo.id} role="button" tabIndex={0} aria-label={`Open ${repo.name} on GitHub`} className="font-mono p-3 sm:p-4 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:border-gray-600/50 cursor-pointer transition-all duration-300 mb-3 group" onClick={() => handleRepoClick(repo.url)}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-blue-400 text-base sm:text-lg">$</span>
                        <span className="text-green-400 font-semibold text-base sm:text-lg group-hover:text-green-300 transition-colors break-all">{repo.name}</span>
                        <span className="text-yellow-400 text-xs sm:text-sm bg-yellow-400/10 px-2 py-1 rounded-full whitespace-nowrap">({repo.language})</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 sm:ml-auto">
                        <span className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                            <span>⭐</span>
                            <span className="text-white">{repo.stargazers_count}</span>
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                            <span>🔀</span>
                            <span className="text-white">{repo.forks_count}</span>
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm">
                            {formatDate(repo.updated_at)}
                        </span>
                    </div>
                </div>
                <div className="ml-6 sm:ml-8 text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {'>'} {repo.description || 'No description available'}
                </div>
            </li>
        )
    }, [formatDate, handleRepoClick]);

    const loadingContent = useMemo(() => (
        <div className="font-mono text-gray-400">
            isaac@archlinux:~$ loading
            <span className="ml-2 animate-[bounce_1s_ease-in-out_infinite]">.</span>
            <span className="animate-[bounce_1s_ease-in-out_infinite] delay-[0.2s]">.</span>
            <span className="animate-[bounce_1s_ease-in-out_infinite] delay-[0.4s]">.</span>
        </div>
    ), []);

    const reposContent = useMemo(() => (
        <ul className="animate-[fadeIn_1s_ease-in-out]">
            {repos.map((repo) => renderRepos(repo))}
        </ul>
    ), [repos, renderRepos]);

    return (
        <div className="flex flex-col gap-4">
            {repos.length === 0 ? loadingContent : reposContent}
        </div>
    )
});

export default Projects;