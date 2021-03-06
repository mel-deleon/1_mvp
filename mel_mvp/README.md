# News US App

The result of this development project is an application for reading current news from US. The reader can choose between different news categories and search/filter them by title.

## Technical design

- Frontend with **React**
- Third party **API** integration. Source: [News API](https://newsapi.org/)
- Important! When a news item is accessed (by clicking the "Read" button) the content of the news item is incomplete or does not exist. This is due to the API format used for the development of the project (incomplete or nonexistent content).
  The original idea was to use the url of each news and go to the website when clicking the "Read" button. Later this idea was changed and a new component was created for the visualization of each news.

## Future features

- Add ‘Read Later’ / ‘Favourites’
- Include more countries (right now the app just gets news from US).
- 'About' section: information about the company and contact form.

## Setup

1. Run `npm install` to install packages.
2. Run `npm start` to run the server.

If you want to clone the repository in your computer: [Cloning a repository](https://help.github.com/en/articles/cloning-a-repository)

## Styling

- Tools used: **[Bootstrap](https://getbootstrap.com/) & [Bootswatch](https://bootswatch.com)**

## Presentation - What I have learnt

- Creative process
- React (mostly data flow between components)
- Review: Bootstrap
- **[NPM](https://www.npmjs.com/)** E.g. share news in social media using ['react-share'](https://www.npmjs.com/package/react-share) and change date format with [Moment.js](https://momentjs.com/).

This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.
