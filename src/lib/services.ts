export const githubService = {
  async getRepos() {
    const response = await fetch('/api/github/repos');

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    return response.json();
  },
};
