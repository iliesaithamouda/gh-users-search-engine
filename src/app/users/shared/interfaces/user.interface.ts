export interface UserProfile {
  name?: string;
}
export interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  followers: number;
  following_url: string;
  following: number;
  public_repos: number;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  profile?: UserProfile;
}
