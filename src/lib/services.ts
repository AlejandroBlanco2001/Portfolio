export const githubService = {
  async getRepos() {
    const response = await fetch('/api/github/repos');

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    return response.json();
  },
};

export const mediumService = {
  async getPosts() {
    try {
      const response = await fetch('/api/medium');
      if (!response.ok) {
        throw new Error('Failed to fetch Medium posts');
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Failed to fetch Medium posts:', error);
      return { items: [] };
    }
  },
};