import { useEffect, useState, memo, useCallback, useMemo } from "react";
import { MediumPost } from "./api/medium/types";
import { mediumService } from "@/lib/services";

const Blog = memo(function Blog() {
    const [posts, setPosts] = useState<MediumPost[]>([]);

    useEffect(() => {
        mediumService.getPosts().then((data) => {
            if (data?.items) {
                setPosts(data.items);
            }
        });
    }, []);

    const formatDate = useCallback((date: string) => {
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        }).format(new Date(date));
    }, []);

    const handlePostClick = useCallback((e: React.MouseEvent | React.KeyboardEvent, url: string) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(url, '_blank');
    }, []);

    const stripHtml = useCallback((html: string) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }, []);

    const getExcerpt = useCallback((content: string, maxLength: number = 150) => {
        const text = stripHtml(content);
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    }, [stripHtml]);

    const renderPost = useCallback((post: MediumPost) => {
        return (
            <li 
                key={post.link} 
                role="button" 
                tabIndex={0} 
                aria-label={`Read ${post.title} on Medium`} 
                className="font-mono p-3 sm:p-4 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:border-gray-600/50 cursor-pointer transition-all duration-300 mb-3 group" 
                onClick={(e) => handlePostClick(e, post.link)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handlePostClick(e, post.link);
                    }
                }}
            >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1">
                        <span className="text-blue-400 text-base sm:text-lg">$</span>
                        <span className="text-green-400 font-semibold text-base sm:text-lg group-hover:text-green-300 transition-colors break-words">{post.title}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 sm:ml-auto">
                        {post.categories && post.categories.length > 0 && (
                            <span className="text-yellow-400 text-xs sm:text-sm bg-yellow-400/10 px-2 py-1 rounded-full whitespace-nowrap">
                                {post.categories[0]}
                            </span>
                        )}
                        <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                            {formatDate(post.releaseDate || post.pubDate)}
                        </span>
                    </div>
                </div>
                <div className="ml-6 sm:ml-8 text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {'>'} {getExcerpt(post.content)}
                </div>
            </li>
        )
    }, [formatDate, handlePostClick, getExcerpt]);

    const loadingContent = useMemo(() => (
        <div className="font-mono text-gray-400">
            isaac@archlinux:~$ loading
            <span className="ml-2 animate-[bounce_1s_ease-in-out_infinite]">.</span>
            <span className="animate-[bounce_1s_ease-in-out_infinite] delay-[0.2s]">.</span>
            <span className="animate-[bounce_1s_ease-in-out_infinite] delay-[0.4s]">.</span>
        </div>
    ), []);

    const postsContent = useMemo(() => (
        <ul className="animate-[fadeIn_1s_ease-in-out]">
            {posts.map((post) => renderPost(post))}
        </ul>
    ), [posts, renderPost]);

    return (
        <div className="flex flex-col gap-4">
            {posts.length === 0 ? loadingContent : postsContent}
        </div>
    )
});

export default Blog;