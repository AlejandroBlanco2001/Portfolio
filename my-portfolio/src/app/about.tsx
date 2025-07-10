import React from "react";

interface AboutProps {
    command: string;
}

const learningBadge = (
    <span className="ml-1 px-1 text-xs font-mono text-gray-300 shadow-lg">
        learning
    </span>
);

export default function About({ command }: AboutProps) {
    const renderSkills = () => (
        <div className="font-mono text-green-400 bg-gray-900 p-4 rounded-lg">
            <div className="ml-6">
                <div className="mb-2 text-gray-300">
                    I'm a fullstack developer that likes to try new technologies and build new projects.
                </div>
                <div className="mb-1">
                    <span className="text-yellow-300">Frameworks:</span> Django, Angular, FastAPI
                    {learningBadge}
                </div>
                <div className="mb-1">
                    <span className="text-yellow-300">Languages:</span> CSS, SCSS, HTML, Python, JavaScript, TypeScript, Go, Java
                    {learningBadge}
                </div>
                <div className="mb-1">
                    <span className="text-yellow-300">Databases:</span> PostgreSQL, MySQL, MongoDB
                </div>
                <div className="mb-1">
                    <span className="text-yellow-300">Technologies:</span> Tailwind, Boostrap, Docker, Kubernetes{learningBadge}, Git, GitHub, GitLab, Redis, RabbitMQ, Kafka{learningBadge}, AWS, Sisense, Flink{learningBadge}, Flux{learningBadge}, Helm{learningBadge}, Skaffold{learningBadge}
                </div>
                <div className="mb-1">
                    <span className="text-yellow-300">Libraries:</span> ZeroMQ{learningBadge}, SocketIO, DRF, React, Pandas, Numpy, Scikit-learn, Streamlit
                </div>
            </div>
        </div>
    );

    const renderExperience = () => (
        <div className="font-mono text-green-400 bg-gray-900 p-4 rounded-lg">
            <div className="ml-6">
                <div className="mb-2 text-gray-300">
                    Here are some of my professional experiences as a developer and data science fellow.
                </div>
                <div className="mb-1">
                    <span className="text-yellow-300">Auvik (Current):</span>
                    <span className="ml-2 text-green-300">
                        Middle Fullstack Engineer &mdash; Working in the development of a OS agent, currently working in the data pipelines with Flink<br />
                        <span className="text-gray-300">Tech:</span> Go, Java, ZeroMQ, Kafka, Docker, Kubernetes, Flink, Helm
                    </span>
                </div>
                <div className="mb-1">
                    <span className="text-yellow-300">Wazoku:</span>
                    <span className="ml-2 text-green-300">
                        Fullstack Engineer &mdash; Integrated analytics tools and developed new features for the platform.<br />
                        <span className="text-gray-300">Tech:</span> Django, RabbitMQ, Celery, Sisense, Angular, PostgreSQL, Ansible
                    </span>
                </div>
                <div className="mb-1">
                    <span className="text-yellow-300">Eventos y Logísticas Estratégicas SAS:</span>
                    <span className="ml-2 text-green-300">
                        Junior Fullstack Engineer &mdash; Built a React app for financial data, led WordPress site creation.<br />
                        <span className="text-gray-300">Tech:</span> React, Tailwind, PostgreSQL, WordPress, Azure
                    </span>
                </div>
                <div className="mb-1">
                    <span className="text-yellow-300">Data Science For All - DS4A Colombia:</span>
                    <span className="ml-2 text-green-300">
                        Data Science Fellow &mdash; 3-month bootcamp, built ML model for Colombian Air Force.<br />
                        <span className="text-gray-300">Tech:</span> Python, Pandas, Scikit-learn, Jupyter 
                    </span>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {command === "skills" && renderSkills()}
            {command === "experience" && renderExperience()}
        </div>
    );
}