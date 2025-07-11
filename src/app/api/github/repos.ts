import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const username = 'AlejandroBlanco2001';
  
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
  
    if (!response.ok) {
      return res.status(response.status).json({ error: 'GitHub API error' });
    }
  
    const data = await response.json();
    res.status(200).json(data);
  }
  