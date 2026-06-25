# Ayush Bhardwaj — Portfolio Website

Personal portfolio showcasing my work as a **Full Stack Developer** and **Data Science** student. Built with React, Three.js, and GSAP for smooth scroll-driven animations and an interactive 3D hero section.

**Live repo:** [github.com/dekstopbreached/Ayush-Bhardwaj-portfolio](https://github.com/dekstopbreached/Ayush-Bhardwaj-portfolio)

---

## About

I'm Ayush Bhardwaj, a B.Tech Computer Science Engineering (Data Science) student at Chandigarh University, Mohali. I build full stack web applications with React, Next.js, Node.js, and Express.js, and I enjoy automation, robotics simulation, and data-driven problem solving.

**Contact:** [ayushbhardwaj1600@gmail.com](mailto:ayushbhardwaj1600@gmail.com)  
**GitHub:** [github.com/dekstopbreached](https://github.com/dekstopbreached)  
**LinkedIn:** [linkedin.com/in/ayush-bhardwaj-355999320](https://www.linkedin.com/in/ayush-bhardwaj-355999320/)

---

## Features

- Interactive **3D character** hero section (React Three Fiber + Three.js)
- **GSAP** scroll animations, text splitting, and smooth scrolling
- Animated landing text rotation (Developer / Data Science, Computer Science / Engineering Student)
- Starfield background and custom cursor
- Sections: About, What I Do, Career, Work, Tech Stack, Contact
- Responsive layout for desktop and mobile
- Loading screen with progress animation

---

## Tech Stack

| Category | Tools |
|----------|-------|
| Frontend | React 18, TypeScript, Vite |
| 3D / WebGL | Three.js, React Three Fiber, Drei |
| Animation | GSAP, GSAP ScrollTrigger, ScrollSmoother |
| Styling | CSS |
| Analytics | Vercel Analytics |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/dekstopbreached/Ayush-Bhardwaj-portfolio.git
cd Ayush-Bhardwaj-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Character/     # 3D model scene and utilities
│   ├── styles/        # Component CSS
│   └── utils/         # GSAP animations (initialFX, splitText, GsapScroll)
├── context/           # Loading state provider
├── data/              # Character bone data
└── shims/             # GSAP trial plugin shims
```

---

## GSAP Notice

This project uses **GSAP trial plugins** (SplitText, ScrollSmoother) via local shims. Trial plugins are intended for evaluation and may not be suitable for all production use cases.

For official GSAP Club plugins and licensing, see:  
https://gsap.com/docs/v3/Installation/

---

## Credits

This portfolio is based on the open-source portfolio template by **Moncy Yohannan**. The design and animation architecture were adapted and customized for my personal brand and content.

Original template credit: [Moncy Yohannan Portfolio](https://github.com/moncy-yohannan)

---

## License

This project is for personal portfolio use. See the original template repository for license details.
