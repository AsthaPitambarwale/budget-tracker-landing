# Budget Tracker Landing Page

A modern and responsive **landing page** for a Budget Tracker app, built using **Next.js**, **React**, and **Tailwind CSS**. This project serves as a promotional front page highlighting app features, pricing, testimonials, and more.

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Running the Project](#running-the-project)  
- [Contributing](#contributing)  


## Overview

This landing page introduces users to the Budget Tracker application, showcasing:

- Key features of the app  
- Pricing plans  
- Testimonials  
- Call-to-action sections for downloads or subscriptions  

The design is fully **responsive**, optimized for both **desktop and mobile devices**.

## Features

- Hero section with main highlights (`Hero.jsx`)  
- Feature showcase (`Features.jsx`)  
- Pricing section (`Pricing.jsx`)  
- Testimonials section (`Testimonials.jsx`)  
- Navbar and Footer (`Navbar.jsx`, `Footer.jsx`)  
- Fully responsive layout with **Tailwind CSS**  
- Component-based structure for easy customization  


## Tech Stack

- **Next.js** – React framework for server-side rendering  
- **React** – Component-based UI  
- **Tailwind CSS** – Utility-first CSS framework  
- **PostCSS** – For processing CSS (`postcss.config.js`)  
- **Node.js** – Backend environment for development  

## Project Structure
```bash
budget-tracker-landing/
│
├─ app/
│ ├─ globals.css
│ ├─ layout.jsx
│ └─ page.jsx
│
├─ components/
│ ├─ Features.jsx
│ ├─ Footer.jsx
│ ├─ Hero.jsx
│ ├─ Navbar.jsx
│ ├─ Pricing.jsx
│ └─ Testimonials.jsx
│
├─ node_modules/
├─ package.json
├─ next.config.js
├─ postcss.config.js
├─ tailwind.config.js
└─ README.md
```

- **app/** – Contains main pages and global styles  
- **components/** – Reusable React components for the landing page  
- **globals.css** – Global Tailwind and custom styles  
- **layout.jsx** – Main layout wrapper  
- **page.jsx** – Home page component  

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/budget-tracker-landing.git
cd budget-tracker-landing
```
2. Install dependencies:

```bash
npm install
# or
yarn install
```
3. Running the Project
Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to see the landing page in your browser.

## Contributing

1. Fork the repository

2. Create a new branch: git checkout -b feature/your-feature

3. Make your changes and commit: git commit -m "Add new feature"

4. Push to the branch: git push origin feature/your-feature

5. Open a Pull Request

## Contact

Astha Pitambarwale
Email: asthapitambarwale@gmail.com.com

Portfolio: https://portfolio-2-0-ruby-one.vercel.app/

