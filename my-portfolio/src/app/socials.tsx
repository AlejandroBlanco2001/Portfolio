export default function Socials() {

    interface Social {
        name: string;
        url: string;
        icon: string;
    }

    const socials = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/alejandroblancoamador/",
            icon: "linkedin",
        },
        {
            name: "GitHub",
            url: "https://github.com/AlejandroBlanco2001",
            icon: "github",
        },
        {
            name: "GitLab",
            url: "https://gitlab.com/AlejandroBlanco2001",
            icon: "gitlab",
        },
        {
            name: "Medium",
            url: "https://medium.com/@alex.zgz",
            icon: "medium",
        },
    ]

    const renderSocial = (social: Social) => {
        return (
            <li key={social.name} className="font-mono p-2 border-b border-gray-700 hover:bg-gray-800/50 cursor-pointer" onClick={() => window.open(social.url, '_blank')}>
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">$</span>
                    {renderSVG(social.icon)}
                    <span className="text-white">{social.name}</span>
                </div>
            </li>
        )
    }

    const renderSVG = (icon: string) => {
        switch (icon) {
            case "linkedin":
                return <svg className="size-4 fill-blue-400" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            case "github":
                return <svg className="size-4 fill-gray-200" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            case "gitlab":
                return <svg className="size-4 fill-orange-400" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>
            default:
                return <svg className="size-4 fill-gray-200" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z"/></svg>
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="font-mono text-green-400">$ Executing alias 'ls social-links'</div>
            <ul className="flex flex-col gap-2">
                {socials.map((social) => renderSocial(social))}
            </ul>
        </div>
    )
}