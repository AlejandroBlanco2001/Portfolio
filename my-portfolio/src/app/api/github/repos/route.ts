import { NextResponse } from 'next/server';
import { Repo } from './types';

const USERNAME = 'AlejandroBlanco2001';

const getPinnedRepos = async () => {
  const response = await fetch(`https://api.github.com/graphql`, {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "${USERNAME}") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  id
                  name
                  description
                  homepageUrl
                  primaryLanguage {
                    name
                  }
                  stargazerCount
                  forkCount
                  updatedAt
                  url
                }
              }
            }
          }
        }
      `
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API responded with status: ${response.status}`);
  }

  const { data } = await response.json();

  const formattedRepos : Repo[] = data.user.pinnedItems.nodes.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    homepage: repo.homepageUrl,
    language: repo.primaryLanguage?.name,
    stargazers_count: repo.stargazerCount,
    forks_count: repo.forkCount, 
    updated_at: repo.updatedAt,
    url: repo.url,
  }));

  console.log(formattedRepos);

  return formattedRepos;
}


export async function GET(request: Request) : Promise<NextResponse<Repo[] | { error: string }>> {
  try {
    const pinnedRepos = await getPinnedRepos();
    return NextResponse.json(pinnedRepos);
  } catch (error) {
    console.error('GitHub API error:', error);

    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 }
    );
  }
}