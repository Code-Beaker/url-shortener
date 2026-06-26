# URL Shortener App using React JS, TailwindCSS and TinyURL

- [URL Shortener App using React JS, TailwindCSS and TinyURL](#url-shortener-app-using-react-js-tailwindcss-and-tinyurl)
  - [Preview](#preview)
  - [Tech Stack](#tech-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [API](#api)
  - [Features](#features)
  - [Process](#process)
  - [Testing for others](#testing-for-others)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
      - [Frontend](#frontend-1)
      - [Backend](#backend-1)
    - [Run Locally](#run-locally)
    - [Deployment](#deployment)
  - [What's next?](#whats-next)

Hi everyone, I'm attempting a Frontend Mentor challenge after a long time.

I have always used HTML, CSS and JavaScript for all my previous challenges. For this one, I decided to go with React and TailwindCSS. I thought that might help me learn React more. I want to learn more by building projects. It took me about 5-6 hours to code this.

One thing I noticed whilst is, coding with React felt faster compared to just plain HTML and CSS. I also used ChatGPT to solve errors with code and also implement the API functionality.

I used React, TailwindCSS and TinyURL for this project. Also implemented a mobile navigation menu to make this responsive for mobile devices. I believe it's not the best implementation, but it does work.

## Preview

![Desktop](image.png)

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express.js

### API

- [TinyURL](https://tinyurl.com/)

## Features

- Shorten long URLs
- Copy shortened URLs
- Responsive design
- Backend API built with Express
- TinyURL API integration

## Process

The biggest challenge was the API itself. I tried cleanuri but, noticed that the shortened URL was redirecting to some random websites. So, I had to switch to TinyURL for the URL shortening to actually work.

The next challenge was setting up the backend to make the API key secure. I had to set up Express to create a backend server and deploy it using Render. I'm not familiar with Backend, so this was a new kind of workflow for me. This setup took the longest time because switching from cleanuri to TinyURL gave me a bunch of errors and I had to change a lot of code. I had to check their documentations and do some ChatGPT to get these issues solved.

I did vibe code the footer since coding the footer is one of the most boring parts of a project as per my experience. It is responsive and does work as expected.

Any help on improving my code would be appreciated. I'm a beginner in React, so my code isn't the best — if you could share better coding practices, tips, or anything useful, that'd be great.

## Testing for others

### Installation

Clone the repository

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

Install frontend dependencies

```bash
npm install
```

Install backend dependencies

```bash
cd server
npm install
```

### Environment Variables

#### Frontend

Create a `.env` file in the project root.

```env
VITE_API_URL=http://localhost:3000
```

#### Backend

Create `server/.env`

```env
TINYURL_API_TOKEN=YOUR_API_TOKEN
```

### Run Locally

Start the backend

```bash
cd server
node server.js
```

Start the frontend

```bash
npm run dev
```

### Deployment

- Frontend: Vercel

- Backend: Render

## What's next?

This is my attempt to apply what I have learned in React in a real project. I will try building more projects to create a solid foundation in React.
