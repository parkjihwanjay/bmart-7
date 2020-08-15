const GITHUB_CLIENT_ID = '9368cfd68ad4ee3c646e'
const githubCallbackUrl = `http://localhost:3000`

export const socialSites = [
  {
    icon : 'github',
    text : 'Login with Github',
    href : `https://github.com/login/oauth/authorize/?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubCallbackUrl}`
  },
  {
    icon : 'facebook',
    text : 'Login with facebook',
    href : ''
  }
]