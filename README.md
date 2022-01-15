# BironFormsFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## exemple of response for

> /users/{username}

```
{
  "login": "samplemails",
  "id": 5723158,
  "node_id": "MDQ6VXNlcjU3MjMxNTg=",
  "avatar_url": "https://avatars.githubusercontent.com/u/5723158?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/samplemails",
  "html_url": "https://github.com/samplemails",
  "followers_url": "https://api.github.com/users/samplemails/followers",
  "following_url": "https://api.github.com/users/samplemails/following{/other_user}",
  "gists_url": "https://api.github.com/users/samplemails/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/samplemails/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/samplemails/subscriptions",
  "organizations_url": "https://api.github.com/users/samplemails/orgs",
  "repos_url": "https://api.github.com/users/samplemails/repos",
  "events_url": "https://api.github.com/users/samplemails/events{/privacy}",
  "received_events_url": "https://api.github.com/users/samplemails/received_events",
  "type": "User",
  "site_admin": false,
  "name": "John Adrin",
  "company": "Sampl Emails",
  "blog": "http://www.samplemails.com",
  "location": "United States",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 23,
  "following": 242,
  "created_at": "2013-10-19T03:35:44Z",
  "updated_at": "2016-02-27T11:47:24Z"
}
```

> /search/users?q=sample

```
{
  "total_count": 3462,
  "incomplete_results": false,
  "items": [
    {
      "login": "sample",
      "id": 354018,
      "node_id": "MDQ6VXNlcjM1NDAxOA==",
      "avatar_url": "https://avatars.githubusercontent.com/u/354018?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sample",
      "html_url": "https://github.com/sample",
      "followers_url": "https://api.github.com/users/sample/followers",
      "following_url": "https://api.github.com/users/sample/following{/other_user}",
      "gists_url": "https://api.github.com/users/sample/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sample/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sample/subscriptions",
      "organizations_url": "https://api.github.com/users/sample/orgs",
      "repos_url": "https://api.github.com/users/sample/repos",
      "events_url": "https://api.github.com/users/sample/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sample/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    }
  ]
}

```
