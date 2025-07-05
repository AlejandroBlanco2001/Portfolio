import { NextResponse } from 'next/server';

export interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

export async function GET() : Promise<NextResponse<Repo[] | { error: string }>> {
  try {
    const username = 'AlejandroBlanco2001';
    
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${process.env.GITHUB_TOKEN}`
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const repos = await response.json();

    console.log(repos);

    const formattedRepos : Repo[] = repos
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 6)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
      }));

    return NextResponse.json(formattedRepos);
  } catch (error) {
    console.error('GitHub API error:', error);

    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 }
    );
  }
} 