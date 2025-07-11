// API Endpoints configuration
export const API_ENDPOINTS = {
  // Contact form
  CONTACT: '/api/contact',
  
  // Resume download
  RESUME: '/api/resume',
  
  // Projects data
  PROJECTS: '/api/projects',
  
  // About data
  ABOUT: '/api/about',
  
  // External APIs
  GITHUB: 'https://api.github.com/users',
  LINKEDIN: 'https://api.linkedin.com/v2',
  
  // Social media
  SOCIAL: {
    GITHUB: 'https://github.com',
    LINKEDIN: 'https://linkedin.com/in',
    TWITTER: 'https://twitter.com',
  }
} as const;

// Environment-based configuration
export const getApiUrl = (endpoint: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  return `${baseUrl}${endpoint}`;
}; 