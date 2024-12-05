# Full-stack assignment

This is a 2 parts assignment for you to demonstrate your front end and back end
skills. Please note that the 2 parts are NOT related to each others, they are designed
to test front end and back end skills separately.

We expect the assignment to be done within a couple of hours, you are free to
use any tools (AI included) if preferred. We would like to see:

- Project structure
- Code base structure (extensibility, maintainability)
- Demonstration of knowledge of the libraries/tools that you choose

## Front End Part

You are free to choose ONE of the following tasks to complete:

1. Recipe Website - focussed on setup and structure, and data/api handling.
2. Design System Component - focussed on converting a design into a reusable component.

## Back End Part

3. NodeJS Backend - back-end focussed task, where you can show off your hardcore development skills.

# Tasks

## 1. Website

Re-create this page using the following tools:

![example-page|690x396](./images/website.jpeg)

Everything is done through git, so to share this project we would like you to send us a git repo on for example like Github/Gitlab etc.

We would like you to use [Next.js](https://nextjs.org/) as a start for this assignment, and in our apps we use [Material-UI](https://material-ui.com]) as a base for our components.

Create a few pages like this with different kind of text and link them together in the menu.

Have a dynamic way of providing data into the components using the best NextJS practices.

Images and icons you can use either random from the internet or other packages.

#### What are we expecting:

- Neatly written and formatted code for production level environment (scalability in mind)
- Demonstration of knowledge on libary setup eg. MUI
- Demonstration of knowledge on React
- Demonstration of knowledge on Typescript
- Demonstration of NextJS best practices
- Demonstration of data/api setup and integration
- Impress us with the skills you have

## 2. Design System Component

We want you to create this component using the following tools:

![example-gif](./images/design-system.gif)
![example-mobile|320x550](./images/design-system-mobile.png){width=320px}
![example-desktop|320x569](./images/design-system-desktop.png){width=320px}

Everything is done through git, so to share this project we would like you to send us a git repo on for example like Github/Gitlab etc.

We would like you to use [Storybook](https://storybook.js.org/) as a start for this assignment, and in our apps we use [Material-UI](https://material-ui.com]) as a base for our components.

Create a few pages like this with different kind of text and link them together in the menu.

Have MUI as a base for the components and incorperate the best way to have the animations how its shown in the design.

Have the component be responsive on Desktop and Mobile

Icons you can use either random from the internet or other packages.

#### What are we expecting:

- Neatly written and formatted code for production level environment (scalability in mind)
- Demonstration of knowledge on libary setup eg. MUI
- Demonstration of knowledge on React
- Demonstration of knowledge on Typescript
- Demonstration of Storybook best practices
- Demonstration of Design System best practices
- Demonstration of Responsiveness
- Impress us with the skills you have

## 3. NodeJS Back-end

Create a function/method that can assess a list of webservers and then returns 
a server with the lowest priority. Also create a unit test that can check if 
the function/method works as expected.

![diagram|301x481](./images/backend.jpeg)

#### Requirements

- A `findServer()` function which returns a Promise that either:
  - Resolves and return an online server with the lowest priority.
  - Reject with an error if no servers are online.
- The HTTP server requests should be used to check if the server is online or offline depending on the following requirements:
  - All server GET requests should be run in parallel.
  - The GET request should timeout after 5 seconds.
  - When the GET request responds with a status code of 200-299, it is considered online.
- A unit test that checks all the underlying components/requirements.
  - The server requests should be mocked.

#### JSON Array to use

```json
[
  {
    "url": "https://does-not-work.perfume.new",
    "priority": 1
  },
  {
    "url": "https://gitlab.com",
    "priority": 4
  },
  {
    "url": "http://app.scnt.me",
    "priority": 3
  },
  {
    "url": "https://offline.scentronix.com",
    "priority": 2
  }
]
```

#### What are we expecting

- Neatly written and formatted code for production level environment.
- Demonstration of knowledge on NodeJS.
- Demonstration of knowledge on Typescript.
- Demonstration of knowledge on Promises/aync/await.
- Demonstration of knowledge on Unit Testing including experience with mocking target server(s) (We DO NOT expect you to have high test coverage).
