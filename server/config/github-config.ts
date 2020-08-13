const baseUrl = process.env.NODE_ENV == 'dev' ? 'http://localhost:4000' : ''
export const githubLoginUrl = 'https://github.com/login/oauth/authorize'
export const githubTokenUrl = 'https://github.com/login/oauth/access_token'
export const githubCallbackUrl = `${baseUrl}/api/github-login/callback`
export const accessUserUrl = 'https://api.github.com/user'
